$(function () {
    $('.daily').on("click",".head,.lists",function () {
       var _this =  $(this).parent('.daily');
       if(_this.children('.content').css("display")=="none"){
           _this.children('.lists').slideUp();
           _this.children('.content').slideDown();
       }else {
           _this.children('.content').slideUp();
           _this.children('.lists').slideDown();
       }
    })
    $('.daily .content').click(function () {
        console.log("跳转");
    })
})