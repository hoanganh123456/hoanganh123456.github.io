if($(window).width()>1024){
$('.simpleLens-lens-image').simpleLens({
		loading_image: 'image/loading.gif'
	});
}
else{
	$(this).css("display","none");
}

$(document).ready(function(){
     $('.active-featured-product').slick({
        speed: 700,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-long-arrow-right"></i></button>',
        responsive: [
            {  breakpoint: 991,   settings: { slidesToShow: 3,  }  },
            {  breakpoint: 767,   settings: { slidesToShow: 2, }   },
            {  breakpoint: 479,   settings: { slidesToShow: 1, }   },
        ]
    });   
  });  


        $('.toggle').click(function(){
  // Switches the Icon
  $(this).children('i').toggleClass('fa-pencil');
  // Switches the forms  
  $('.form').animate({
    height: "toggle",
    'padding-top': 'toggle',
    'padding-bottom': 'toggle',
    opacity: "toggle"
  }, "slow");
});

$('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
    });