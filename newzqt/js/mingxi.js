$(function () {
    var fontSize = parseInt(document.documentElement.style.fontSize);
    var pageHeight = $(window).height();
    var contentHeight ;
    if(isWeiXin()){
        contentHeight = pageHeight / fontSize;
    }else{
        contentHeight = pageHeight / fontSize - 1.2;
    }
    $("#wrapper").css('height',contentHeight+'rem');
    $("#wrapper ul").css('min-height',contentHeight+'rem');
    init("#wrapper")
    function init(id){
        var myScroll = new IScroll(id, { keyBindings: true,click:true
        });
        //myScroll.scrollToElement(id+" ul li:last-child",0 ,null,null,true);
        myScroll.on("scrollEnd",function(e){
            if(myScroll.maxScrollY == myScroll.y){
                console.log("我已滚动到底部");
                myScroll.refresh();
            }else if(myScroll.y ==0 ){
                myScroll.refresh();
                console.log("我已刷新");

            }
        });

    }
})