// Вычислить сумму чисел до данного

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

function sumCycle(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}


function sumTo(n) {
    if (n === 1) {
        return 1;
    }

    return n + sumTo(n - 1);
}


function sumProgression(n) {
    return n * (n + 1) / 2;
}

console.log('start ------------------------------');

let timer = Date.now();
console.log(sumCycle(9999));
console.log('cycle time, ms: ', Date.now() - timer);
timer = Date.now();
console.log(sumTo(9999));
console.log('recursion time, ms: ', Date.now() - timer);
timer = Date.now();
console.log(sumProgression(9999));
console.log('progression time, ms: ', Date.now() - timer);

console.log('end --------------------------------');