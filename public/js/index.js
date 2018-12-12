if(location.search.indexOf("uid=")!=-1)
  var uid=location.search.split("=")[1];//获取uid
  console.log(uid);
new Vue({
        el:"#app",
        data:{
           uid,
           res:{},
           pageIndex:0,
           list:[],
           pageSize:5,
           islogin:true,
           uname:""
        },
        mounted(){
            axios.get("http://localhost:3000/index/getIndex",{
                    params:{uid:this.uid}//记得传参
            }).then(res=>this.res=res.data[0]);
            
            
        },
        computed:{
          signin:function(){
             return `login.html?back=${location.href}`;
            //return 'login.html?back=http://localhost:3000/index.html?uid=1'
          }
        },
        created(){
          this.getlogin();
          this.getMore()
        },
        methods:{
          getMore(){
           this.pageIndex++;
           axios.get("http://localhost:3000/comment/getComment",{
                    params:{
                      uid:this.uid,
                      pno:this.pageIndex,
                      pageSize:this.pageSize,
                    }
                    
            }).then(res=>{
              console.log(res.data);
              var row=this.list.concat(res.data.data)
              this.list=row;
              console.log(this.list);
            })
          },
          getlogin(){
            axios.get("http://localhost:3000/users/islogin",{
                
            }).then((res)=>{
              this.res=res.data;
              var item=this.res;
              if(item.ok=="0"){
                this.islogin=true;
              }else{
                this.islogin=false;
                this.uname=item.uname;
              }
            }
               
            );
          }
        }
    
})