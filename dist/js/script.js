// jQuery(document).ready(function ($) {
//     setTimeout(function() {
//         $.magnificPopup.open({
//             items: {
//                 src: '#popupHello'
//             },
//             mainClass: 'mfp-fade'
//         });
//     }, 1000);
// });

  // Navgoco acordion
  $(".catalog__acordion").navgoco({accordion: true});

  // jQuery price slider
  $(function() {
    $( "#slider-range" ).slider({
      range: "min",
      value: 50,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "value" ) );
  });

  // Reset price slider
  function resetSlider() {
    $("#slider-range").slider('value', 50);
    $( "#amount" ).val(50);
  } 
  
  // Filter
  $(".filter__checkbox:checkbox").click(function(){
    $(this).closest('.b-wave').find('.filter__result__products').addClass('animated fadeInUp js_resultActive')
  });

  var count = 0
  $(function() { 
       updateCount(); 
       $('#js_filter1 input[type=checkbox]').change(function() { 
             updateCount(this.checked ? 1 : -1); 
       });
  }); 

  function updateCount(a) {
       count = a ? count + a : $('#js_filter1 input[type=checkbox]:checked').length;
       $('.products__cont').text(count);
  }

  $('.reset__filetr').click(function() {
    $(this).closest('.b-wave').find('input:checkbox').removeAttr('checked');
    $(this).closest('.b-wave').find('.filter__result__products').removeClass('js_resultActive')
    count = 0;
    $(this).closest('.b-wave').find('.products__cont').text(count);
    return false;
  });

  // Reset filter
  function resetAll() {
    $("#slider-range").slider('value', 50);
    $( "#amount" ).val(50);
    $('.b-wave').find('input:checkbox').removeAttr('checked');
    $('.b-wave').find('.filter__result__products').removeClass('js_resultActive')
    count = 0;
    $('.products__cont').text(count);
  } 

  // Ashan slider 
  var productSlider = $('.js-products-slider-2'),
      productSliderOptions = {
          dots: false,
          arrows: true,
          slide: '.js-products-slider-item',
          slidesToShow: 4,
          slidesToScroll: 1
      };
  if (productSlider.length) {
      productSlider.slick(productSliderOptions);
  }
  var productSlider = $('.js-products-slider-3'),
      productSliderOptions = {
          dots: true,
          arrows: true,
          slide: '.js-products-slider-item',
          slidesToShow: 1,
          slidesToScroll: 1
      };
  if (productSlider.length) {
      productSlider.slick(productSliderOptions);
  }
    var productSlider = $('.js-products-slider-4'),
      productSliderOptions = {
          dots: true,
          arrows: false,
          slide: '.js-products-slider-item',
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000
      };
  if (productSlider.length) {
      productSlider.slick(productSliderOptions);
  }