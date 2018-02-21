; (function ($) {
    $(function () {
        $(window).on('resize', function () {
            if ($(window).innerWidth() <= 600) {
                console.log('width <= 600px');
            }
        });
    })
}) (jQuery)