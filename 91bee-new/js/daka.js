$(function(){
    /*tab栏*/
    $(".tab ul li").on("click",function(){
        var tleng=$(".tab ul li").index($(this))
        $(".tab ul li").removeClass("on")
        $(this).addClass("on");
    });
    $(".jzy").on("click",function(){
        $(".section ").hide();
        $(".zhuye").show();
    });
    $(".jkc").on("click",function(){
        $(".section ").hide();
        $(".kecheng").show();
    });
    $(".jgy").on("click",function(){
        $(".section ").hide();
        $(".guanyu").show();
    });
    /*右边栏-文字展开收起*/
    fnum()
    function fnum(){
        var ft=$(".in_tt").text();
        var fleng=ft.length;
        var fj=ft.substr(0,98);
        var fw=ft.substr(0,fleng)
        $(".in_tt").text(fj)
      $(".addnum").click(function(){
          var flenga=$(".in_tt").text().length;
          if(flenga<100){
              $(".in_tt").text(fw);
              $(".in_st1 i").hide();
              $(".addnum").text("[收起]")
          }else{
              $(".in_tt").text(fj);
              $(".in_st1 i").show();
              $(".addnum").text("[更多]")
          }
      })
    }

    /*点赞*/
    $(".zhan").on("click",function(){
        console.log("123");
        var _this=$(this);
        if(_this.attr("class")=="zb_a zhan"){
            _this.addClass("zhanm");
            _this.find("i").addClass("nums");
            var zleng=parseInt(_this.find(".numz").text())
            _this.find(".numz").text(zleng+1)
        }else{
            console.log("已经点赞了哦！");
        }
    });

    /*主页-加载新闻*/
    $(".nload").on("click",function(){
        var nli=$(".news_li").first().clone(true);     //假数据
        $(".s_news").append(nli)
    });

    /*课程-切换*/
    $(".kc_px a").on("click",function(){
        $(".kc_px a").removeClass("k_on")
        $(this).addClass("k_on")
});

    $(".kec_hr input").on("input",function () {
        var value = $(this).val();
        if(value){
            $(".kec_hr .icon_search").css("color","#FF9900")
        }else {
            $(".kec_hr .icon_search").css("color","rgba(60,60,62,0.38)")
        }
    })
    $(".kec_hr input").focus(function () {
        $(".kec_hr").css("borderColor","#FF9900");
    }).blur(function () {
        var value = $(this).val();
        setTimeout(function () {
            if (!value){
                $(".kec_hr").css("borderColor","rgba(60,60,62,0.38)");
            }
        },100)
    })
});