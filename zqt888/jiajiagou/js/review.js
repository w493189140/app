$(function(){
    if(isWeiXin()){
        $('.video').css('top','0');
    }
    //ios遮键盘
    var u = navigator.userAgent, app = navigator.appVersion;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isiOS) {
        $('#askinput').focus(function () {
            window.setTimeout(scrollBottom, 500);
        });
    }
    function scrollBottom() {
        window.scrollTo(0, $(window).height() + 300);
    }

})
