// JavaScript Document
$(document).ready(function(){
//联系客服
    $(".main_c_r_w i").mouseenter(function(){
        $(".mc_r_fila").fadeIn()
    })
    $(".main_c_r_w i").mouseleave(function(){
        $(".mc_r_fila").fadeOut()
    })
    //点击输入框隐藏错误提示
    $("input").focus(function(){
        $(".by_err").removeClass("by_erz")
    })
//找回密码
    $("#bute").click(function() {
        var usernm = $("#phone").val()   //手机号
        var codea = $("#code").val()   //图形验证码
        var codeb = $("#codeh").val()  //手机号验证码
        var reg = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
        if (usernm == "") {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("手机号码不能为空")
        } else if (!reg.test(usernm)) {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("请输入正确的手机号码")
        }else if (codea == "") {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("验证码不能为空")
        }else if (codeb == "") {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("手机验证码不能为空")
        }else{
            console.log("表单提交成功")
        }
    })
//注册-获取验证码
    $("#butd").click(function(){
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

    //找回密码-重置密码
    $("#butf").click(function() {
        var passa = $("#passb").val()
        var passb = $("#passc").val()
        var regb=/^[a-z0-9_-]{6,16}$/  //密码正则
        if (passa == "") {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("新密码不能为空")
        } else if (passa.length < 6) {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("请输入正确的新密码")
        }else if (!regb.test(passa)) {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("密码格式有误")
        }else if (passb == "") {
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("确认密码不能为空")
        } else if(passb !=passa){
            $(".by_err").addClass("by_erz")
            $(".er_txt").html("确认密码不一致")
        }else{
            console.log("表单提交成功")
        }
    })
//点击显示密码
    $(".inshow").click(function(){
      var tpast=$(this).prev()
        var t_this=$(this)
        if(tpast.attr("type")=="password"){
            tpast.attr("type","text")
            t_this.html("&#xe6f9;")
        }else{
            tpast.attr("type","password")
            t_this.html("&#xe6fa;")
        }
    })
})

