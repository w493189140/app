/**
 * Created by w on 2017/7/24.
 */
$(function(){
    //返回顶部
    $(window).scroll(function() {
        var tops = $(document).scrollTop();
        if (tops<=200){
            $(".ftop").fadeOut()
        }else{
            $(".ftop").fadeIn()
        }
    })
    /*修改新增*/
    $(".ftop").click(function(){
        $('body,html').animate({ scrollTop: 0 }, 500);
    })
//    轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable :true,
    })

    var newSwiper = new Swiper('.container', {
        loop : true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,// 旋转的角度
            stretch: 100,// 拉伸   图片间左右的间距和密集度
            depth: 150,// 深度   切换图片间上下的间距和密集度
            modifier: 3,// 修正值 该值越大前面的效果越明显
            slideShadows : false// 页面阴影效果
        }
    });
})

