$(function(){
    if(isWeiXin()){
        $('.video').css('top','0');
    }
    $(".host_h").click(function(){
        //tab栏效果
        $(this).attr("class","f_left host_h now");
        $(".interact_h").attr("class","f_left interact_h");
        //切换内容
        $(".host").css("display","block");
        $(".interact").css("display","none");
        $(".foot").css('display','none');
    })
    $(".interact_h").click(function(){
        //tab栏效果
        $(this).attr("class","f_left interact_h now");
        $(".host_h").attr("class","f_left host_h");
        //切换内容
        $(".host").css("display","none");
        $(".interact").css("display","block");
        $(".foot").css('display','block');

    })

    //ios遮键盘
    var u = navigator.userAgent, app = navigator.appVersion;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isiOS) {
        $('#askinput').focus(function () {
            window.setTimeout(scrollBottom, 500);
        });
    }
    function scrollBottom() {
        window.scrollTo(0, $('body').height() + 300);
    }

})
