const express=require("express")
const router=express.Router()
const pool=require("../pool")

//不同uid获取不同内容
router.get("/getIndex",(req,res)=>{
    var uid=req.query.uid;
    console.log(uid);
    
    var sql="SELECT * FROM details where uid=?"
    pool.query(sql,[uid],(err,result)=>{
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