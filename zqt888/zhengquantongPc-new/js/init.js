// JavaScript Document
$(document).ready(function(){
//主页-固定栏
    $(window).scroll(function() {
        var scrollY = $(document).scrollTop();
            if (scrollY>=350){
                $(".posback").show()
             }
        if (scrollY<=350){
             $(".posback").hide()
             }
    })
//返回顶部
    $(window).scroll(function() {
        var tops = $(document).scrollTop();
        $(".ftop").fadeIn()
        if (tops==0){
            $(".ftop").fadeOut()
        }
    })
    /*修改新增*/
$(".ftop").click(function(){
        $('body,html').animate({ scrollTop: 0 }, 500);
    })

//删除底部固定栏
    $("#posk_err").click(function(){
        $(this).parent().remove()
    })
//随机二维码
    var wei_bg=Math.floor(Math.random()*16+1);
    console.log(wei_bg)
    var bg='url(../images/code/code'+wei_bg+'.jpg)';
    $(".wem").css("background-image",bg);
//产品VIP
    $(".fvip").mouseenter(function(){
        $(".sild_kf").fadeIn().css("left","-120px")
    })
    $(".fvip").mouseleave(function(){
        $(".sild_kf").hide().css("left","-90px")
    })
})
