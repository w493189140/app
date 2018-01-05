
$(function(){
    var fontSize = parseInt(document.documentElement.style.fontSize);
    var pageHeight = $(window).height();
    var contentHeight = pageHeight/fontSize-1.2-5.6-1.4;
    if(isWeiXin()){
        contentHeight=contentHeight+1;
    }
   //$(".content").html(interactHtml);
    $("#wrapper").css('height',contentHeight+'rem');
    $("#wrapper ul").css('min-height',contentHeight+'rem');
    scroll();

    $(".brief_h").click(function(){
        $(this).attr("class","f_left brief_h now");
        $(".message_h").attr("class","f_left message_h");
        $(".brief").css("display","block");
        $(".message").css("display","none");
        $(".foot,.zhanwei").css("display","none");
        $("#wrapper").css('height',contentHeight+'rem');
        $("#wrapper ul").css('min-height',contentHeight+'rem');
        init("#wrapper");

    })
    $(".message_h").click(function(){
        $(this).attr("class","f_left message_h now");
        $(".brief_h").attr("class","f_left brief_h");
        $(".brief").css("display","none");
        $(".message").css("display","block");
        $(".foot,.zhanwei").css("display","block");
        $("#wrapper1").css('height',(contentHeight-1.2)+'rem');
        $("#wrapper ul").css('min-height',(contentHeight-1.2)+'rem');
        init("#wrapper1");
    })

function scroll(){
    var myScroll = new IScroll("#wrapper", { keyBindings: true
    });
}

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
