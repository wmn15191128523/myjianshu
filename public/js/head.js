$(function(){
    
    $(":text").on("focus",function(){
    var $input=$(this);
    
    $("div.ssk").css("display","block");
    })
    $(":text").on("blur",function(){
    var $input=$(this);
    
    $("div.ssk").css("display","none");
    })  

 
    $("#Aa").hover(function(){
        $("div.Aa").toggleClass("hover")
    })
    $("div.Aa").hover(function(){
        $("div.Aa").toggleClass("hover")
    })



})

