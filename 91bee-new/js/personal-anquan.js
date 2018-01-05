
$(function () {
    $('.content-dv').css('min-height',$('.content-box').height()-100+'px');
    $('.tab-nav').on('click','li',function () {
        $('.tab-nav li').removeClass('current');
        $(this).addClass('current');
        var str = $(this).attr('data-name');
        $('.content-dv .content>div').hide();
        $('.'+str).show();
    })
    $('.sex-item').click(function () {
        $('.sex-item').removeClass('on');
        $(this).addClass('on');
    })
//更换基本信息
    $('#userName').blur(function () {
        var userName = trim($(this).val());
        if(userName ==''){
            $('#userNameTip').css('color','red').text('名字不能为空');
        }else if(!isName(userName)){
            $('#userNameTip').css('color','red').text('名字不合法，请重新输入');
        }
    })
    $('#userName').focus(function () {
        $('#userNameTip').css('color','#B8C1CB').text('建议使用您的真实姓名');
    })
    $('#userDate').focus(function () {
        $('#userDateTip').css('color','#B8C1CB').text('请按正确格式输入，如：1980-01-01');
    })
    $('#informationBtn').click(function () {
        var userName = trim($("#userName").val());
        var userDate = $("#userDate").val();
        var data={};
        if(userName==""||!isName(userName)){
            if(userName==""){
                $('#userNameTip').css('color','red').text('名字不能为空，请输入');
            }else {
                $('#userNameTip').css('color','red').text('名字不合法，请重新输入');
            }
        }else if(userDate==""){
            $('#userDateTip').css('color','red').text('生日不能为空，请输入');
        }else {
            data.userName = userName;
            data.userDate = userDate;
            data.sex = $('.sex-item.on').attr('data-sex');
            console.log(data);
            layer.msg('提交成功');
            //ajax
        }
    })

//更换手机号区域
    $('#changeTel').click(function () {
        $(this).fadeOut();
        $('.tel-num').attr('disabled',false);
        $('#telBtn').attr('disabled',false);
        $('.tel-num').val("");
    })
    $('.tel-num').keyup(function () {
        var telNum = $(this).val();
        $('#telTip').text('请输入您要绑定的手机号码').css('color','#B8C1CB');
        if(telNum.length==11){
            if(isPhone(telNum)){
                $('#telSend').attr('disabled',false);
                $(this).blur();
            }else {
                $('#telTip').text('您输入的手机号无效，请输入一个正确的手机号').css('color','red');
            }
        }
    })
    $('#telSend').click(function () {
        var telNum = $('.tel-num').val();
        if(!isPhone(telNum)){
            $('#telTip').text('您输入的手机号无效，请输入一个正确的手机号').css('color','red');
            return;
        }
        $('.tel-code').attr('disabled',false);
        var countdown=60;
        var obj = $(this);
        settime(obj)
        function settime(obj) { //发送验证码倒计时
            if (countdown == 0) {
                obj.attr('disabled',false);
                obj.html("获取验证码");
                countdown = 60;
                return;
            } else {
                obj.attr('disabled',true);
                obj.html("重新发送(" + countdown + ")");
                countdown--;
            }
            setTimeout(function() {
                    settime(obj) }
                ,1000)
        }
    })
    $('.tel-code').focus(function () {
        $('#telCodeTip').text('点击获取验证码，验证码会发送到您的手机').css('color','#B8C1CB');
    })
    $('#telBtn').click(function () {
        var telCode = trim($('.tel-code').val());
        var telNum = $('.tel-num').val();
        var data = {};
        if (telCode==""){
            $('#telCodeTip').text('请输入验证码').css('color','red');
        }else {
            data.telNum = telNum;
            data.telCode = telCode;
            console.log(data);
            layer.msg('提交成功');
            //ajax
        }
    })
//更换邮箱
    $('#changeEmail').click(function () {
        $(this).fadeOut();
        $('.email-text').attr('disabled',false);
        $('#emailBtn').attr('disabled',false);
        $('.email-text').val("");
    })
    $('.email-text').click(function () {
        $('#emailTip').text('请输入一个有效邮箱，绑定后可用于帐号登录').css('color','#B8C1CB');
    })
    $('#emailBtn').click(function () {
        var emailText = trim($('.email-text').val());
        var data = {};
        if (emailText==""){
            $('#emailTip').text('请输入您的邮箱').css('color','red');
        }else if(!isemail(emailText)){
            $('#emailTip').text('您输入的邮箱有误，请重新输入').css('color','red');
        }else{
            data.emailText = emailText;
            console.log(data);
            layer.msg('提交成功');
            //ajax
        }
    })
//修改密码
    $('#oldCode .input-txt').focus(function () {
        $('#oldCode .des').text('请输入你当前正在使用的密码').css('color','#B8C1CB');
        $('#oldCode .iconfont').hide()
    })
    $('#oldCode .input-txt').blur(function () {
        var oldCode = $(this).val();
        if (oldCode===''){
            $('#oldCode .des').text('旧密码不能为空').css('color','red');
            $('#oldCode .iconfont').show().addClass('icon_cancel_hover').removeClass('icon_continue_hover');
        }else{
            //ajax 请求旧密码 code
            var aa = layer.load(1, {
                shade: [0.1,'#f90'] //0.1透明度的白色背景
            });
            //settimeout 模拟ajax
           setTimeout(function () {
               var code = "123456";
               var flag = oldCode==code;
               if(flag){
                   $('#oldCode .iconfont').show().removeClass('icon_cancel_hover').addClass('icon_continue_hover');
                   $('#oldCode .des').text('请输入你当前正在使用的密码').css('color','#B8C1CB');
               }else{
                   $('#oldCode .iconfont').show().addClass('icon_cancel_hover').removeClass('icon_continue_hover');
                   $('#oldCode .des').text('旧密码错误，请重新输入').css('color','red');

               }
               layer.close(aa);
           },1000);
        }
    })
    //新密码
    $('#newCode1 .input-txt').focus(function () {
        $('#newCode1 .des').text('请输入您的新密码，密码必须是6-19位数').css('color','#B8C1CB');
        $('#newCode1 .iconfont').hide()
    })
    $('#newCode1 .input-txt').blur(function () {
        var newCode1 = $(this).val();
        if (newCode1===''){
            $('#newCode1 .des').text('新密码不能为空').css('color','red');
            $('#newCode1 .iconfont').show().addClass('icon_cancel_hover').removeClass('icon_continue_hover');
        }else{
            var flag = newCode1.length>5&&newCode1.length<19
            if(flag){
                $('#newCode1 .iconfont').show().removeClass('icon_cancel_hover').addClass('icon_continue_hover');
                $('#newCode1 .des').text('请输入您的新密码，密码必须是6-19位数').css('color','#B8C1CB');
            }else{
                $('#newCode1 .iconfont').show().addClass('icon_cancel_hover').removeClass('icon_continue_hover');
                $('#newCode1 .des').text('新密码必须是6-19位数，请重新输入').css('color','red');

            }
        }
    })
    //第二遍新密码
    $('#newCode2 .input-txt').focus(function () {
        $('#newCode2 .des').text('请重复您的新密码，必须与您上一次一样').css('color','#B8C1CB');
        $('#newCode2 .iconfont').hide()
    })
    $('#newCode2 .input-txt').blur(function () {
        var newCode2 = $(this).val();
        if (newCode2===''){
            $('#newCode2 .des').text('重复密码不能为空').css('color','red');
            $('#newCode2 .iconfont').show().addClass('icon_cancel_hover').removeClass('icon_continue_hover');
        }else{
            var flag = $(this).val()==$('#newCode1 .input-txt').val();
            if(flag){
                $('#newCode2 .iconfont').show().removeClass('icon_cancel_hover').addClass('icon_continue_hover');
            }else{
                $('#newCode2 .iconfont').show().addClass('icon_cancel_hover').removeClass('icon_continue_hover');
                $('#newCode2 .des').text('两次密码不一致，请重新输入').css('color','red');

            }
        }
    })
    $('#newCode2 .input-txt').keyup(function () {
       var flag = $(this).val()==$('#newCode1 .input-txt').val();
       if(flag){
           $('#newCode2 .iconfont').show().removeClass('icon_cancel_hover').addClass('icon_continue_hover');
       }else {
           $('#newCode2 .iconfont').show().addClass('icon_cancel_hover').removeClass('icon_continue_hover')
       }
    })
    $('#codeBtn').click(function () {
       var lenght =  $('.password .icon_cancel_hover').length;
       var data = {};
       if(lenght==0){
           if($('#oldCode .input-txt').val()==""){
               $('#oldCode .des').text('旧密码不能为空').css('color','red');
           }else {
              data.oldCode = $('#oldCode .input-txt').val();
              data.newCode = $('#newCode2 .input-txt').val();
              console.log(data);
               layer.msg('提交成功');
              //ajax
           }
       }
    })
})
//头像上传
window.onload=function(){
    xiuxiu.embedSWF("altContent",5,"700px","500px");
    //修改为您自己的图片上传接口
    xiuxiu.setUploadURL("http://web.upload.meitu.com/image_upload.php");//默认接口
    xiuxiu.setUploadType(2);
    xiuxiu.setUploadDataFieldName("upload_file");
    xiuxiu.onInit = function () {
        xiuxiu.loadPhoto("http://www.91bee.com//image/common/headerImg/default.png");//默认图片
    }
    xiuxiu.onUploadResponse = function (data) {
        console.log("上传结果" + data);  //回调
    }
}

//日期选择初始化
laydate.render({
    elem: '#userDate',
    max: 0
});
//是否是email
function isemail(str) {
    var result=str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    if(result==null) return false;
    return true;
}
// 去除字符串的首尾的空格
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
// 判断输入是否是一个由 字母数字下划线
function isPassword(str) {
    var result=str.match(/^\w+$/);
    if(result==null) return false;
    return true;
}
//名字是否合法
function isName(str) {
    var result=str.match(/[@#\$%\^&\*\.]+/);
    if(result==null) return true;
    return false;
}
//手机号匹配
function isPhone(str){
    var result=str.match(/^1(3|4|5|7|8)\d{9}$/);
    if(result==null) return false;
    return true;
}

