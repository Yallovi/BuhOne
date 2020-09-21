$('.main-slider').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<div class="slider-arrow slider-arrow_main slider-arrow_left"</div>',
    nextArrow: '<div class="slider-arrow slider-arrow_main slider-arrow_right"</div>',
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
$('.clients-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots:true,
    prevArrow: '<div class="slider-arrow slider-clients slider-arrow_left"</div>',
    nextArrow: '<div class="slider-arrow slider-clients slider-arrow_right"</div>',
    responsive: [  
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.feedback-slider').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow_left"</div>',
    nextArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow_right"</div>',
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
$('.feedback-elements').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    prevArrow: '<div class="arrow__left"></div>',
    nextArrow: '<div class="arrow__right"></div>',
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
        }
    }]
});
$(document).ready(function(){
  let link = $('.menu-link');
  let link_active = $('.menu-link__active');
  let menu = $('.menu');
  let nav_link = $('.menu a');

  link.click(function(){
    link.toggleClass('menu-link__active');
    menu.toggleClass('menu__active');
  });
  nav_link.click(function(){
    link.toggleClass('menu-link__active');
    menu.toggleClass('menu__active');
  });

});