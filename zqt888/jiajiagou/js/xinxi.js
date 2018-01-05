
$(function(){
    //正则
    var regr = /^1[3|4|5|7|8][0-9]{9}$/;
    var regname = /^[\u4e00-\u9fa5]{2,8}$/;
    var name,phone;
    //姓名验证
    $("#name").click(function(){
        if(!regname.test($("#name").val())){
            $("#name").css({"border":"0","color":"#272727"}).val("");
        }
    })
    $("#name").blur(function(){
        name=$("#name").val() ;
        if(name==""||name=="姓名不能为空！"||name=="姓名格式不对！"){
            $("#name").css({"border":"2px solid red","color":"red"}).val("姓名不能为空！");
        }else if(!regname.test(name)){
            $("#name").css({"border":"2px solid red","color":"red"}).val("姓名格式不对！");
        }
    })
    //手机验证
    $("#tel").click(function(){
        if(!regr.test($("#tel").val())){
            $("#tel").css({"border":"0","color":"#272727"}).val("");
        }
    })
    $("#tel").blur(function(){
         phone=$("#tel").val() ;
        if(phone==""||phone=="手机号不能为空！"||phone=="手机号有误！"){
            $("#tel").css({"border":"2px solid red","color":"red"}).val("手机号不能为空！");
        }else if(!regr.test(phone)){
            $("#tel").css({"border":"2px solid red","color":"red"}).val("手机号有误！");
        }
    })
    $("input").keyup(function(){
         name=$("#name").val();
         phone=$("#tel").val();
        if(regname.test(name)&&regr.test(phone)){
            $("#countdown").removeClass('gray');
        }else{
            $("#countdown").addClass('gray');
        }
    })
    $("#countdown").click(function(){
        if(!$(this).hasClass('gray')){
            $(this).addClass('gray');
            settime();
        }
    })
    var countdown=20;  //设置秒s
    function settime(){
        if (countdown == 0) {
            $("#countdown").removeAttr("disabled");
            $("#countdown").html("获取验证码");
            countdown = 20;
            $("#countdown").removeClass('gray');
            return;
        } else {
            $("#countdown").attr("disabled","disabled");
            $("#countdown").html("重新发送(" + countdown + ")");
            countdown--;
        }
        setTimeout(function() {
            settime();
        },1000)
    }
    //默认选中
    $("#confirn").click(function(){
        if($(this).attr("index")=="true"){
            $(this).attr("index","false").css("color","rgba(53, 57, 66, 0.38)")
        }else{
            $(this).attr("index","true").css("color","#548BEE")
        }
    })
})
