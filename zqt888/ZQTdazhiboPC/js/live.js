$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable :true,
        autoplay: 4000,
    })
    var newSwiper = new Swiper ('.nav-container', {
        loop: true,
        pagination: '.nav-pagination',
        paginationClickable :true,
        autoplay: 4000,
        initialSlide:1
    })

    $('.nav-container').hover(function(){
        newSwiper.stopAutoplay();
    },function(){
        newSwiper.startAutoplay();
    })
    $('.classback').hover(function(){
        mySwiper.stopAutoplay();
    },function(){
        mySwiper.startAutoplay();
    })
    var newsSwiper = new Swiper ('.roll-news', {
        loop: true,
        autoplay: 5000,
        direction : 'vertical',
    })
    var hintSwiper = new Swiper ('.hint', {
        loop: true,
        autoplay: 5000,
        direction : 'vertical',
    })
    drawProcess()
    function drawProcess() {

        $('canvas.process').each(function() {
            var text = $(this).text();
            var process = text.substring(0, text.length-1);
            $(this).next('.arrow').css('transform','rotate('+(125+360* process / 100)+'deg)')
            var canvas = this;
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, 120, 120);
            context.beginPath();
            context.moveTo(60, 60);
            context.arc(60, 60, 60, 0, Math.PI * 2, false);
            context.closePath();
            context.fillStyle = '#ddd';
            context.fill();
            context.beginPath();
            context.moveTo(60, 60);
            context.arc(60, 60, 60, 0, Math.PI * 2 * process / 100, false);
            context.closePath();
            context.fillStyle = '#c92933';
            context.fill();
            context.beginPath();
            context.moveTo(60,60);
            context.arc(60, 60, 52, 0, Math.PI * 2, true);
            context.closePath();
            context.fillStyle = 'rgba(255,255,255,1)';
            context.fill();
            var txt = process.substring(0,5);
            context.font = "bold 22pt Arial";
            context.fillStyle = '#c92933';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.moveTo(60, 65);
            context.fillText(txt, 52, 57);
            var bbb=canvas.getContext('2d');
            bbb.font = "bold 12pt Arial";
            bbb.fillStyle = '#c92933';
            bbb.textAlign = 'center';
            bbb.textBaseline = 'middle';
            bbb.moveTo(80, 65);
            bbb.fillText('％',96,65);
            var aaa=canvas.getContext('2d');
            aaa.font = "bold 10pt Arial";
            aaa.fillStyle = '#c92933';
            aaa.textAlign = 'center';
            aaa.textBaseline = 'middle';
            aaa.moveTo(90, 65);
            aaa.fillText('收益率',60,80);
        })}

    $(".h_by_d").mouseenter(function(){
        $(".h_by_db").slideDown()
    })
    $(".h_by_d").mouseleave(function(){
        $(".h_by_db").slideUp()
    })

    //初始化滚动条
    $("#scrollbar1").mCustomScrollbar({
            theme:"dark",
            mouseWheelPixels:50,

        });
    $("#scrollbar2").mCustomScrollbar({
        theme:"dark",
        mouseWheelPixels:50,

    });

    $("#scrollbar5").mCustomScrollbar({
        theme:"dark",
        mouseWheelPixels:80,
    });


    //左侧栏
    $('#class').click(function(){
        $('.class-model').fadeIn();
        //scrollZB();
        var scroll = $('#scrollbar5 .current').position().top-88+'px';
        $("#scrollbar5").mCustomScrollbar('scrollTo',scroll,{
            scrollInertia:400
        });
    })
    $('.btn_close').click(function(){
        $(this).parents('.model').fadeOut();
    })
    //判断是否有提示框
    if($('.hint').length==0){
        $('.contentbox').css('top','40px');
    }


    //是否是管理员 普通用户不显示主持区input
    var flag = false;//是管理员
    //主持和互动
    $('.host-nav').click(function(){
        $(this).addClass('current');
        $('.interact-nav').removeClass('current');
        $('.interact-nav').removeClass('current');
        $('.interact').hide();
        $('.host').show();
        $('.answerme-box').hide();
        $('#upImg').html('传图片<input id="uploadImg" type="file" name="imgFile">').attr('class','btn-icon iconfont icon_image');
        if(flag){
            $('.m-input-fuc').show();
        }else{
            $('.m-input-fuc').hide();
            $('.contentbox').css('bottom','10px');
        }
    })
    $('.interact-nav').click(function(){
        $(this).addClass('current');
        $('.host-nav').removeClass('current');
        $('.interact').show();
        $('.host').hide();
        $('.answerme-box').show();
        $('#upImg').html('免费注册会员').attr('class','register');
        if(!flag){
            $('.m-input-fuc').show();
            $('.contentbox').css('bottom','119px');
        }
    })

    $('.close-btn').click(function(){
        $(this).parents('.answerme-box').fadeOut();
    })
    //二维码和分享
    $('.phone').hover(function(){
        $('.phone-layer').show();
    },function(){
        $('.phone-layer').hide();
    })
    $('.icon_share').hover(function(){
        $('.share-layer').show();
    }, function(){
        $('.share-layer').fadeOut(800);
    })
    $('.share-layer').hover(function(){
        $('.share-layer').stop().fadeIn(100);
    }, function(){
        $('.share-layer').fadeOut(200);
    })
    //视频音频切换
    $('.audio').click(function(){
        var _this = $(this).children('.iconfont');
        if(_this.html()=="音频"){
            _this.attr('class','iconfont icon_movie').html("视频")
        }else(
            _this.attr('class','iconfont icon_voice').html("音频")
        )
    })
    //输入区
    $('.icon_smile').hover(function(){
        $('.m-emojs-select').stop().fadeIn(100);
        $(this).addClass('current');
    }, function(){
        $('.m-emojs-select').fadeOut(800);
        $('.icon_smile').removeClass('current');
    })
    $('.m-emojs-select').hover(function(){
        $('.m-emojs-select').stop().fadeIn(100);
    }, function(){
        $('.m-emojs-select').fadeOut(200);
    })
    //$('.emoj-mask').mouseleave(function(){
    //    $('.emoj-mask').hide();
    //    $('.icon_smile').removeClass('current');
    //})

