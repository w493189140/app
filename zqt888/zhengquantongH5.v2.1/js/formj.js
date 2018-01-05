$(document).ready(function(){
//登录验证表单
$("#sign_but").click(function(){
var usernm=$("#username").val()
var passnm=$("#password").val()
var reg = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
//var regExp=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/; //密码正则
if(usernm==""){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("手机号为空")
}else if(!reg.test(usernm)){
$(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("手机号有误")
}else if(passnm==""){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("密码不能为空")
}else if(passnm.length<6){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("密码有误")
}
//else if(!regExp.test(passnm)){
//  $(".s_al").fadeIn()
//  $(".s_al_p").html("密码格式有误")
//}
})

//$(".s_al_but").click(function(){
//    $(this).parents(".s_al").fadeOut()
//})

//注册
//判断协议是否勾选
$("#reg_chbx").click(function(){
if ($("#reg_chbx").prop("checked")){
	$(".reg_chex i").addClass("reg_gou")
}else{
$(".reg_chex i").removeClass("reg_gou")
}
})
//注册验证
$("#regs_but").click(function(){
var phone=$("#reg_phone").val() //手机号
var passa=$("#reg_pass").val() //密码
var passb=$("#reg_passd").val() //确认密码
var yanz=$("#reg_yzm").val() //验证码
var regr = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
if(phone==""){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("手机号不能为空")
}else if(!regr.test(phone)){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("手机号格式有误")
}else if(passa==""){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("密码不能为空")
}else if(passa.length<6){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("密码格式有误")
}else if(passa!=passb){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("确认密码不一致")
}else if(yanz==""){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("验证码不能为空")
}else if(!$("#reg_chbx").prop("checked")){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("请同意会员注册协议")
}
})
//获取验证码
$("#reg_hz").click(function(){
	var phone=$("#reg_phone").val() //手机号
	var regr = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
   if(phone==""){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("手机号不能为空")
}else if(!regr.test(phone)){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("手机号格式有误")
}else{
 settime()  //倒计时函数
}
})
var countdown=120;  //设置秒s    
function settime(){ 
      if (countdown == 0) { 
        $(".yanzheng").removeAttr("disabled")
		$(".yanzheng").css("background","#548bee")
        $(".yanzheng").html("获取验证码")
        countdown = 120; 
        return;
    } else { 
         $(".yanzheng").attr("disabled","disabled"); 
		 $(".yanzheng").css("background","#b2b4b7")
         $(".yanzheng").html("重新发送(" + countdown + ")")
        countdown--; 
    } 
setTimeout(function() { 
    settime() }
    ,1000) 
   }

//找回密码
//获取验证码
$("#ret_yz").click(function(){
  var phone=$("#ret_phone").val() //手机号
  var regr = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
   if(phone==""){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("账号手机号不能为空")
}else if(!regr.test(phone)){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("账号手机号格式有误")
}else{
 settimey()  //倒计时函数
}
})
var countdowny=120;  //设置秒s    
function settimey(){ 
      if (countdowny == 0) { 
        $(".yanzheng").removeAttr("disabled")
		$(".yanzheng").css("background","#548bee")
        $(".yanzheng").html("获取验证码")
        countdowny = 120; 
        return;
    } else { 
         $(".yanzheng").attr("disabled","disabled"); 
		 $(".yanzheng").css("background","#b2b4b7")
         $(".yanzheng").html(countdowny + "s后获取密码")
        countdowny--; 
    } 
setTimeout(function() { 
    settimey() }
    ,1000) 
   }
//下一步
$("#ret_but").click(function(){
var phone=$("#ret_phone").val() //手机号
var yanz=$("#ret_yzm").val() //验证码
var regr = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
if(phone==""){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("手机号不能为空")
}else if(!regr.test(phone)){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("手机号格式有误")
}else if(yanz==""){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("验证码不能为空")
}
})

//找回密码-修改密码
$("#ret_butx").click(function(){
var passa=$("#ret_pass").val() //修改密码
var passb=$("#ret_passd").val() //确认密码
if(passa==""){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("修改密码不能为空")
}else if(passa.length<6){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("修改密码格式有误")
}else if(passb!=passa){
  $(".s_al").fadeIn().delay(1000).fadeOut()
  $(".s_al_p").html("确认密码不一致")
}else{
console.log("验证成功后提交数据") 
}
})
})