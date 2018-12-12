const express=require("express")
const router=express.Router()
const pool=require("../pool")

//列表项的生成
router.get("/getlist",(req,res)=>{
    var type=req.query.type;
    console.log(type);
    var sql="SELECT * FROM details where type=?"
    pool.query(sql,[type],(err,result)=>{
        if(err) console.log(err);
        
        res.writeHead(200,{
            //解决中文乱码
            "Content-Type":"application/json;charset=utf-8",//解决跨域请求
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));//将json数组转换为字符串格式
        res.send();
    })
})
module.exports=router;
