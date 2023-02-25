// Функция pow(x,n)
// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

function pow(x, n) {
    if (n === 1) {
        return x;
    }

    return x * pow(x, n - 1);
}