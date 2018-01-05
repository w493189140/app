/**
 * Created by Administrator on 2017/6/7.
 */
$(document).ready(function(){
    $(".h_by_d").mouseenter(function(){
        $(".h_by_db").slideDown()
    })
    $(".h_by_d").mouseleave(function(){
        $(".h_by_db").slideUp()
    })
})