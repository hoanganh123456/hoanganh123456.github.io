
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
    items:1


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
 

//giỏ hàng
 (function(){
 
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });
  
})();

 