var startY, scrollBottom, endY;
var colHeight, itemHeight;

$(document).ready(function(){
    $(".new-product").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            400:{
                items:2,
            },
            992:{
                items:3,
            }
        }
    });
    $(".share").owlCarousel({
        loop:true,
        margin:10,
        center:true,
        nav:true,
        merge:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            400:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,  
            }
        }
    });    
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');

    $(window).scroll(function(){
        checkY();
    });
    $(window).resize(function() {
        setHeight();
        checkY();
    });
    // Do this on load just in case the user starts half way down the page
    checkY();
    setHeight();
    
    $( ".box.phone" ).hover(
        function() {
            $( ".box-title.phone" ).animate({
                width: "70%",
                opacity: 1
            },500);
        }, function() {
            $( ".box-title.phone" ).animate({
                width: 0,
                opacity: 0
            },500);
        }
    );
    $( ".box.phk" ).hover(
        function() {
            $( ".box-title.phk" ).animate({
                width: "70%",
                opacity: 1
            },500);
        }, function() {
            $( ".box-title.phk" ).animate({
                width: 0,
                opacity: 0
            },500);
        }
    );

});

function setHeight(){
    itemHeight = $('#phone-slide .light').height();
    $('#phone-slide .dark').height(itemHeight);
    colHeight = $('#phone-slide .carousel-inner').height();
    $('.col-title').height(colHeight);
}

function checkY(){
    scrollBottom = $(window).scrollTop() + window.innerHeight;
    startY = $('header').position().top + $('header').outerHeight();
     endY = $('#end').position().top;
    if( $(window).scrollTop() > startY && scrollBottom < endY  ){
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
