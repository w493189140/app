/**
 * Created by w on 2017/7/24.
 */
$(function(){
    //���ض���
    $(window).scroll(function() {
        var tops = $(document).scrollTop();
        if (tops<=200){
            $(".ftop").fadeOut()
        }else{
            $(".ftop").fadeIn()
        }
    })
    /*�޸�����*/
    $(".ftop").click(function(){
        $('body,html').animate({ scrollTop: 0 }, 500);
    })
//    �ֲ�ͼ
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,

        // �����Ҫ��ҳ��
        pagination: '.swiper-pagination',

        // �����Ҫǰ�����˰�ť
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
            rotate: 0,// ��ת�ĽǶ�
            stretch: 100,// ����   ͼƬ�����ҵļ����ܼ���
            depth: 150,// ���   �л�ͼƬ�����µļ����ܼ���
            modifier: 3,// ����ֵ ��ֵԽ��ǰ���Ч��Խ����
            slideShadows : false// ҳ����ӰЧ��
        }
    });
})

