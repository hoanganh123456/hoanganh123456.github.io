$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    smartSpeed:450,
    animateOut: 'fadeOut',
    animateIn: 'fadeInLeft',
    responsiveClass:true,
    responsive:{
        0:{
            items:1,     
        },
        300:{
            items:1,
        },
        375:{
            items:1,   
        },
        425:{
            items:1,
        },
        768:{
            items:2,    
        },
        800:{
            items:2,    
        },
        1024:{
            items:1,     
        },
        1200:{
            items:1
        }
    }
})
  $('.owl-prev').html("<span class='glyphicon glyphicon-chevron-left'></span>");
$('.owl-next').html("<span class='glyphicon glyphicon-chevron-right'></span>");
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

if($(window).width()<1024){
    $('.menu-mobile').css('display','block');
    $('.icon ').css('display','none');
    $('.product-img a').attr('href','chitiet.html');
}
else{
     $('.menu-mobile').css('display','none');
}
