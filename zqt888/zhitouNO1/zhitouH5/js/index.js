(function ($) {
    /*$.fn.overTexts = function (options) {
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

    }*/
})(jQuery);

$(function () {
  /*  var str = $(".xo").html();
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
    })*/
    //canvas
    function toDecimal(x) {
        var f = parseFloat(x);
        if (isNaN(f)) {
            return;
        }
        f = Math.round(x*100)/100;
        return f;
    }
    var app = echarts.init(document.getElementById('main'));

    app.title = '交易动态';
    var data = [
        {value: 15, name: '东斯蒂芬'},
        {value: 10, name: '快来接撒'},
        {value: 34, name: '牛股牛股你好'},
        {value: 34, name: '加快速度'},
        {value: 34, name: '视频呢'},
        {value: 48, name: '搜索擎你'},
        {value: 48, name: '呵呵呵'},
        {value: 10, name: '你好'}
    ];
    var arrName = [];
    var sum = 0;
    var newObj={};
    for (var i=0;i<data.length;i++){
            sum = sum+data[i].value;
            arrName.push(data[i].name);
            newObj[data[i].name]=data[i].value;
        }

    option = {
       // tooltip: {
           // trigger: 'item',
           // formatter: "{b}: {c} ({d}%)",
            //label:{
             //   show:false
            //}
      //  },
        legend: {
            name: ' ',
            selectedMode: true,
            itemWidth:10,
            itemHeight:10,
            icon: 'circle',
            orient: 'horizontal',
            x: 'center',
            y:'67%',
            bottom:'10%',
            width:'90%',
            data: arrName,
            formatter: function (name) {
                var str = "";
                var length = name.length;
                if(length>6){
                    str = name;
                }else if (name.length>5){
                    str = name+" ";
                }else if (name.length>4){
                    str = name+"      ";
                }else if (name.length>3){
                    str = name+"        ";
                }else if (name.length>2){
                    str = name+"            ";
                }else {
                    str = name+"               ";
                }
                var num = toDecimal(newObj[name]/sum*100);
                var n = num.toString().split(".")[1].length;//小数点位数
                if(num<10||n==1){
                    num ="  " + num + "% "
                }else{
                    num = num + "% "
                }
                return str + num;
            }
        },
        series: [
            {
                type: 'pie',
                radius: ['30%', '60%'],
                center:['50%','35%'],
                avoidLabelOverlap: false,
                startAngle:[150],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: ['{x|{b}} ', '{y|数量：{c}}' , '{z|{d}%}'].join('\n'),
                            rich: {
                                x: {
                                    color:"#666",
                                    fontWeight: 'bold',
                                    fontSize:18,
                                    lineHeight: 25,
                                    height: 20,
                                },
                                y: {
                                    color:"#666",
                                    fontSize:14,
                                    lineHeight: 20,
                                    height: 30
                                },
                                z: {
                                    color:"#666",
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    fontFamily: 'Microsoft YaHei',
                                    lineHeight: 25,
                                    height: 20,
                                }
                            }
                        },
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center',

                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold',
                            color:'#666',
                            lineHeight:1.5
                        },

                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data
            }
        ],
        color: ['#ffa59f','#b8e8d0','#bed5ff','#7dabff','#ac98fd','#f8dd98','#f8dd98','rgb(204,157,161)','rgb(131,175,155)','rgb(131,175,155)']
    }
    //option.legend.selected[arrName[0]] = true;
    app.setOption(option);
    app.dispatchAction({
        type: 'highlight',
      //  type: 'showTip',
        dataIndex: 0
    });
    app.dispatchAction({
       type: 'showTip',
       dataIndex: 0
    })
    app.on('click', function (params) {
        console.log(params)
        if(params.dataIndex != 0){
            app.dispatchAction({
                type: 'downplay',
              // type: 'hideTip',
                dataIndex: 0,
            })
        }
    });


})
