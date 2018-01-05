$(function () {
    //滚动部分
    var fontSize = parseInt(document.documentElement.style.fontSize);
    var pageHeight = $(window).height();
    var contentHeight ;
    if(isWeiXin()){
        contentHeight = pageHeight / fontSize-2.3;
    }else{
        contentHeight = pageHeight / fontSize - 1.2-2.3;
    }
    $("#wrapper").css('height', contentHeight + 'rem');
    $("#wrapper ul").css('min-height', contentHeight + 'rem');
    init("#wrapper")

    function init(id) {
        var myScroll = new IScroll(id, {
            keyBindings: true, click: true
        });
        //myScroll.scrollToElement(id+" ul li:last-child",0 ,null,null,true);
        myScroll.on("scrollEnd", function (e) {
            if (myScroll.maxScrollY == myScroll.y) {
                console.log("我已滚动到底部");
                myScroll.refresh();
            } else if (myScroll.y == 0) {
                myScroll.refresh();
                console.log("我已刷新");
            }
        });
    }
    //nav 切换
    $('.nav').on('click', 'li', function () {
        $('.nav li').removeClass('current');
        $(this).addClass('current');
        if($(this).find('.img-box').toggleClass('up','down'));
    })
    //日期选择
    var calendar1 = new LCalendar();
    calendar1.init({
        'trigger': '#date1', //标签id
        'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '1900-1-1', //最小日期
        'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
    });
    var calendar2 = new LCalendar();
    calendar2.init({
        'trigger': '#date2', //标签id
        'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '1900-1-1', //最小日期
        'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
    });
})