// JavaScript Document
$(document).ready(function(){
//文字展开
$(".zhankai").click(function(){
   if($(".gu_cen_txt").css("height")=="30px"){
       $(".gu_cen_txt").css("height","auto")
       $(".zhankai").html("收起")
   }else{
       $(".gu_cen_txt").css("height","30px")
       $(".zhankai").html("更多")
   }
})
    /*修改新增*/
    $(".gu_col1").mouseenter(function(){
        var _this=$(this)
        var txt_this=$(this).children("em").text()
        _this.append("<b>"+txt_this+"</b>")
    })
    $(".gu_col1").mouseleave(function(){
       $(this).children("b").remove()
    })
    /*修改新增结束*/
})