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
                t1 = opt.texts.substring(0, opt.textLength) + "&nbsp;..." + "<a class='moreoh'   >" + opt.overText + "</a>";
            } else {
                t1 = opt.texts;
            }
            $(this).html('<div class="moreText">' + t1 + '</div>');
        }
        if (options.ooType == '2') {
            if (opt.texts.length > opt.textLength) {
                t1 = opt.texts.substring(0, opt.textLength) + "&nbsp;..." + "<a class='moreoh' >" + opt.overText + "</a>";
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

$(function () {
    var str = $(".xo").html();
    $(".xo").overTexts({
        texts: str,
        textLength: "58",
        overText: "「展开」",
        openText: "「收起」",
        ooType: "2"
    });
    //表格滚动提示
    if ($('#tableBox').width() > $('.content').width()) {
        var flag = true;
        var index = true;
        $(window).scroll(function () {
            if ($(window).scrollTop() > ($('#tableBox').offset().top) - $('#tableBox').height() + 100 && flag) {
                var width = $('#tableBox').width() - $(window).width();
                var scrollWidth = 2;
                var inter = setInterval(function () {
                    if (index && scrollWidth < width) {
                        $('.content').scrollLeft(scrollWidth);
                        scrollWidth +=1;
                    } else if (scrollWidth > 1) {
                        index = false;
                        $('.content').scrollLeft(scrollWidth);
                        scrollWidth -= 1;
                    } else {
                        $('.content').scrollLeft(0);
                        clearInterval(inter);
                    }
                },4);
                flag = false;
            }
        })
    }
    //nav 切换
    $('.nav').on('click', 'li', function () {
        $('.nav li').removeClass('current');
        $(this).addClass('current');
    })

})



$(function () {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '<span style="font-weight: 600;color: #666;">交易动态</span>',
            verticalAlign: 'middle',
            y: -20
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -00,
                    style: {
                        fontWeight: 'bold',
                        color: '#444',
                         textShadow: '0px 1px 0px #fff'
                    }
                },
                colors:['#ffa59f',"#b8e8d0",'#bed5ff','#7dabff','#ac98fd','#f8dd98'],
                borderWidth:'0',
                center: ['50%', '50%'],
                showInLegend: true
            },
            series: {
                allowPointSelect: false
            }
        },
        series: [{
            type: 'pie',
            name: '21',
            innerSize: '50%',
            data: [
                ['医药生物',   145],
                ['代工',       126.8],
                ['机械东方', 112.8],
                ['房贷收紧后',    18.5],
                ['打分',    16.2],
                // {
                //     name: '其他',
                //     y: 0.7,
                //     dataLabels: {
                //         // 数据比较少，没有空间显示数据标签，所以将其关闭
                //         enabled: false
                //     }
                // }
            ]
        }]
    });

});
