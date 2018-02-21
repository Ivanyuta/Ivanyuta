; (function (){
    'use strict';
    var objVar = {
        key1: 'val key 1',
        key2: 1255522,
        key3: {
            key2: 'ejfhwgjr'
        }
            }; //самый обычный обьект
    console.log(objVar.key1);
    console.log(objVar.key3.key2);

    console.log(objVar);
    objVar.key4 = 'add prop';
    console.log(objVar);
    objVar.key2 = 11111111; //перезадали значение ключу
    console.log(objVar['key2']);
    console.log('lenght of key1 of object', objVar.key1.length);
    objVar
    console.log('show number of string - ', objVar.key1[2]);
    var str = 'samuel'

    var arrVar = [['Ivan', 'Danil', 'Maria', 'Anna'],
        [22, 33, 23, 32]

    ];
    console.log(arrVar[0]);
    console.log('last index of array', arrVar.length); //last index of array + 1
    console.log('add an element', arrVar[0].push('Vasya'));
    console.log(arrVar[0]);
    arrVar[0].unshift('Nadya'); //add am element in begin of array
    console.log(arrVar[0]);
    arrVar[0].pop();
    arrVar[0].shift();
    console.log(arrVar[0]);
    //arrVar[0].splice(1, 1);
    console.log(arrVar[0]);
    delete arrVar[0][1];
    console.log(arrVar[0]);
    console.log('перебираем обьект');
    for (var studentName in arrVar[0]) {
        console.log(studentName, arrVar[0][studentName]);
    }
    console.log('перебираем обьект');

    var newStr = '';
    for (var letter in objVar.key1) {
        console.log(letter, objVar.key1[letter]);
        if (objVar.key1[letter] == ' ') {
            newStr = newStr + '_';
        } else {
            newStr = newStr + objVar.key1[letter];
        }

    }
    console.log(newStr);

    var salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250,
        "Masha": "25 thank you, dear"
    };
    var summ = 0;
    for (var salary in salaries) {
        if (parseInt (salaries[salary]))
        summ += parseInt(salaries[salary]);
    }
    console.log(summ);

    console.log('массив склеивать в строку, а строку в массив можно');
    var names = ['Ivan', 'Danil', 'Maria', 'Anna'];
    console.log(names);
    console.log('Our workers: ' + names.join(', '));

    console.log(salaries['Masha'].split(' '));
}) ();