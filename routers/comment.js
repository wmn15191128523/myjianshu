const express=require("express")
const router=express.Router()
const pool=require("../pool")


router.get("/getComment",(req,res)=>{
    var uid=parseInt(req.query.uid);
    //1:参数  当前页码  页大小(一页显示几行数据)
    var pno = req.query.pno;            //2
    var pageSize = req.query.pageSize;  //5
    //2:sql
    //2.1:查找总记录数->转换总页数  15->3
    var sql = "SELECT count(id) as c FROM jianshu_comment where uid=?";

    //解决异步请求 
    var obj = {};      //保存发送客户端数据
    var progress = 0;  //进度
    pool.query(sql,[uid],(err,result)=>{
        if(err)throw err;
        var c = Math.ceil(result[0].c/pageSize);
        obj.pageCount = c;
        progress+=50;
        if(progress==100){
            res.send(obj);
        }
    });
    //2.2:查找当前页内容           中间5行
    var sql = " SELECT id,img,content,ctime,user";
        sql += " FROM jianshu_comment WHERE uid=?";
        sql += " LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);   //计算分页偏移量
    pageSize = parseInt(pageSize)
    pool.query(sql,[uid,offset,pageSize],(err,result)=>{
        if(err)throw err;
        //console.log(result);
        obj.data = result;
        progress+=50;
        if(progress==100){
            res.send(obj);
        }
    })
})
module.exports=router;
