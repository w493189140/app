
$(function(){
    $(".radio_btn").click( function () {
        if($("#other").is(':checked')){
            $("#other").prev().find("span").attr("class","iconfont icon_continue");
            $("#action").prev().find("span").attr("class","iconfont icon_select");
        }else{
            $("#other").prev().find("span").attr("class","iconfont icon_select");
            $("#action").prev().find("span").attr("class","iconfont icon_continue")
        }
    });
})