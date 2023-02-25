// Случайное целое число от min до max

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

console.log(randomInt(2, 7));
console.log(randomInt(2, 7));
console.log(randomInt(2, 7));
