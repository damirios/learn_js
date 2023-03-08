// Сумма с произвольным количеством скобок

// Напишите функцию sum, которая бы работала следующим образом:
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.
const sum = function func(a) {
    let currentSum = a;

    function outputFunc(b) {
        currentSum += b;
        return outputFunc;
    }

    outputFunc.toString = function() {
        return currentSum;
    }

    return outputFunc;
}



console.log(JSON.parse(sum(2)(3)(5)(2)(220)));