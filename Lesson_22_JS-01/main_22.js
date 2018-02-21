// ;(function () { /*анонимная функция для того что бы не было конфликтов при подключении других скриптов - можно ее одну на весь скрипт*/
//
//     'use strict'; //любые неточности ява будет указывать.
//
//     var firstVariable = 0; //тип строка
//     console.log(firstVariable);
//     var str = 'Hello'; // тип число
//     var name = 'Alex'; // тип число
//     console.log(str + ', ' + name + '!');


    var obj = {
        val1: 1,
       ourval: 'dsfsdfd',
        v3: false,
        innerObj: {
            val1: 2345885
        }
    };
console.log(obj.val);
console.log(obj.innerObj.val1);

    var array = [
        1,
        'fkdhjkhgkd',
        true,
        [],
        {
            val:'sdf',
            up: 2,
            arr: [1,33,3325555,'dshghg']
        }
    ]; //массив

console.log(array[4].arr[3]);
console.log(obj['val1']);

console.log('wwwwwww' >= 'agghkfh');
console.log(18 >= parseInt('почти 18лет'));





    // var booleanVar = true; //boolean тип
    // var nullVar = null;
    // var undefinedVar = undefined;

    // var ost = 10%3;
    // var sum = 10;
    // var sum =+ 5; //15
    // var == 10; // false сравнение вариант 1
    // sum !=9 // true сравнение вариант 1
    // sum >=14 // true
    // sum >=17 // false
    // sum <=17 // true
    // sum <15 // false

    // var i = 23;
    // i++; //инкремент
    // i--; //декремент
    // console.log(i);

    // var i2 = 1;
    // console.log(i2++);
    // console.log(i2);
    // console.log(++i2);
    //
    //
    // var obj = {
    //     val1: 1, val2: 'hi', v3: false
    // }; //тип object


    // firstVariable = 'Алексей';

    // var q1 = prompt('What is yor name?', 'Alex');
    //
    // var q2 = confirm('Вы рады быть на нашем сайте');
    //
    // alert('Здравствуй ' + q1 + 'Спасибо, что рады')


    // var q1 = prompt('What is yor name?', firstVariable);
    // q2 = confirm('Вам есть 18 лет?');
    //
    // if (q1 && q2) {
    //     alert('Здравствуй ' + q1 + ', Вам доступен контент нашего сайта');
    // } else {
    //     if (!q1) {
    //         q1 = prompt('Имя нужно указать');
    //     }
    //     if (!q2) {
    //         alert('Простите, подростите')
    //     }
    // }
//     // console.log(9885544)

console.log('_____________________________________________');

var age = 22;
if (age > 18 && (age < 90 || age >= 100)) {
    console.log(true);
} else {
    console.log(false);
}
console.log('___________');
console.log(age > 18);
console.log(!(age <= 18));

console.log(1 === '1');
var male = 'girl'
var result;
if (age > 18) {
   result = true;
} else {
    result = false;
}

result = (age > 18) ? true : false;
console.log(result);

console.log('--------else if---------');
if (age > 18) {
   console.log('выполнилось 1 условие');
} else if (!age % 2) { //проверка на четное количество лет
    console.log('человеку четное кол-во лет');
} else if (male == 'girl') {
  console.log('мы рады девушкам');
} else {
    console.log("миль пардон, молодой нечетный парниша");
}

console.log('-----while------');
var k = 10;
while (k > 0) {
   console.log(k--);
}
console.log("======do while=====");
var kk = 10;
do  {
    console.log(kk++);
} while (kk > 10 && kk < 20);
console.log("====for======");
for (i = 10; i > 0; i--) {
console.log(i);
}

// })();
