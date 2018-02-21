; (function ($) {
    function doActions() {
        console.log('Actions from function');
        $('main').append('<h2 class="class-name">Header</h2>')
    }
  // $(document).ready(function () {
  //     console.log($('main'));
  // });
  $(function () { //это сокращенное от верхнего  $(document).ready(function () {
      console.log($('main'));
      $('span').click(function () {
         console.log('click on span');
      });
      $('span').click(function () {
          console.log(1223322);
      });
      $('span').on('click', function () {
          console.log('click in listener');
      });
      $('span').on('click', function() {
                doActions();
      });
      $('body').on('click', 'h2.class-name', function () { //для динамически добавленных в DOM элементов
          console.log($(this));
          $('span').css({
              color: 'red'
          });
      });
      $('div').on('contextmenu', function () {
          console.log('click right botton of mouse');
      });
      $('div').on('dblclick', function () {
          console.log('double click left botton of mouse');
      });
      //   $('div').on('mouseover', function (event) { //название функции не важно
      //      console.log(event.target);
      //   });
      // $('div').on('mouseout', function (e) {
      //     console.log(e.target);
      // });
      // $('div').on('mouseenter', function (event) {
      //     console.log(event.target);
      // });
      // $('div').on('mouseleave', function (e) {
      //     console.log(e.target);
      // });

      // $('div').hover(
      //     function (e) {
      //         console.log('навели на элемент', e.target);
      //       },
      //     function (e) {
      //         console.log('убрали с элемента', e.target);
      //     }
      // );


        // $('input').on('focus', function () {
        //     //$(this) текущий элемент
        //     var $this = $(this);
        //     console.log('Element', $this);
        //     console.log('Фокус на эементе c id ' +$this.attr('id'));
        //
        // });
        // $('input').on('blur', function () {
        //     var $this = $(this);
        //     console.log('Фокус убрался с эемента c id ' +$this.attr('id'));
        //
        // });

        // $('form').on('submit', function (e) {
        //     e.stopPropagation(); //отеняет действия предыдущих обработчиков
        //     e.preventDefault(); //отменяет стандартные действия браузера
        //     var question = confirm('при отправке формы вы покинете эту страницу. Продолжить?');
        //     if (question) {
        //         console.log($(this).serialize());
        //
        //     }
        // });
      $('form span').on('click', function () {
         $(this).closest('form').submit();
      });

      $('a').on('click', function (e) {
          e.stopPropagation();
          e.preventDefault();
          var question = confirm('Вы пытаетесь перейти на внешнюю ссылку. Перейти?');
          console.log('координата по оси Х:', e.clientX);
          console.log('координата по оси Y:', e.clientY);
          if (question) {
              location.href = $(this).attr('href');
                }
      });
      //события окна браузера
      $(window).on('resize', function () {
        console.log('Ширина окна: ', $(window).width());
        console.log('Высота окна: ', $(window).height());
      });

      $(window).on('scroll', function () {
         console.log($(window).scrollTop());
      });
      // $('.up').on('click', function () {
      //     $(window).scrollTop(0);
      //
      // });
      // $('.down').on('click', function () {
      //     $(window).scrollTop($('body').height());
      //
      // });

      //событие клавиатуры
      // $('input').on('keydown', function (e) {
      //     console.log('Нажата клавиша ', e.keyCode);
      // });
      // $('input').on('keyup', function (e) {
      //     console.log('Отжата клавиша ', e.keyCode);
      // });
      $('input').on('change keypress click', function (e) { //можно назначать несколько событий в одном обработчике
          console.log('значение : ', $(this).val());
      });
  });
}) (jQuery);