$(function () {
    $(".personal-box").hover(function () {
        $('.dorpmenu').stop().slideDown(300);
    },function () {
        $('.dorpmenu').stop().slideUp(300);
    })
    $(".search input").on("input",function () {
        var value = $(this).val();
        if(value){
            $(".search .icon_search").css("color","#FF9900")
        }else {
            $(".search .icon_search").css("color","rgba(60,60,62,0.38)")
        }
    })
    $(".search input").focus(function () {
        $(".header .search").css("borderColor","#FF9900");
    }).blur(function () {
        var value = $(this).val();
        setTimeout(function () {
            if (!value){
                $(".header .search").css("borderColor","rgba(60,60,62,0.38)");
            }
        },100)
    })
})