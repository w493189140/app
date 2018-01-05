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
    var topFixed = document.getElementById("topFixed");
    var topZhan = document.getElementById("topZhan");
    var zhanwei = document.getElementById("topzhanb");
    var longtopw = document.getElementById("pullrefresh");
    topFixed.style.display = "none";
    topZhan.style.display = "none";
    zhanwei.style.display = "none";
    longtopw.style.top="0"
}