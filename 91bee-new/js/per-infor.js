$(function(){
    $(".infor_l li").click(function(){
        $(".infor_l li").removeClass("fl_on")
        $(this).addClass("fl_on")
    })
    $(".op_l li").click(function(){
        $(".op_l li").removeClass("op_on")
        $(this).addClass("op_on")
    })

    /*删除当前消息*/
    $(".inf-pr").click(function(){
        var _this=$(this);
        $(".bj-move").fadeIn();
        $(".cofm").click(function(){
            _this.parents("li").remove();
            $(".bj-move").fadeOut()
        })
    })
    $(".cofr").click(function(){
       $(".bj-move").fadeOut()
    })
    /*文章弹层*/
    $(".sbox").click(function(){
        $(".bj-article").fadeIn();
    })
    $(".a-err").click(function(){
        $(".bj-article").fadeOut()
    })
    /*全选/反选/删除*/
    $("#iall").click(function(){
        if(this.checked){
            $(".section3 :checkbox").prop("checked", true);
            $(".in-check").addClass("chboxn")
        }else{
            $(".section3 :checkbox").prop("checked", false);
            $(".in-check").removeClass("chboxn")
        }
    })
    $(".in-remov").click(function(){
        $(".bj-move").fadeIn();
        $(".cofm").click(function(){
            $('.section3 input:checkbox:checked').parents("li").remove();
            $(".bj-move").fadeOut()
        })
    })

    /*勾选效果*/
    $(".in-check").click(function(){
        var c_this=$(this);
        if(c_this.find("input").is(':checked')){
            c_this.addClass("chboxn")
        }else{
            c_this.removeClass("chboxn")
        }

    })
})
