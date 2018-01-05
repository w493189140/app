
$(function(){
    var fontSize = parseInt(document.documentElement.style.fontSize);
    var pageHeight = $(window).height();
    var contentHeight = pageHeight/fontSize-1.4-5.6-2.1;
    var flag = true;//不是管理员 普通用户
    $("#wrapper1").css('height',contentHeight+'rem');
    $("#wrapper1 ul").css('min-height',contentHeight+'rem');
    init("#wrapper1");

    $(".host_h").click(function(){
        $(this).attr("class","f_left host_h now");
        $(".interact_h").attr("class","f_left interact_h");
        $(".hint").css("display","block");
        $(".host").css("display","block");
        $(".interact").css("display","none");
        if(flag){
            $("#wrapper").css('height',(contentHeight-1.3)+'rem');
            $("#wrapper ul").css('min-height',(contentHeight-1.3)+'rem');
            init("#wrapper");
        }else{
            $(".foot").css('display','none');
            $("#wrapper").css('height',contentHeight+'rem');
            $("#wrapper ul").css('min-height',contentHeight+'rem');
            init("#wrapper");
        }

    })
    $(".interact_h").click(function(){
        $(this).attr("class","f_left interact_h now");
        $(".host_h").attr("class","f_left host_h");
        $(".hint").css("display","none");
        $(".host").css("display","none");
        $(".interact").css("display","block");
        $(".foot").css('display','block');
        $("#wrapper1").css('height',contentHeight+'rem');
        $("#wrapper1 ul").css('min-height',contentHeight+'rem');
        init("#wrapper1");
    })



    function init(id){
    var myScroll = new IScroll(id, { keyBindings: true
    });
    myScroll.scrollToElement(id+" ul li:last-child",0 ,null,null,true);
    myScroll.on("scrollEnd",function(e){
        if(myScroll.maxScrollY == myScroll.y){
            console.log("我已刷新");
            myScroll.refresh();
        }else if(myScroll.y ==0 ){
            console.log("我已滚动到ding部");
            myScroll.refresh();
        }
    });

    }
    //ios遮键盘
    var u = navigator.userAgent, app = navigator.appVersion;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isiOS) {
        $('#askinput').focus(function () {
            window.setTimeout('scrollBottom()', 500);
        });
    }
    function scrollBottom() {
        window.scrollTo(0, $('body').height() + 90);
        //  var h = $(document).height()-$(window).height();
        // $(document).scrollTop(h);
    }

})
