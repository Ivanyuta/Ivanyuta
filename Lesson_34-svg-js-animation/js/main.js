; (function($) {
    $(function () {
       // $('.hide').on('click', function () {
       //   $('.child').hide(500);
       //
       // });
       //  $('.show').on('click', function () {
       //      $('.child').show(1000);
       //  });

        $('.toggle').on('click', function () {
            $('.child').toggle(500);

        });
        //how work the toggle()
        $('.my-toggle').on('click', function () {
            if ($('.child').is(':visible')) {
                $('.child').hide(500);
            } else {
                $('.child').show(1000);
            }
        });

        $('.slideUp').on('click', function () {
          $('.child').slideUp(500);

        });
         $('.slideDown').on('click', function () {
             $('.child').slideDown(1000);
         });

        $('.slideToggle').on('click', function () {
            $('.child').slideToggle(500);

        });

        $('.fadeOut').on('click', function () {
            $('.child').fadeOut(1500, function () {
                console.log('bravo');
            });

        });
        $('.fadeIn').on('click', function () {
            $('.child').fadeIn(1500);
        });

        $('.fadeTo').on('click', function () {
            $('.child').fadeTo(500, 0.5);

        });
        $('.animate').on('click', function () {
            $('.child').animate(
                {
                    borderRadius: '50%',
                    width: '-=250',
                    height: '50%',
                    margin: '125px'
                },
                {
                    duration: 1500,
                    complete: function () {
                        console.log(12222);
                    }
                }
            )
        });
    });
}) (jQuery);