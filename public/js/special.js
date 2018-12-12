/* 点击上边文字，相应的获取底下对应的内容*/
$(function(){
    /*找到元素ul，给他添加点击事件，点击到a元素上，让下面对应显示内容 */
$("ul:has([data-toggle=item])").on("click","[data-toggle=item]",function(e){
    e.preventDefault()
    var $a=$(this)
    var id=$a.attr("href")
    //console.log($a)
    $a.parent().addClass("active").siblings().removeClass("active")
    $(id).addClass("active").siblings().removeClass("active")
})

})
new Vue({
    el:"#zt",
    data:{
        res:{},
        list:[],
        list1:[],
        list2:[],
        list3:[]
    },
    mounted(){
        axios.get("http://127.0.0.1:3000/special/getSpecial").then((result)=>{
            //console.log(result);
            //console.log(result.data)
            this.res=result.data;
            this.list=this.res.slice(0,9);
            //console.log(this.list)
            this.list1=this.res.slice(9,18);
            // console.log(this.list1)
            this.list2=this.res.slice(18,27);
            // console.log(this.list2)
            this.list3=this.res.slice(27);
            // console.log(this.list3)
        });

    }
})
