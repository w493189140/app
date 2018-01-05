// JavaScript Document
//产品相关
$(document).ready(function(){
//龙虎精选
mui(".longhu_scrol").on('tap', '.longlih', function (event) {
		this.click();
	});
	$(document).on('click','.longlih',function(){
　　　　　　var t_this=$(this)
    $(".longhu_li").slideUp()
	$(".longhu_scrol > li h2 i").removeClass("longhu_hi")
	if(t_this.next().css("display")=="none"){
		t_this.next().slideDown()
		t_this.find("i").addClass("longhu_hi")
	}else{
		t_this.next().slideUp()
		t_this.find("i").removeClass("longhu_hi")
		}
            });	  
//我的产品服务
$(".gu_tuij_gb i").click(function(){
	$(this).parents(".gu_tuij").add(".gu_aphbj").fadeOut()
	})
	//返回顶部
 $(window).scroll(function() {
	 $("#sct_top").fadeIn()
	 var scrollY = $(document).scrollTop();
	 if (scrollY ==0){
            $("#sct_top").fadeOut()
        } 
 })
    $("#sct_top").click(function(){
		 $('body,html').animate({ scrollTop: 0 }, 300);
		})
});