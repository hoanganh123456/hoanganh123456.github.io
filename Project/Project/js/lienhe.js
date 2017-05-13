var startY, scrollBottom, endY;
var colHeight, itemHeight;
(function($) {
	
	"use strict";
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({ // initialize the plugin
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				subject: {
					required: true
				}
			}
		});
	}
})(window.jQuery);


 $(window).scroll(function(){
        checkY();
        
    });
    $(window).resize(function() {
        
        checkY();
    });
    // Do this on load just in case the user starts half way down the page
    checkY();

function checkY(){
    scrollBottom = $(window).scrollTop() + window.innerHeight;
    startY = $('header').position().top + $('header').outerHeight();
     endY = $('.main-footer').position().top;
    if( $(window).scrollTop() > startY && scrollBottom < endY ){
        if (window.innerWidth > 900 ) {
			$('#menu').removeClass('navbar-fixed-top');
            $('.side-menu').slideDown();
           
        }
         else {
            $('.side-menu').slideUp();
            $('#menu').addClass('navbar-fixed-top');
        }
    }else{
        $('.side-menu').slideUp();
        $('#menu').removeClass('navbar-fixed-top');
    }
   

}
  
 