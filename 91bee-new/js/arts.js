$(function(){
    /*点赞*/
    $(".zhan").on("click",function(){
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
    $(".k_jj").on("click",function() {
        if($(".by_p").css("display")=="block"){
            $(".name2 ").addClass("anjj");
            $(".by_p").slideUp();
        }else{
            $(".name2 ").removeClass("anjj");
            $(".by_p").slideDown();
        }
    });

    /*评论加载*/
    $(".el_jz").on("click",function(){
        var nli=$(".el_li li").first().clone(true);     //假数据
        $(".el_li ul").append(nli)
    });

});