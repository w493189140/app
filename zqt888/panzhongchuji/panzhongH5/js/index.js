/**
 * Created by ant on 2017/3/6.
 */

(function ($) {
    /*
     * 插件名称是overTexts
     * 使用方法：1. $("you Dom ClassName or ID").overTexts({ texts:"you need overhide text...." });//这种的初始的，不带参数的，默认参数是 20字长 且显示展开和收起的
     * texts: "测试文本...此处省略200字...测试文本",
     * textLength: "20", //你需要定义超过多少字，就显示收起
     * overText: "展开",  //你需要设置的默认名称，展开 显示
     * openText: "收起",  //你需要设置的默认名称，收起 收缩
     * ooType: "2" //展开和收缩的类型， 0 不显示展开和收缩，仅为省略号 || 1 显示展开，不显示收缩 ||2 显示展开和收缩 || 3显示省略号
     *
     * */
    $.fn.overTexts = function (options) {
        var ooText, t1;
        var dft = {
            //初始化的参数配置
            texts: "展开和收缩的类型， 0 不显示展开和收缩，仅为省略号 || 1 显示展开，不显示收缩 ||2 显示展开和收缩",
            textLength: "20",
            overText: "展开",
            openText: "收起",
            ooType: "2" //展开和收缩的类型， 0 不显示展开和收缩，仅为省略号 || 1 显示展开，不显示收缩 ||2 显示展开和收缩 || 3显示省略号
        }
        var opt = $.extend(dft, options);
        ooText = opt.texts;			//临时装载 数据 用于填充到data-text内的
        if (options.ooType == '0') {
            $(this).html('<div class="moreText">' + opt.texts + '</div>');
        }
        if (options.ooType == '1') {
            ooText = opt.texts;
            if (opt.texts.length > opt.textLength) {
                t1 = opt.texts.substring(0, opt.textLength) + "&nbsp;..."   + "<a class='moreoh'   >" + opt.overText + "</a>";
            } else {
                t1 = opt.texts;
            }
            $(this).html('<div class="moreText">' + t1 + '</div>');
        }
        if (options.ooType == '2') {
            if (opt.texts.length > opt.textLength) {
                t1 = opt.texts.substring(0, opt.textLength) + "&nbsp;..."  + "<a class='moreoh' >" + opt.overText + "</a>";
            } else {
                t1 = opt.texts;
            }

        }
        if (options.ooType == '3') {
            if (opt.texts.length > opt.textLength) {
                t1 = opt.texts.substring(0, opt.textLength) + "...";
            } else {
                t1 = opt.texts;
            }

        }
        //无论何种结果，均执行此
        $(this).html('<div class="moreText">' + t1 + '</div>');
        //此处判断 就是 已经有展开或者收起了
        if ($(this).find("a").hasClass("moreoh")) {
            //事件委托，让他可以执行
            $(".moreText").on("click", "a.moreoh", function () {//更多或者收起的点击事件
                var moreoh = $(this).find("a.moreoh");//我是更多或者收起的dom
                if (moreoh.context.innerText == opt.overText) {//如果我此时是展开
                    if (opt.ooType == 2) {
                        t1 = opt.texts + "<a class='moreoh' >" + opt.openText + "</a>";
                        moreoh.context.innerText = opt.openText;
                        $(this).parents(".moreText").html(t1);
                    } else {
                        t1 = opt.texts;
                        $(this).parents(".moreText").html(t1);
                    }

                }
                if (moreoh.context.innerText == opt.openText) {//如果我此时是收起
                    t1 = opt.texts.substring(0, opt.textLength) + "&nbsp;..." + "<a class='moreoh'>" + opt.overText + "</a>";
                    moreoh.context.innerText = opt.overText;
                    $(this).parents(".moreText").html(t1);
                }
            });
        }

    }
})(jQuery);

$(function () {
    //超长文字展开收起
    var str = $(".xo").html();
    $(".xo").overTexts({
        texts: str,//'校长年前在新浪微博做了两次直播公开课，因为形式轻松接地气，紧贴市场热点时效性强，还能互动交流当场解决问题，所以反。。。。。校长年前在新浪微博做了两次直播公开课，因为形式轻松接地气，紧贴市场热点时效性强，还能互动交流当场解决问题，所以反',
        textLength: "48",
        overText: "「展开」",
        openText: "「收起」",
        ooType: "2"
    });
    var str1 = $(".ox1").html();
    $(".ox1").overTexts({
        texts: str1,
        textLength: "48",
        overText: "「展开」",
        openText: "「收起」",
        ooType: "2"
    });
//swiper

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        //effect: 'coverflow',
        slidesPerView: 1.2,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 15,
        initialSlide:1
    });

    //模态框行为
    $("#buy_btn").click(function(){
        $(".model_buy").fadeIn(400);
    })
    $(".btn_close").click(function(){
        $(this).parents('.model').fadeOut(400);
    })
    //    选择价格
    $("#buyClass .number").click(function(){
        $(this).parent().children(".now").removeClass("now");
        $(this).addClass("now");
        var num =  $(this).html()
        var price = (num=="龙虎榜基础学堂")?"¥577.00":((num=="龙虎榜实战训练营")?"¥5770.00":"¥11540.00");
        $("#price").html(price);
        $("#buyClassConfirm").html(num);
    })
})

