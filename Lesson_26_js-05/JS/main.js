; (function($) {
  //  alert(location.hostname);
  //   location.href = 'http://google.com';
    console.log(document.getElementById('s-1'));
    console.log(document.getElementsByClassName('link')[0]);
    console.log(document.getElementsByTagName('li'));
    console.log(document.querySelector('main section .link'));
    console.log(document.querySelectorAll('main .link')[0]);
    var element = $('main .link');
    console.log(element);
   element
        .css({
            color: 'red',
            fontSize: '20px'
        })
        .addClass('custom-class')
        .removeClass('link');

    // $('li').toggleClass('li-class');
    $('.li-class').css({
        background: 'green',
        minWidth: '50px',
        minHeight: '15px'
    })
        .find('a')
        .hide();
    // $('span:nth-child(2)').next().prev().prev().text('New span text');
    // $('#s-1')
    //     .html('<p>New paragraph text</p>')
    //     .append('jooooooooooooooooooj')
    //     .prepend('oooooooppppppppppppppaaaaaaaaa');
    if ($('span') == 'span text') {
        
    }
}) (jQuery);

