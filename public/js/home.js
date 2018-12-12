$(function(){
    var a=document.getElementById("getMore");
    a.onclick=function(e){
    e.preventDefault();

}
})
/*轮播 */
function task(){
    var a=lb.querySelector(".show")
    a.className="";
    var next=a.nextElementSibling;
    if(next!=null)
    next.className="show";
    else
    a.parentNode.children[0].className="show"
    }
    var timer=setInterval(task,2000)
    lb.onmouseover=function(){
    clearInterval(timer)
    }
    lb.onmouseout=function(){
    timer=setInterval(task,2000)
    }
/* 二维码  鼠标悬停显示，离开隐藏*/
$(".code").mouseover(function(){ 
   $(this).children().toggleClass("hover")
})
$(".code").mouseout(function(){
    $(this).children().toggleClass("hover")
})
/*滚动一个滚轮让出现返回顶部的操作*/
window.onscroll=function(){
    
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var toTop=document.getElementById("toTop")
    if(scrollTop<=450)
    toTop.style.display="none"; 
    else
    toTop.style.display="block"
}
new Vue({
    el:"#ul1",
    data(){
        return {
        res:[],
        pageIndex:0,
        pageSize:5,
        pageCount:1,
        hasMore:true
        }
    },
    methods:{
        getMore(){
            this.pageIndex++;
            this.hasMore=this.pageIndex<=this.pageCount;
            if(!this.hasMore){return}
            axios.get("http://127.0.0.1:3000/home/newindex?pno="+this.pageIndex+"&pageSize="+this.pageSize).then((result)=>{
            console.log(result);
            //this.res=result.data.data;
            console.log(this.res);
            var rows=this.res.concat(result.data.data)
            this.res=rows;
            this.pageCount=result.data.pageCount;
        })
        }
    },
    created(){
        this.getMore();
    }
})