(function ($) {
    $.fn.overTexts = function (options) {
        var ooText, t1;
        var dft = {
            texts: "展开和收缩的类型， 0 不显示展开和收缩，仅为省略号 || 1 显示展开，不显示收缩 ||2 显示展开和收缩",
            textLength: "20",
            overText: "展开",
            openText: "收起",
            ooType: "2"
        }
        var opt = $.extend(dft, options);
        ooText = opt.texts;
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
        $(this).html('<div class="moreText">' + t1 + '</div>');
        if ($(this).find("a").hasClass("moreoh")) {
            $(".moreText").on("click", "a.moreoh", function () {
                var moreoh = $(this).find("a.moreoh");
                if (moreoh.context.innerText == opt.overText) {
                    if (opt.ooType == 2) {
                        t1 = opt.texts + "<a class='moreoh' >" + opt.openText + "</a>";
                        moreoh.context.innerText = opt.openText;
                        $(this).parents(".moreText").html(t1);
                    } else {
                        t1 = opt.texts;
                        $(this).parents(".moreText").html(t1);
                    }
                }
                if (moreoh.context.innerText == opt.openText) {
                    t1 = opt.texts.substring(0, opt.textLength) + "&nbsp;..." + "<a class='moreoh'>" + opt.overText + "</a>";
                    moreoh.context.innerText = opt.overText;
                    $(this).parents(".moreText").html(t1);
                }
            });
        }
    }
})(jQuery);
$(function(){
    var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        loop : true,
    })
    var str = $(".xo").html();
    $(".xo").overTexts({
        texts: str,
        textLength: "60",
        overText: "「展开」",
        openText: "「收起」",
        ooType: "2"
    });
    $('#btnTop').click(function(){
        if($(this).children('span').hasClass('top')){
            console.log(11)
            $(this).children('span').attr('class','iconfont icon_right_arrow down')
            $('.detail .info').slideUp();
        }else{
            $(this).children('span').attr('class','iconfont icon_right_arrow top')
            $('.detail .info').slideDown();
        }
    })
    $(".content").on("click",".c-title",function(){
        $(".c-title").removeClass("current");
        $(this).addClass("current");
    })
})