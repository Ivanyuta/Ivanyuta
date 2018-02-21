; (function ($) {
    $(function () {
        // console.log($('#logo')[0]);
        //
        //     $('#logo').on('click', function (e) {
        //         // console.log(e);
        //         // console.log($(this));
        //         $(this)
        //     .closest('header')
        //             .next()
        //             .find('a')
        //             // .css ({
        //             //     backgroundColor: '#ccc',
        //             //     fontSize: '20px'
        //             // })
        //             .toggleClass('styled-link')
        //             // .toggle(1500)
        //         console.log($(this)
        //             .closest('header')
        //             .next()
        //             .find('a')
        //             .hasClass('styled-link')
        //         );
        //     });
        //     $('p:nth-of-type(2)')
        //         .css('color', 'red')
        //         .attr('id', 'paragraph-id')
        // console.log($('#paragraph-id').attr('id'));
        // $('#paragraph-id').removeAttr('style');
        // console.log($('#paragraph-id').data('id'));

        // $(window).on('resize', function () {
        //    console.log('inner-width:',window.innerWidth);
        //    console.log('outer-width:',window.outerWidth);
        //    console.log('height:',window.innerHeight);
        // });

        var bannerTop;
        function setBannerTop() {
            bannerTop = $('.banner').offset().top;
            console.log(bannerTop);
        }
        setBannerTop()

        $(window).on('resize', function () {
            setBannerTop()
        });


        $(window).on('scroll', function () {
            console.log($(window).scrollTop());
           if ($(window).scrollTop() >= bannerTop) {
               $('.banner').addClass('fixed');
               $('body').addClass('pt');
               } else {
               $('.banner').removeClass('fixed');
               $('body').removeClass('pt');
           }
        });

        $('#accordion > li > a').on('click', function () {
           $(this)
               .closest('li')
               .addClass('active')
               .find('a')
               .next()
               .slideDown(1000)
               .closest('li')
               .siblings()
               .removeClass('active')
               .find('a')
               .next()
               .slideUp(1500);

        });


    });
})(jQuery);