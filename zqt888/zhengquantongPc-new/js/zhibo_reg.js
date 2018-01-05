// JavaScript Document
$(document).ready(function(){
//微信
    $(".wex_gb").mouseenter(function(){
        $(".log_film").fadeIn()
    })
    $(".wex_gb").mouseleave(function(){
        $(".log_film").fadeOut()
    })
//关闭登录弹窗
    $(".er_gb").click(function(){
        $(this).parents(".alt_login").add(".sin_bj").fadeOut()
    })
//弹窗登录
    $("#buth").click(function() {
        var usernm = $("#phone").val()
        var passnm = $("#passc").val()
        var reg = /^1[3|4|5|7|8][0-9]{9}$/; //手机号正则
        //var regExp=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/; //密码正则
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
        }
    })

    //点击输入框隐藏错误提示
    $("input").focus(function(){
        $(".by_err").removeClass("by_erz")
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

