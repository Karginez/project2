"use strict";

//Типы данных /////////////////////////////////////////////////////////

//числа
// console.log(4.6); //число
// console.log(4/0); //infitity
// console.log('string'*9); //NaN

// //string
// const persone = 'alex';

// //boolean
// const bool = false

// console.log(somethingUnkown); //null

// let und;
// console.log(und); //undefined

// //object

// const obj = {
//     name: "john",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);
// console.log(obj["name"]);


// //alert, confirm, prompt /////////////////////////////////////////////////

// alert('hello');
// const result = confirm('are you here?');
// const answer = prompt('are you 18', ''); // answer is string!!!
// const answer = +prompt('are you 18', ''); //number
// console.log(answer); 

// const answers = [];

// answers[0] = prompt('what is your name?');
// answers[1] = prompt('what is your surname?');
// answers[2] = prompt('how old are you?');

// document.write(answers);

// //es6-interpolation///////////////////////////////////////////////////////////

// const category = 'toys';

// console.log('https://someshop.com/' + category + '/' + 4);
// console.log(`https://someshop.com/${category}/4`); // с интерполяцией

// const user = 'Ivan';

// alert(`Hello ${user}`);

// //Operators //////////////////////////////////////////////////////////////////

// let incr = 10,
//     decr = 10;

// //incr++; постфиксная
// //decr--;

// //++incr; префиксная 
// //--decr;

// console.log(11%2); //остаток от диления 0 или 1

// console.log(2.4 == 8); //true
// console.log(2.4 == '8'); //true сравнение
// console.log(2.4 === '8'); //false строгое сравнение

// && //AND все
// || //OR хотябы один
// ! //отрицание меняет тру на фолс
// != //не равен
// !== //не равен строго

// Условия///////////////////////////////////////////////////////

// const num = 50;

// if (num < 49) {
//     console.log('ERROR');
// } else if (num > 100) {
//     console.log('TOO MUCH');
// } else {
//     console.log('OK');
// }

// (num === 50) ? console.log('OK') : console.log('ERROR'); //тернарный оператор

// const num2 = 52;

// switch (num2) {   //строгое сравнение ===
//     case 49:
//         console.log('FAIL');
//         break;
//     case 50:
//         console.log('FAIL');
//         break;
//     case 51:
//         console.log('PASS');
//         break;
//     default:
//         console.log('wrong');
//         break;
// }

// // ЦИКЛЫ ////////////////////////////////////////////////////////////

// let num3 = 50;

// while (num3 < 55) {
//     console.log(num3); //WHILE
//     num3++;
// }

// do {
//     console.log(num3); //DO - WHILE
//     num3++;
// }
// while (num3 < 55);

// let num4 = 50;

// for (let i = 1; i < 8; i++) { //FOR
//     if (i === 6) {
//         //break;
//         continue;
//     }
//     console.log(i);
 

// }

// //функции /////////////////////////////////////////////////////////

// function showFirstMessage() {
//     console.log('hello');
// }
// showFirstMessage();

// let num5 = 20; //глобальная переменная
// function showFirstMessage(text) {
//     console.log(text);
//     let num5 = 10; //локальная переменная
//     console.log(num5);
// }
// showFirstMessage('hello');
// console.log(num5);

// function calc(a, b) { //существует до отработки кода
//     return (a + b); //после ретурн код не отработает
// }

// console.log(calc(17, 5));
// console.log(calc(4, 9));
// console.log(calc(412, 57));


// const logger = function() { //сущетсвует только когда до нее дойдет очередь
//     console.log('hello');
// };
// logger();

// const calc2 = (a, b) => { return a + b }; //стрелочная функция
// const calc3 = (a, b) => a + b;
// const calc4 = a => a + b;


//методы и свойства строк и чисел////////////////////////////////////////

// const str = 'test';
// const arr = [1, 2, 3];

// // console.log(str.length);
// // console.log(arr.length);
// // console.log(str[2]);
// console.log(str.toUpperCase());

// // const fruit = 'some frit';
// // // console.log(fruit.indexOf("fruit")); //поиск в строке, -1 не найдено

// // if (fruit.indexOf("fruit") == -1) {
// //     console.log('не найдено');
// // } else {
// //     console.log(fruit.indexOf("fruit"));
// // }

// const logg = "test word for cutting";

// console.log(logg.slice(5, 9)); // вырезает от и до

// console.log(logg.substring(5, 9));// вырезает от и до

// console.log(logg.substr(5, 4)); // от и сколько символов вырезать

// const num = 12.4;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));


// callback function ///////////////////////////////////////////////////

function learnJS(lang, callback) {
    console.log(`я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('я прошел урок');
});

const makePizza = function (title, cb) {
    console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`); 
    setTimeout(cb, 3000);
   }
   
   const readBook = function () {
    console.log('Читаю книгу «Колдун и кристалл»…');
   }
   
   const eatPizza = function () {
     console.log('Ура! Пицца готова, пора подкрепиться.');
   }
   
   makePizza('Пеперонни', eatPizza);
   readBook();



// обьекты, деструктуризация////////////////////////////////////////////

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('test'); //создание метода обьекта
//     }
// };

// options.makeTest();

//console.log(options.colors.border);

//delete options.name;

// метод перебора for/in
// for (let key in options) {
//     console.log(`свойство ${key} имеет значение ${options[key]}`);
// }

// // свойство name имеет значение test
// // свойство width имеет значение 1024
// // свойство height имеет значение 1024
// // свойство colors имеет значение [object Object]
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }   
// }
// console.log(counter);

// свойство name имеет значение test
// свойство width имеет значение 1024
// свойство height имеет значение 1024
// свойство border имеет значение black
// свойство bg имеет значение red

// console.log(Object.keys(options).length); //отображает все ключи в обьекте, подсчитывает их количество



//деструктуризация обьекта///////////////////



const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('test'); //создание метода обьекта
    }
};

const {border, bg} = options.colors;
console.log(border);

//массивы и псевдомассивы///////////////////////////

const arr = [1, 2, 3, 6, 8];

// arr.pop(); //удаляет последний элемент массива

// arr.push(10); //добавить чтото в конец

// for (let i = 0; i < arr.length; i++) { //перебор массива обычным циклом
//     console.log(arr[i]);
// }

// for (let value of arr) { //перебор методом for..of //можно использовать brake, continueв отличии от forEach
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = 'eeee, errttt, yyyyyy, uuuuuuu, iiiiii';
// const products = str.split(', '); //преображение в массив, разделитель указан в скобках
// products.sort();
// console.log(products);
// //console.log(products.join('; ')); //массив в строку

// const arr2 = [1, 20, 31, 6, 8];
// arr2.sort(compareNum);

// function compareNum(a, b) { //сорт сортирует как стринг, для чисел нужно применять такую функцию
//     return a - b;
// }

// console.log(arr2);

// // передача по ссылке и значению ///////////////////////////////

// let a = 5,
//     b = a;

// b = b + 5;

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //ссылка на существующий обьект, модифицируя копию модифицируется первоначальный обьект
// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);