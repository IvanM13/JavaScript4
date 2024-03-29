"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const randit = function(arr){
    for (let index = 0; index < 5; index++) {
        arr[index] = Math.floor(Math.random() * 10);
    }
    return arr;
}

const sumArray = arr => arr.reduce((x, y) => x + y);

const minimal = arr => Math.min(...arr);

const massThree = function(arr){
    const result = [];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === 3){
            result.push(index);
        }
    }
    return result;
}

const mass = [];
const result = randit(mass);
console.log(`Массив - [${result}]`);
console.log(`Сумма массива - [${sumArray(result)}]`);
console.log(`Минимальное число массива - [${minimal(result)}]`);
console.log(`Индексы содержащие число 3 - [${massThree(result)}]`);