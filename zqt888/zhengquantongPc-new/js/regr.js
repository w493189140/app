// JavaScript Document
$(document).ready(function(){
//联系客服
    $(".main_c_r_w i").mouseenter(function(){
        $(".mc_r_fila").fadeIn()
    })
    $(".main_c_r_w i").mouseleave(function(){
        $(".mc_r_fila").fadeOut()
    })
//登录
    $("#buta").click(function() {
        var usernm = $("#phone").val()
        var passnm = $("#passd").val()
        var reg = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
        var regb=/^[a-z0-9_-]{6,16}$/  //密码正则
        if (usernm == "") {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("用户名或者密码输入错误")
        } else if (!reg.test(usernm)) {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("用户名或者密码输入错误")
        } else if (passnm == "") {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("用户名或者密码输入错误")
        } else if (passnm.length < 6) {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("用户名或者密码输入错误")
        }else if (!regb.test(passnm)) {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("密码格式有误")
        }
    })

    //点击输入框隐藏错误提示
    $("input").focus(function(){
        $(".by_err").removeClass("by_erz")
    })
//注册
    $("#butc").click(function() {
        var usernm = $("#phone").val()   //手机号
        var passnm = $("#passd").val()  //密码
        var codea = $("#code").val()   //图形验证码
        var codeb = $("#codeh").val()  //手机号验证码
        var cbox = $("#chboxa")       //协议
        var reg = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
        var regb=/^[a-zA-Z][a-zA-Z0-9_]{5,20}$/  //密码正则
        if (usernm == "") {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("手机号码不能为空")
        } else if (!reg.test(usernm)) {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("请输入正确的手机号码")
        } else if (passnm == "") {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("密码不能为空")
        } else if (passnm.length < 6) {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("请输入正确的密码")
        }else if (!regb.test(passnm)) {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("密码格式有误")
        }else if (codea == "") {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("验证码不能为空")
        }else if (codeb == "") {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("手机验证码不能为空")
        }else if (!cbox.prop("checked")) {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("请同意协议")
        }
    })
//注册-获取验证码
    $("#butb").click(function(){
        var phone=$("#phone").val() //手机号
        var regr = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
        if(phone==""){
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("手机号码不能为空")
        }else if(!regr.test(phone)){
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("请输入正确的手机号码")
        }else{
            settime()  //倒计时函数
        }
    })
    var countdown=120;  //设置秒s
    function settime(){
        if (countdown == 0) {
            $(".by_code").removeAttr("disabled")
            $(".by_code").css("background","#4d8dcb")
            $(".by_code").html("获取验证码")
            countdown = 120;
            return;
        } else {
            $(".by_code").attr("disabled","disabled");
            $(".by_code").css("background","#b2b4b7")
            $(".by_code").html("重新发送(" + countdown + ")")
            countdown--;
        }
        setTimeout(function() {
                settime() }
            ,1000)
    }
})

