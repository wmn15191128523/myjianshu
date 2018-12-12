const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/newindex",(req,res)=>{
    var pno=req.query.pno;    //第几页
    var pageSize=req.query.pageSize;  //每页的个数
    var sql=`select count(id) as c from js`;
    var obj={};
    //进度条
    var progress=0;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //console.log(result[0]);
       
        //查到的数据result[0].c  除以每页有几个数据
        var c=Math.ceil(result[0].c/pageSize);   //总页数
        obj.pageCount=c;
        progress += 50;
        if(progress==100){
           
            res.send(obj);
        }
    })
    var sql=`select id,title,content,author,img from js limit ?,?`;
    var offset=parseInt((pno-1)*pageSize);
    pageSize=parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        
        obj.data = result;
        progress+=50;
        if(progress==100){
          
            res.send(obj);
        }
    })
    
})


module.exports=router;