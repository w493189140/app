$(function(){
    /*单选金额*/
    $(".cz-label .cz-lpn").click(function(){
        $(".cz-label .cz-lpn").removeClass("cz-on")
        $(this).addClass("cz-on");
        $(".cz-lpl input").val("");
    })
    $("#ro1").click(function(){
        $("#num").text("100")
    })
    $("#ro2").click(function(){
        $("#num").text("500")
    })
    $("#ro3").click(function(){
        $("#num").text("1000")
    })
    $("#ro4").click(function(){
        $("#num").text("2000")
    })
    $("#ro5").click(function(){
        $("#num").text("5000")
    })
    /*自选金额*/
    $("#ro6").focus(function(){
        $("#num").text("00");
        $(".cz-label .cz-lpn").removeClass("cz-on")
        $(".cz-label .cz-lpn input").attr("checked",false);
    })
    $("#ro6").blur(function(){
        var numr=$.trim($(this).val());
        if(isNaN(numr)){
            $(".jine").text("请输入正确的金额！")
            $(".z-je").fadeIn().delay(1500).fadeOut();
            $(".cz-lpl input").val("");
        }else if(numr==""){
            $(".cz-lpl input").val("");
        }else{
            $("#num").text(numr)
        }
    })
    /*支付方式*/
    $(".play li").click(function(){
        $(".play li").removeClass("p_on")
        $(this).addClass("p_on");
    })

    /*下一步*/
    $("#but").click(function(){
        var pmun=$("#num").text();
        if(pmun<=0){
            $(".jine").text("选择充值额度！")
            $(".z-je").fadeIn().delay(1500).fadeOut();
        }else if($(".p-wx").attr("class")=="p-wx iconfont p_on"){  //判断是否微信支付
            $(".b-wx").fadeIn();
        }
    });

    $(".err").click(function(){
       $(this).parents(".bj").fadeOut();
    })

})