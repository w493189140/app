$(function () {
    var fontSize = parseInt(document.documentElement.style.fontSize);
    var pageHeight = $(window).height();
    var contentHeight;
    if (isWeiXin()) {
        contentHeight = pageHeight / fontSize;
    } else {
        contentHeight = pageHeight / fontSize - 1.25;
    }
    $("#wrapper").css('height', contentHeight + 'rem');
    $("#wrapper .lists").css('min-height', contentHeight + 'rem');

    var myScroll = new IScroll("#wrapper", {
        keyBindings: true, click: true
    });
    //myScroll.scrollToElement(id+" ul li:last-child",0 ,null,null,true);
    myScroll.on("scrollEnd", function (e) {
        if (myScroll.maxScrollY == myScroll.y) {
            console.log("我已滚动到底部");
            myScroll.refresh();
        } else if (myScroll.y == 0) {
            myScroll.refresh();
            console.log("我已到底部");
        }
    });

    $('.gegu-product').on('click', '.title-top', function () {
        if ($(this).find('.arrow').hasClass('icon_left_arrow')) {
            $(this).find('.arrow').attr("class", "arrow iconfont icon_down_arrow");
            $(this).next('.content').slideDown();
            setTimeout(function () {
                myScroll.refresh();
            },400)

        } else {
            $(this).find('.arrow').attr("class", "arrow iconfont icon_left_arrow");
            $(this).next('.content').slideUp();
            setTimeout(function () {
                myScroll.refresh();
            },400)
        }
    })

})