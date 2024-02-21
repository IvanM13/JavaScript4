"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

const rock = function(num) {
    for (let index = num; index > 0; index--) {
        console.log("x".repeat(num - index));
    }
}

rock(20);