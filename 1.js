"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/
function lines(num) {
    for (let index = 0; index < num; index++) {
        if (index === 0) {
            console.log(`${index} – это ноль`);
        } else if (index % 2) {
            console.log(`${index} – нечетное число`);
        } else {
            console.log(`${index} – четное число`);
        }
    }
}

lines(11);
