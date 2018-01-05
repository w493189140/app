$(function(){
    //是否是管理员 普通用户不显示主持区input
    var flag = false;//是管理员
    $("#scrollbar1").mCustomScrollbar();
    $("#scrollbar2").mCustomScrollbar();
    $("#scrollbar3").mCustomScrollbar({
        theme:"dark",
        mouseWheelPixels:50,

    });
    $("#scrollbar4").mCustomScrollbar({
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
    $('#descript').click(function(){
        $('.descript-model').fadeIn();
    })
    $('#teacher').click(function(){
        $('.teacher_model').fadeIn();
    })
    $('.btn_close').click(function(){
        $(this).parents('.model').fadeOut();
    })
    //主持和互动
    $('.host-nav').click(function(){
        $(this).addClass('current');
        $('.interact-nav').removeClass('current');
        $('.interact-nav').removeClass('current');
        $('.interact').hide();
        $('.host').show();
        $('.hint').show();
        $('.answerme-box').hide();
        $('.contentbox').css('top','75px');
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
        $('.hint').hide();
        $('.answerme-box').show();
        $('.contentbox').css('top','40px');
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
    $('.share').hover(function(){
        $('.share-mask').show();
    })
    $('.share-mask').mouseleave(function(){
        $('.share-mask').hide();
    })
    //输入区
    $('.icon_smile').hover(function(){
        $('.emoj-mask').show();
        $(this).addClass('current');
    })
    $('.emoj-mask').mouseleave(function(){
        $('.emoj-mask').hide();
        $('.icon_smile').removeClass('current');
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


    function po_Last_Div(obj) {
        if (window.getSelection) {//ie11 10 9 ff safari
            obj.focus(); //解决ff不获取焦点无法定位问题
            var range = window.getSelection();//创建range
            range.selectAllChildren(obj);//range 选择obj下所有子内容
            range.collapseToEnd();//光标移至最后
        }
        else if (document.selection) {//ie10 9 8 7 6 5
            var range = document.selection.createRange();//创建选择对象
            //var range = document.body.createTextRange();
            range.moveToElementText(obj);//range定位到obj
            range.collapse(false);//光标移至最后
            range.select();
        }
    }
})