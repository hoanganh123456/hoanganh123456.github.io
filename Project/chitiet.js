$(document).ready(function(){
  $('.bxslider').bxSlider();

  /* .thumbnail-container product image slider */
                $('.thumbnail-container .slider-left').bxSlider({
                    slideWidth: 94,
                    slideMargin: 5,
                    minSlides: 4,
                    maxSlides: 4,
                    pager: false,
                    speed: 500,
                    pause: 3000
                });
});
function checkY(){
    startY = $('header').position().top + $('header').outerHeight();
    if( $(window).scrollTop() > startY ){
        if (window.innerWidth > 1310) {
            $('#menu').removeClass('navbar-fixed-top');
            $('.side-menu').slideDown();
        } else {
            $('.side-menu').slideUp();
            $('#menu').addClass('navbar-fixed-top');
        }
    }else{
        $('.side-menu').slideUp();
        $('#menu').removeClass('navbar-fixed-top');
    }
}




