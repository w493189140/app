/*判断是否微信浏览器*/
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}
if(isWeiXin()){
   $('header').hide();
    $(".content").css('margin-top','0');
}