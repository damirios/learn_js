// Вывод каждую секунду

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbersInterval(from, to) {
    let i = from;
    const interval = setInterval(() => {
        console.log(i);
        if (i === to) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
}

function printNumbersTimeout(from, to) {
    let i = from;
    const timeout = setTimeout(() => {
        console.log(i);
        i++;
        if (i <= to) {
            setTimeout(printNumbersTimeout, 1000, i, to);
        }
    });
}

printNumbersTimeout(3, 9);
printNumbersInterval(3, 12);