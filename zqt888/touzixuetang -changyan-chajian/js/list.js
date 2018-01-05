$(function(){
    $(".nav ul li").click(function () {
        $(".nav ul li").removeClass("current")
        $(this).addClass("current")
    })
    //²âÊÔ
    $(".nav ul li:nth-child(1)").click(function(){
        $('.play_list').hide();
        $('.list1').show()
        myScroll.refresh();
    })
    $(".nav ul li:nth-child(2)").click(function(){
        $('.play_list').hide();
        $('.list2').show()
    })
    $(".nav ul li:nth-child(3)").click(function(){
        $('.play_list').hide();
        $('.list3').show()
    })


    //var height = $(window).height()-$('.nav').height();
    if(isWeiXin()){
        //height = height-$('header').height()
        $(".play_list ").css("top", "1.1rem");
    }

    var myScroll,
        upIcon = $("#up-icon"),
        downIcon = $("#down-icon");
    myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true });
    //myScroll.on("scroll",function(){
    //    var y = this.y,
    //        maxY = this.maxScrollY - y,
    //        downHasClass = downIcon.hasClass("reverse_icon"),
    //        upHasClass = upIcon.hasClass("reverse_icon");
    //    if(y >= 40){
    //        !downHasClass && downIcon.addClass("reverse_icon");
    //        return "";
    //    }else if(y < 40 && y > 0){
    //        downHasClass && downIcon.removeClass("reverse_icon");
    //        return "";
    //    }
    //    if(maxY >= 40){
    //        !upHasClass && upIcon.addClass("reverse_icon");
    //        return "";
    //    }else if(maxY < 40 && maxY >=0){
    //        upHasClass && upIcon.removeClass("reverse_icon");
    //        return "";
    //    }
    //});
    var loading = "up";
    myScroll.on("scroll",function(){
        if(this.y > 40&&loadingStep==0){
            upIcon.addClass("reverse_icon");
            loadingStep=1
            loading = "up";
        }else if(this.maxScrollY - this.y > 40&&loadingStep==0){
            loadingStep = 1;
            downIcon.addClass("reverse_icon")
            console.log(11)
            loading = "down";
        }
    })
    myScroll.on("scrollEnd",function(){
        if(loadingStep == 1&&loading == "up"){
            ajax()
            loadingStep = 0;
        }else if(loadingStep == 1&&loading == "down"){
            loadingStep = 0;
            ajax()
        }
    });

})