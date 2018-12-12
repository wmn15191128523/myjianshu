if(location.search.indexOf("type=")!=-1)
  var type=location.search.split("=")[1];
  console.log(type);
new Vue({
    el:"#app",
    data:{
        type,
        res:[{}],
       
    },
    mounted(){
        axios.get("http://localhost:3000/list/getlist",{
                params:{type:this.type}//记得传参
        }).then(res=>this.res=res.data)
        
    },
    computed:{
          signin:function(){
             return `login.html?back=${location.href}`;
            //return 'login.html?back=http://localhost:3000/index.html?uid=1'
          }
        },
    
})