//引入模块
const express=require("express");

const bodyParser=require("body-parser");

const index=require("./routers/index");
const users=require("./routers/users");
const list=require("./routers/list");
const comment=require("./routers/comment");
const session = require('express-session');
const home=require("./routers/home");
const special=require("./routers/special");
const recommend=require("./routers/recommend");
const cors=require("cors")
//创建express对象
var app=express();

app.use(cors({
    origin:["http://127.0.0.1:3000","http://localhost:3000"],
   
    credentials:true
}))

//监听端口
var server = app.listen(3000);
app.use(bodyParser.urlencoded({extended:false}));
//加载静态资源
app.use(express.static(__dirname+"/public"))
//配置session模块中间件
app.use(session({
  secret: '128位随机字符串',
  resave: false,
  saveUninitialized: true,
}))


app.use("/index",index);
app.use("/users",users);
app.use("/list",list);
app.use("/comment",comment);
app.use("/home",home);
app.use("/special",special);
app.use("/recommend",recommend);
