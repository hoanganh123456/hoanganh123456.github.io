$(document).ready(function(){
  $('.bxslider').bxSlider({
  auto: true
});
})
 



$('.color1').click(function() {
    $('#anh1').show();
    $('#anh2').hide();
    $('#anh3').hide();
    $('#anh4').hide();
});
$('.color2').click(function() {
    $('#anh2').show();
    $('#anh1').hide();
     $('#anh3').hide();
      $('#anh4').hide();
});
$('.color3').click(function() {
    $('#anh3').show();
    $('#anh1').hide();
      $('#anh2').hide();
        $('#anh4').hide();
});

$('.color4').click(function() {
    $('#anh4').show();
    $('#anh1').hide();
     $('#anh2').hide();
      $('#anh3').hide();
});


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    nav:true,
    dots:false,
    smartSpeed:450,
    responsiveClass:true,
    responsive:{
        0:{
            items:4,
            
        },
        320:{
            items:2,
        },
        600:{
            items:3,
            
        },
        1024:{
            items:3,
        },
        1200:{
            items:4,
        }
    }


  })
  $('.owl-prev').html("<span class='glyphicon glyphicon-chevron-left'></span>");
$('.owl-next').html("<span class='glyphicon glyphicon-chevron-right'></span>");
});


  $(".xemthem").click(function(){
        $(".vb1").css("display", "block");
        $(".xemthem").css("display", "none");
        $(".vb2").css("display", "block");
        $(".dong").css("display", "block");
    });

    $(".dong").click(function(){
        $(".vb1").css("display", "block");
        $(".xemthem").css("display", "block");
        $(".vb2").css("display", "none");
        $(".dong").css("display", "none");

    });

 (function(){
 
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });
  
})();



    

