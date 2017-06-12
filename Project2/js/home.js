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
     $('.active-new-product').slick({
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
     $('.active-brand').slick({
        speed: 700,
         infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-long-arrow-right"></i></button>',
        responsive: [
            {  breakpoint: 991,   settings: { slidesToShow: 3,  }  },
            {  breakpoint: 767,   settings: { slidesToShow: 2, }   },
            {  breakpoint: 479,   settings: { slidesToShow: 1, }   },
        ]
    }); 


    }); 

$('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Mint</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });  
// phu kien tab

(function($){
    $(window).on('load',(function() {
        $('#preloader').hide();
    }));
})(jQuery);

$(window).on('load',(function(){
    var selectedCategory;
     $('.cat-2').css('display','none');
     $('.cat-3').css('display','none');
     $('.cat-4').css('display','none');
     $('.cat-5').css('display','none');
     $('.cat-6').css('display','none');
    var $grid = $('.featured').isotope({
        itemSelector: '.col-md-3',
        masonry: {
            columnWidth: '.col-md-3',
        },
        getSortData: {
            selectedCategory: function( itemElem ) {
                return $( itemElem ).hasClass( selectedCategory ) ? 0 : 1;
            }
        }
    
  });


 
  var $items = $('.featured').find('.featured-items');
   
  $('.sort-button-group').on( 'click', '.button', function() {
    selectedCategory = $( this ).attr('data-category');
    
    var selectedClass = '.' + selectedCategory;
    $items.filter( selectedClass ).css('display','block');
    $items.not( selectedClass ).css('display','none');
    $grid.isotope('updateSortData');
    $grid.isotope({ sortBy: 'selectedCategory' });
  });

  $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
            $buttonGroup.find('.active').removeClass('active');
            $( this ).addClass('active');
        });
  });

}));

(function($){
    $('.featured').isotope({
    itemSelector: '.featured-items',
    layoutMode: 'masonry'
    });
})(jQuery);

$('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
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
 

if($(window).width()<1024){
    $('.menu-mobile').css('display','block');
    $('.icon ').css('display','none');
    $('.product-img a').attr('href','chitiet.html');
    $('#shop_product a').attr('href','danhsachsanpham.html');
    $('#shop_woman a').attr('href','nu.html');
    $('#shop_men a').attr('href','nam.html');
}
else{
     $('.menu-mobile').css('display','none');
}

$('.single-latest-blog .latest-blog-img a').attr('href','tintuc.html'); 
     