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



//form tim kiếm

$('#buttonsearch').click(function(){
                $('#formsearch').slideToggle( "fast",function(){
                     $( '#content' ).toggleClass( "moremargin" );
                } );
                $('#searchbox').focus()
                $('.openclosesearch').toggle();
        });
 
$('#box_sign').click(function(){
    $('#login').hide();

});


(function(){
 
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });
  
})();

 