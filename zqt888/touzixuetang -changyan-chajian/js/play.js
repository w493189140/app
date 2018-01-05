$(function () {

    var data = [
        {'title':'特色财务指标运用 周期共振的基本原理','id':'f4c55003e0','imgUrl':'bee1466477573565.jpg','time':'11:42','name':'姜城芳'},
        {'title':'李萤的价值投资：价值投资者需要的态度','id':'5a3f8d6684','imgUrl':'bee1462500269801.jpg','time':'11:31','name':'李莹'},
        {'title':'生命k线：断头铡刀','id':'aa5c28b8db','imgUrl':'bee1453346896012.jpg','time':'14:16','name':'南松'},
        {'title':'龙虎榜秘籍：从龙虎榜中找投资机会','id':'8d9548549e','imgUrl':'bee1453348004269.jpg','time':'11:07','name':'张姚'},
        {'title':'李萤的价值投资：四维投资方法应用','id':'d6ceafe384','imgUrl':'bee1462500247966.jpg','time':'10:52','name':'李莹'},
        {'title':'N倍牛股寻找技巧','id':'8aee55a1cb','imgUrl':'bee1460699608261.jpg','time':'15:01','name':'袁建新'},
        {'title':'黄金波浪理论：跟我一起来数浪','id':'aea66de5b2','imgUrl':'bee1463984032365.jpg','time':'12:14','name':'余炜'},
        {'title':'三招选白马','id':'303803baa6','imgUrl':'bee1458199565988.jpg','time':'10:08','name':'徐世荣'},
        {'title':'龙虎榜秘籍：第一讲如何理清交易席位','id':'a2b29b77a4','imgUrl':'bee1458885307228.jpg','time':'36:50','name':'张姚'},
        {'title':'《黄金波浪战法》第一课投资股票是王道','id':'27ab1a3680','imgUrl':'bee1460360760877.jpg','time':'42:27','name':'余炜'},
        {'title':'告诉你机构做盘的秘密 第一课 市值管理中的投资机会','id':'0479fd508e','imgUrl':'bee1467376986381.jpg','time':'68:11','name':'沈阳'},
        {'title':'主题投资第一课——超额收益的法宝','id':'c0bbf4af07','imgUrl':'bee1467209269466.jpg','time':'60:28','name':'杨风'}
                ];
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return (r[2]); return null;
    }
    var index = GetQueryString("index")-1;
    var player = new CloudVodPlayer();
    player.init({
        "uu": "94xiy5kak8",
        "vu": data[index].id,
        "pu": "1a0bfb09b1",
        "auto_play": 0,
        "gpcflag": 1,
        //"skinnable":0,
        "width": "100%",
        "height": "100%",
        "lang": "zh_CN",
        "ark": "0",
        "playsinline": "0",
        "pic":'http://beems.91bee.com/image/'+data[index].imgUrl,
    },'video');

    //$('.video img').attr('src','http://beems.91bee.com/image/'+data[index].imgUrl);
    var html = ' <h2 class="title">'
        +data[index].title
        +'</h2><p><span class="name">'
        +data[index].name
        +'</span>'
        +'<span class="time">时长 '
        +data[index].time
        +'</span></p><div>'
        + '<div id="SOHUCS" sid="video'
        +index
        +'" ></div></div>'
        +  '<script id="changyan_mobile_js" charset="utf-8" type="text/javascript"'
        +'src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=cyt9KQ9uN&conf=prod_44990a12572bcb94e9af3cbb83b65906">'
        +'</script>';
    $('.info').html(html);


})


