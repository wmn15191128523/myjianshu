const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/getSpecial",(req,res)=>{
    var sql=`select * from special;`
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        //res.write(JSON.stringify(result));
        //res.end()
        res.send(result)
    })
})
module.exports=router;