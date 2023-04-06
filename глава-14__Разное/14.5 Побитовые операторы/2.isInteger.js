// Проверка, целое ли число

// Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.

// Например:

console.log( isInteger(1) ); // true
console.log( isInteger(1.5) ); // false
console.log( isInteger(-0.5) ); // false

function isInteger(number) {
    return (number ^ 0) === number; // т.к. при операции number ^ 0 дробная часть отбрасывается, и мы получаем само значение number,
    // но уже без дробной части. И сравниваем с исходным числом
}