//输入框事件
    if($("#questionDv").html()=='请登录，参与互动'){
        $("#questionDv").addClass('center');
    }
    $("#questionDv").focus(function(){
        var _this = $("#questionDv");
        if(_this.html()=="请登录，参与互动"){
            console.log("登录")
            $("#questionDv").removeClass('center');//登录之后 还原一下输入框样式
            _this.html("请输入您的问题");
        }else if(_this.html()=="请输入您的问题"||_this.html()=="自己不能回复自己"){
            _this.html("");
        }
    });

    $("#questionDv").blur(function(){
        var _this = $("#questionDv");
        if(_this.html()==""){
            _this.html("请输入您的问题");
        }
    });
    $("#btnSubmit").click(function(){
        //提交ajax
        $("#questionDv").html("请输入您的问题");
    });

    //发言区
    $("#questionDv").keyup(function(e){
        console.log(e.keyCode);
        var $length = $(this).text().length;
        var text = $length+"/200";
        if($length>200&& e.keyCode!='8'){
            $(this).attr("contenteditable","false");
        }
        $(".scaler").html(text);
    })
    $("#questionDv").click(function(){
        $(this).attr("contenteditable","true");
    })
    $('.m-emojs-select').on('click','li',function(){
        var title = $(this).children('img').attr('title');
        var question = $("#questionDv").html();
        var newQuestion;
        if(question=="请登录，参与互动"){
            console.log("登录");
            $("#questionDv").removeClass('center');//登录之后 还原一下输入框样式
        }else if(question=="请输入您的问题"){
            newQuestion ='<img src="http://www.91bee.com/images/qqbq' + title + '.gif">'
        }else{
            newQuestion = question + '<img src="http://www.91bee.com/images/qqbq' + title + '.gif">';
        }
        $("#questionDv").html(newQuestion);
    })
    //回复按钮
    $('.contentbox').on('click','.answer',function(){
        var question = $("#questionDv").html();
        var newQuestion;
        if(question=="请登录，参与互动"){
            console.log("登录");
            $("#questionDv").removeClass('center');//登录之后 还原一下输入框样式
            $("#questionDv").html('请输入您的问题');
        }else{
            var  text = $(this).parents('.title').children('.name').html();
            var width = text.length*13+30;
            newQuestion ='<input value="@'+text +'：" style="color:#548BEE;background-color:transparent;width:'+width+'px;" readOnly="true"/>';
           // newQuestion = "<button  contenteditable='false' onclick='return false;' style='color: #548BEE;padding-right: 5px;background-color:transparent;'>@" +  $(this).parents('.title').children('.name').html() + "</button>"+"<span  contenteditable='true'>  </span>";
            $("#questionDv").html(newQuestion);

        }

    })



    //网站收藏
    $(".collect").on('click',function(){
        var url = "http://www.91bee.com/live.shtml";
        var title = "股市大直播";
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("360se") > -1) {
            layer.msg('由于360浏览器功能限制，请按 Ctrl+D 手动收藏!', {
                icon: 0,
                time: 2000
            })
        }
        else if (ua.indexOf("msie 8") > -1) {
            window.external.AddToFavoritesBar(url, title); //IE8
        }
        else if (document.all) {//IE类浏览器
            try{
                window.external.addFavorite(url, title);
            }catch(e){
                layer.msg('您的浏览器不支持,请按 Ctrl+D 手动收藏!', {
                    icon: 0,
                    time:2000
                })
            }
        }
        else if (window.sidebar) {//firfox等浏览器；
            window.sidebar.addPanel(title, url, "");
        }
        else {
            layer.msg('您的浏览器不支持,请按 Ctrl+D 手动收藏!', {
                icon: 0,
                time: 2000
            })
        }
    });




$('.savedesktop').click(function(){
    location.href='http://www.91bee.com/common/saveDesktop.shtml';
})


//选择图片
function chooseImage() {
    $("#uploadImg").click();
}

$("#uploadImg").change(function(){
    var imageUrl = $("#uploadImg").val();
    if (imageUrl != null && imageUrl.trim() != "") {
        var extname = imageUrl.substring(imageUrl.lastIndexOf(".") + 1,imageUrl.length);
        extname = extname.toLowerCase();//处理了大小写
        if (extname != "jpeg" && extname != "jpg" && extname != "gif" && extname != "png") {
            $("#imgTypeError").show();
            setTimeout("hideTypeErrorDiv()",2000);
            $("#uploadImg").val("");
            return false;
        }
        var file = document.getElementById("uploadImg").files;
        var size = file[0].size;
        if (size > 2097152) {
            $("#imgSizeError").show();
            setTimeout("hideSizeErrorDiv()",2000);
            $("#uploadImg").val("");
            return false;
        }
    }
});



//登录弹层
    $(".sign").click(function(){
        $(".login-model").fadeIn();
    })
        $(".wex_gb").mouseenter(function(){
            $(".log_film").fadeIn()
        })
        $(".wex_gb").mouseleave(function(){
            $(".log_film").fadeOut()
        })
//关闭登录弹窗
        $(".er_gb").click(function(){
            $(this).parents(".login-model").fadeOut()
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



