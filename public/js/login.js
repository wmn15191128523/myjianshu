new Vue({
    el:"div.main",
    data:{
        uname:"",
        upwd:"",
        
    },
    methods:{
      
      signin(){
        (async ()=>{
            var res=await axios.post(
            "http://localhost:3000/users/signin",Qs.stringify({
                uname:this.uname,
                upwd:this.upwd
            })
    
            )
            res=res.data;
            if(res.ok==0)
                alert(res.msg)
            else{
                alert("登录成功！即将返回原来的页面...")
                //?back=http://localhost:3000/index.html?uid=1 只要第一个等号后面的东西
                if(location.search.startsWith("?back=")){
                    var url=location.search.slice(6)
                }else{
                    var url="index.html?uid=1"
                }
                location.href=url;
                /*if(location.search.startsWith("?uid=")){
                    var url=location.search.split("=")[1]
                }
                location.href="index.html?uid="+url;*/
                
            }
            })()
                }
            }
})