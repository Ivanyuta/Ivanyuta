'use strict'; //строгие стандарты, т.е. будет придераться к любым отсутсвующим точкам с запятой и прочей мелочи. Заставляет вылизывать свой код.

function calculateArea(a, b) {
    console.log(a * b);
}
calculateArea(5, 20); //<= что бы функция выполнилась ее надо вызвать
calculateArea(5, 6);
calculateArea(50, 20);

console.log("ПРИМЕР: использование return");
function calculatePerimeter (a, b) {
  return ((a + b)*2);
  //после return ничего не выводиться. функция прекращается
}
console.log(calculatePerimeter (2, 4));
console.log(calculatePerimeter (12, 12) + 10);
calculatePerimeter (8, 0.5);


console.log("ПРИМЕР: пример функии");
var param1 = 2;
var param2 = 6;
function calculateAreaNotRect() {
   if (param1 != param2) {
       return param1 * param2;

   } else {
       return 'denied';

   }
}
console.log("ПРИМЕР: локальные и глобальные переменные");

var secondName = 'Petrovich'
function concatStr(name, surname) {
    secondName = 'Vladimirovich'; //если не поставить var перед переменной внутри функции ПЕРЕОПРЕДЕЛИТ такую же переменную глобальную

    return 'Hello, ' + name + '' + secondName + '' + surname + '!';
    }

    console.log(concatStr('Alex', 'Ivanyuta'));
    console.log(secondName);

    ; (function () {

}) () ; //это анонимная функция, уловка что бы заэкранировать свои переменные. т.е. после подключения внешнего чужого файла яваскрипт могут пойти конфликты между переменными из-за одинакового названия

console.log('ПРИМЕР: ниже пример, который я хрен понял((');
function checkVisibleAreas() {

    if (1==1) {
        var varVariable = 'var';
        let letVariable = 'let'; //этот тип переменной из EcmaScript6
        console.log(typeof (varVariable));
        console.log(typeof (letVariable));
    }
    console.log(typeof (varVariable));
    console.log(typeof (letVariable));
}
checkVisibleAreas();
console.log(typeof (varVariable));
console.log(typeof (letVariable));

console.log('ПРИМЕР: пример с постоянной переменной');
const constVar = 'constant';
//constVar = 'newVar'; //переопределять константы, в отличии от переменных, НЕЛЬЗЯ!!!!
console.log(constVar);

console.log('ПРИМЕР: вызов функции из функции');

function actionOne() {
    console.log('action1');
}
function actionTwo() {
    console.log('action2');
}
function actionThree() {
    console.log('action3');
    actionOne();
    actionTwo();
    }
    actionThree();

console.log('ПРИМЕР: function as variable');

var func = function (aa) {
    // console.log('function as variable');
    return aa;
};
console.log(func (11));

console.log('ПРИМЕР: function in function....возведение в степень');
function exponentiation(x, n) {
    if (n > 1) {
        var result = x * exponentiation(x, n - 1);
        console.log(result, n);
        return result;
    } else {
        console.log(x, n, 'return');
        return x;
    }
}
// console.log(exponentiation (2, 4));
exponentiation(2, 4);

console.log('ПРИМЕР: Работа на уроке - имитация игральных костей');

function getRandomArbitrary(min, max) {
    var rand = (Math.random() * (max - min) + min);
    console.log(rand);// для проверки округления
    return Math.round(rand);
}
console.log(getRandomArbitrary(1, 6));



console.log('ПРИМЕР: случайное число ежду двумя введенными пользователем');

var minVal = prompt('Enter your first digit'),
    maxVal = prompt('Enter your second digit');

function returnUserRandom(min, max) {
    if (typeof (min) != 'number' && typeof (max)) {
        alert('Вводи цифры');
    }
   return getRandomArbitrary (parseInt(min), parseInt(max));

}
console.log(returnUserRandom(minVal, maxVal));

