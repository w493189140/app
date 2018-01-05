$(function () {
    $('.daily').on("click",'.list',function () {
        $(this).addClass("current").siblings(".list").removeClass('current');
    })
})