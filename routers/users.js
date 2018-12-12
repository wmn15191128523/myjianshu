const express=require("express")
const router=express.Router()
const pool=require("../pool")
//登录的接口
router.post("/signin",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    console.log(uname,upwd);
    pool.query(
        "select * from details where uname=? and upwd=?",
        [uname,upwd],
        (err,result)=>{
          if(err) console.log(err);
          res.writeHead(200,{
             "Content-Type":"application/json;charset=utf-8",
             "Access-Control-Allow-Origin":"*"
          })
          if(result.length>0){
            var user=result[0];
            console.log(user);
            req.session.uid=user.uid
            console.log(req.session["uid"]);
            res.write(JSON.stringify({
              ok:1
            }))
          }else{
              res.write(JSON.stringify({
                  ok:0,
                  msg:"用户名或密码错误"
              }))
          }
          res.end();
        }
    )
})

router.get("/islogin",(req,res)=>{
  res.writeHead(200);
  if(req.session.uid===undefined){
      res.write(JSON.stringify({ok:0}))
      res.end()
    }else{
   var uid=req.session.uid;
   var sql="select * from details where uid=?"
   pool.query(sql,[uid],(err,result)=>{
     if(err) console.log(err);
     var user=result[0];
     res.write(JSON.stringify({
       ok:1,uname:user.uname
     }))
     res.end()
   })
  }
})

module.exports=router;