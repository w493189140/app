$(function(){
    //banner
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        speed: 800,
        pagination: '.swiper-pagination',
        loop: true,
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
    })
    $(".swiper-container").hover(function () {
        mySwiper.stopAutoplay();
        $("#prev-btn,#next-btn").css("opacity", "0.9");
    }, function () {
        mySwiper.startAutoplay();
        $("#prev-btn,#next-btn").css("opacity", "0.4");
    })
    $("#prev-btn,#next-btn").hover(function () {
        $(this).css("opacity", "1");
    }, function () {
        $(this).css("opacity", "0.9");
    })

    //瀑布流
    var $container = $('#masonry');
    $container.imagesLoaded(function() {
        $container.masonry({
            itemSelector: '.box',
            gutterWidth: 20,
            isAnimated: true
        });
    });
//加载更多
    $(".jiazai").click(function() {
        var text = "";
        var a = 1;
        if (a >=0) {
            /*text+= '<a href="#" class="art_li shadow box">';
            text+= '<div class="act_txt">';
            text+= '<div class="art_name">';
            text+= '<i class="art_nm1">证券通?</i>';
            text+= '<span class="art_nm2">09-04 12:21</span>'
            text+= '</div>';
            text+= '<h2>苹果概念股大跌 乙醇燃料板块乙醇燃料板块乙醇燃料板块乙醇燃料板块</h2>';
            text+= '<p class="art_p">';
            text+= ' 昨日苹果秋季新品发布会举行，苹果股价当日收跌0.40%。乙醇燃料消息昨日苹果秋季新品发布会举行，苹果股价当日收跌0.40%。乙醇燃料消息昨日苹果秋季新品发布会举行，苹果股价当日收跌0.40%。乙醇燃料消息?';
            text+= '</p>' ;
            text+= '</div>';
            text+= '</a>';*/

            text= $('<a href="#" class="art_li shadow">' +
                '<div class="act_txt">' +
                '<div class="art_name">' +
                '<i class="art_nm1">证券通?</i>' +
                '<span class="art_nm2">09-04 12:21</span>' +
                '</div>' +
                '<h2>苹果概念股大跌 乙醇燃料板块乙醇燃料板块乙醇燃料板块乙醇燃料板块</h2>' +
                '<p class="art_p">' +
                ' 昨日苹果秋季新品发布会举行，苹果股价当日收跌0.40%。乙醇燃料消息昨日苹果秋季新品发布会举行，苹果股价当日收跌0.40%。乙醇燃料消息昨日苹果秋季新品发布会举行，苹果股价当日收跌0.40%。乙醇燃料消息?' +
                '</p>' +
                '</div>' +

                '</a>' +
                '<a href="#" class="art_li shadow box"> ' +
                '<div class="act_txt">' +
                '<div class="art_name">' +
                '<i class="art_nm1">证券通?</i>' +
                '<span class="art_nm2">09-04 12:21</span>' +
                '</div>' +
                '<h2>苹果概念股大跌 乙醇燃料板块乙醇燃料板块乙醇燃料板块乙醇燃料板块</h2>' +
                '<p class="art_p">' +
                ' 昨日苹果秋季新品发布会举行，苹果股价当日收跌0.40%。乙醇燃料消息昨日苹果秋季新品发布会举行，苹果股价当日收跌0.40%。乙醇燃料消息昨日苹果秋季新品发布会举行，苹果股价当日收跌0.40%。乙醇燃料消息?' +
                '</p>' +
                '</div>' +
                '</a>' +
                ' <a href="#" class="art_li shadow box">' +
                ' <div class="art_img">' +
                '<img src="../images/hot1.jpg">' +
                '<div class="art_ico">' +
                ' <span class="iconfont">&#xe6d0;</span>' +
                ' <i>03:53</i>' +
                '</div>' +
                ' </div>' +
                '<div class="act_txt">' +
                '<div class="art_name">' +
                '<i class="art_nm1">证券通?</i>' +
                '<span class="art_nm2">09-04 12:21</span>' +
                '</div>' +
                '<h2>苹果概念股大跌 乙醇燃料板块乙醇燃料板块乙醇燃料板块乙醇燃料板块</h2>' +
                '<p class="art_p">' +
                ' 昨日苹果秋季新品发布会举行，苹果股价当日收跌0.40%。乙醇燃料消息昨日苹果秋季新品发布会举行，苹果股价当日收跌0.40%。乙醇燃料消息昨日苹果秋季新品发布会举行，苹果股价当日收跌0.40%。乙醇燃料消息?' +
                '</p>' +
                '</div>' +
                '</a>');
        }
        $("#masonry").append(text).masonry('appended', text, true);
    })
});