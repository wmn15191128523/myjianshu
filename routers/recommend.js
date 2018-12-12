const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/getRecommend",(req,res)=>{
    var sql=`select * from recommend`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
module.exports=router;