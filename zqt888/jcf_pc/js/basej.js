/**
 * Created by Administrator on 2017/6/7.
 */
$(document).ready(function(){
//顶部导航-下拉显示栏
    $(".h_by_d").hover(function(){
        $(this).find(".h_by_db").stop(true).slideDown("fast")
    })
    $(".h_by_d").mouseleave(function(){
        $(this).find(".h_by_db").stop(true).slideUp("fast")
    })

    $(".chpin_t ul li").click(function(){
        $(".chpin_t ul li").removeClass("chpin_t_on")
        $(this).addClass("chpin_t_on")
    })
    $(".tab_tiem h4").click(function(){
       $(".tiem_li").slideDown()
    })
    $(".tiem_li span").click(function(){
        var tm_this=$(this).text()
        $(".tab_tiem h4 em").html(tm_this)
        $(".tiem_li").slideUp()
    })
    $(".user_click").click(function(){
        if($(".user_l_li").css("display")=="none"){
            $(".user_l_li").slideDown()
            $(".user_click i").removeClass("user_click_to")
        }else{
            $(".user_l_li").slideUp();
            $(".user_click i").addClass("user_click_to")
        }
    })
})