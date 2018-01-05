$(function(){
    //动态页面高度
    $('.pageone').height($(window).height());

    //初始化滚动条
    $("#scrollbar1").mCustomScrollbar({
            theme:"dark",
            mouseWheelPixels:50,

        });
    $("#scrollbar2").mCustomScrollbar({
        theme:"dark",
        mouseWheelPixels:50,

    });
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

    //分享
    $('.share').hover(function(){
        $('.share-layer').show();
    }, function(){
        $('.share-layer').fadeOut(800);
    })
    $('.share-layer').hover(function(){
        $('.share-layer').stop().fadeIn(100);
    }, function(){
        $('.share-layer').fadeOut(200);
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

})



