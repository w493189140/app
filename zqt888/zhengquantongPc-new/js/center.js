// JavaScript Document
$(document).ready(function(){
//个人中心
/*修改密码*/
    $("#ret_butx").click(function(){
        var pass=$("#pass").val() //旧密码
        var passa=$("#ret_pass").val() //修改密码
        var passb=$("#ret_passd").val() //确认密码
        if(pass==""){
            $(".err1").html("旧密码不能为空")
        }else if(pass.length<6){
            $(".err1").html("旧密码格式有误")
        }else if(passa==""){
            $(".err2").html("新密码不能为空")
        }else if(passa.length<6){
            $(".err2").html("新密码格式有误")
        }else if(passb!=passa){
            $(".err3").html("确认密码不一致")
        }else{
            console.log("验证成功后提交数据")
        }
    })

/*点击输入框取消错误提示*/
    $("input").focus(function(){
        $(this).parent().children(".err").html("")
    })
})

