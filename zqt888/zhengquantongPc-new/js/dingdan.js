// JavaScript Document
$(document).ready(function(){
//订单页
/*点击输入框取消错误提示*/
  $("input").focus(function(){
      $(this).parent().children(".err").html("")
  })

/*获取验证码*/
    $(".pbon").click(function(){
        var phone=$("#phone").val() //手机号
        var regr = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
        if(phone==""){
            $(".err1").html("手机号不能为空")
        }else if(!regr.test(phone)){
            $(".err1").html("手机号格式有误")
        }else{
            settime()  //倒计时函数
        }
    })
    var countdown=120;  //设置秒s
    function settime(){
        if (countdown == 0) {
            $(".pbon").removeAttr("disabled")
            $(".pbon").css("background","#548BEE")
            $(".pbon").html("获取验证码")
            countdown = 120;
            return;
        } else {
            $(".pbon").attr("disabled","disabled");
            $(".pbon").css("background","#b2b4b7")
            $(".pbon").html("重新发送(" + countdown + ")")
            countdown--;
        }
        setTimeout(function() {
                settime() }
            ,1000)
    }
//支付方式
$(".moth_ipy ul li").click(function(){
    $(".moth_ipy ul li").removeClass("m_on")
    $(this).addClass("m_on")
})
//订单-删除
$(".m_t_5 a").click(function(){
    $(this).parents("tr").remove()
})
//下一步
    $(".buti").click(function(){
        var phone=$("#phone").val() //手机号
        var regr = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
        var vinm=$("#varif").val() //验证码
        if(phone==""){
            $(".err1").html("手机号不能为空")
        }else if(!regr.test(phone)){
            $(".err1").html("手机号格式有误")
        }else if(vinm==""){
            $(".err2").html("验证码不能为空")
        }
    })

//个人中心-我的订单
    $(".other_top ul li").click(function(){
        $(".other_top ul li").removeClass("o_on")
        $(this).addClass("o_on")
    })
    $(".other_t6 a").click(function(){
       $(this).parents("tr").remove()
    })


})

