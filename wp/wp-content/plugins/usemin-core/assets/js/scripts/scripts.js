jQuery(document).ready(function($){

	// Swiper slider
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      parallax:true,
      effect: "slide",
      speed: 1000,
      autoplay: {
	    delay: 3500,
	  },
	  loop:true


    }); // End swiper slier


    // Oxygen Toggle
    // Close all other opened toogle when opeing a sibling
    var title = $('.t-auto-close'),
        icon = $('.oxy-expand-collapse-icon'),
        expanded = $('.t-auto-close').attr('data-oxy-toggle-active-class'),
    	content = $('.t-auto-close').next();
    title.click(function(e) {
        e.stopPropagation();
        content.not($(this).next(content)).hide();
        $(this).next(content).toggle();
        icon.not($(this).find(icon)).addClass('oxy-eci-collapsed');
        $(this).find(icon).toggleClass('oxy-eci-collapsed');
        title.not($(this)).removeClass(expanded);
      	$(this).toggleClass(expanded);
    }); // End Close all other opened toogle when opeing a sibling

/*
// for counter
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
});

*/

// Slick Slider

    $(".regular").slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay:true,
        autoplaySpeed: 5000,
        arrows:false,
        pauseOnHover:false
    });


        $('.regular').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          //console.log(nextSlide);
          //nextSlide.addClass('check');
          

        });

        $(".slick-current .text").addClass('text-animation');
        setTimeout(function(){$(".slick-current img").addClass('img-animation');},500);

        $('.regular').on('afterChange', function(event, slick, currentSlide, nextSlide){
          $(".slick-slide .text").removeClass('text-animation');
          $(".slick-slide img").removeClass('img-animation');
          $(".slick-current .text").addClass('text-animation');
          setTimeout(function(){$(".slick-current img").addClass('img-animation');},1500);
          
          
        });


      $('.regular').on('beforeChange', function (e, s, c, n) {
        $('body').addClass('change');
      });

      $('.regular').on('afterChange', function (e, s, c) {
        setTimeout(function () {
          $('body').removeClass('change');
        }, 2000);
      });
// End Slick Slider


$('.with_dot').append('<span class="dot"></span>');

// FlexNav
$(".flexnav").flexNav();

// Navigation Icon at mobile menu
$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
  $(this).toggleClass('open');
});

$('.menu-item-has-children .touch-button').append('<i class="fas fa-chevron-down"></i>');
// End Navigation

// Attorney Pop up

$('.attorney_content').click(function(){
  //console.log($(this).parent());
  $(this).parent().find('.attorney_popup').addClass('visible');
  $('body').addClass('popup_open');
})

$('.closer').click(function(){
    $(this).parent().removeClass('visible');
    $('body').removeClass('popup_open');
})


// New Menu 
$('.new_menu > li > a').click(function(e){
  e.preventDefault();
  //$('.new_menu > li > ul').css('display', 'none');
  var parent = $(this).parent();
  
  console.log(parent);
  parent.find('>ul').slideToggle(500);
  parent.siblings().find('>ul').css('display', 'none');
})

$('.new_menu > li.menu-item-has-children > a ').append('<i class="fas fa-chevron-down"></i>');
$('.menu-button').click(function(){
    $('.new_menu').slideToggle(500);
})


})// Document ready

