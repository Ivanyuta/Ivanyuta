;(function ($) {
    $(function () {
        $('.slick').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });

        $('.single-item').slick({
            dots: true
        });
    });

    $(window).on('load',function () {

        var mapConteiner = $('#map')[0];
        var map = new google.maps.Map(mapConteiner, {
            zoom: 12,
            center: {lat: 37.288230, lng: -121.899322},
            disableDefaultUI: true

        });
    });
})(jQuery);


