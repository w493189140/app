$(function(){
    //banner
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        pagination : '.swiper-pagination',
        loop : true,
        paginationClickable :true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
    })
    $(".swiper-container").hover(function () {
        mySwiper.stopAutoplay();
        $("#prev-btn,#next-btn").css("opacity","0.7");
    },function () {
        mySwiper.startAutoplay();
        $("#prev-btn,#next-btn").css("opacity","0.2");
    })
    $("#prev-btn,#next-btn").hover(function () {
        $(this).css("opacity","1");
    },function () {
        $(this).css("opacity","0.7");
    })

})
