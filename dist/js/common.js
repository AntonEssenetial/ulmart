/***********************
    © Mihail Firsov
    mihailfirsov.ru
    dev.firsov@gmail.com
***********************/

jQuery(document).ready(function ($) {

    /*
     * Product slider
     */
    var productSlider = $('.js-products-slider'),
        productSliderOptions = {
            dots: false,
            arrows: true,
            slide: '.js-products-slider-item',
            slidesToShow: 5,
            slidesToScroll: 1

        };

    if (productSlider.length) {
        productSlider.slick(productSliderOptions);
    }

    /*
     * Custom scroll
     */
    if ($('.js-custom-scroll').length) {
        $('.js-custom-scroll').jScrollPane({autoReinitialise: true});
    }


    /*
    Custom select
     */
    if ($('.js-custom-select').length) {
        $('.js-custom-select').selectize();
    }

    if ($('.js-custom-select2').length) {
        $('.js-custom-select2').selectize({
            readOnly: true, 
            onDelete: function() { return false }
        });
    }


    /*
     * TABS
     */
    $(document).on('click', '.js-tab', function() {
        var $this = $(this),
            tabs = $(this).parents('.js-tabs'),
            tabsWrapper = $(tabs.data('tabsWrapper'));
        tabs.find('.js-tab').removeClass('active');
        tabsWrapper.find('.js-tab-content').removeClass('active');
        $this.addClass('active');
        $($this.data('tab')).addClass('active');
    });


    $('.js-close-popup').on('click', function() {
        $.magnificPopup.close();
    });



}); /////////////////////////////////////// END READY

