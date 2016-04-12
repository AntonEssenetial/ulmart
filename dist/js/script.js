jQuery(document).ready(function ($) {
    setTimeout(function() {
        $.magnificPopup.open({
            items: {
                src: '#popupHello'
            },
            mainClass: 'mfp-fade'
        });
    }, 1000);
});