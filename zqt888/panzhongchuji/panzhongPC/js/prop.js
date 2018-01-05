// JavaScript Document
$(document).ready(function(){
//活动-课程报名弹
    $(".pop_l_i a").click(function(){
        $(".pop_l_i a").removeClass("pop_l_on")
        $(this).addClass("pop_l_on")
    })

$(".oerr").click(function(){     //点击隐藏弹层
    $(this).parents(".propup").add(".pop_bj").fadeOut()
})

    $(".oerrb").click(function(){     //点击隐藏弹层
        $(this).parent().add(".pop_bj").fadeOut()
    })

    $(".act_t_cen_a a").click(function(){   //点击显示弹层
        $(".popb").add(".pop_bj").fadeIn()
    })
//实名认证
    $(".pop_inb_r p input").click(function(){   //性别切换
        $(".pop_inb_r p label").removeClass("por_on")
        $(this).next().addClass("por_on")
    })

    $("#buts").click(function(){    //实名提交验证
        var usernm = $("#phone").val()
        var namenm = $("#fname").val()
        var reg = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
        var pattern =  /^[\u4E00-\u9FA5]{1,6}$/; //姓名正则
      if (namenm == "") {
            $("#fname").css("border","1px solid #ff0000")
          $("#fname").val("请输入中文姓名")
        } else if (!pattern.test(namenm)) {
            $("#fname").css("border","1px solid #ff0000")
          $("#fname").val("请输入中文姓名")
        }
    })
    $("input").focus(function(){
        $(this).css("border","1px solid #DDDDDD")
        $(this).val("")
    })
})

