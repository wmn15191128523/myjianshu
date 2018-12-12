$(function(){
    var a=document.getElementById("container");
    a.onclick=function(e){
    e.preventDefault();
}
})
new Vue({
    el:"#container",
    data:{res:{}},
    mounted(){
        axios.get("http://127.0.0.1:3000/recommend/getRecommend").then((result)=>{
            //console.log(result)
            this.res=result.data;
        })
    }
})