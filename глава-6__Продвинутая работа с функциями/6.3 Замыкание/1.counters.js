// Независимы ли счётчики?

// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
    let count = 0;
  
    return function() {
        return count++;
    };
}
  
let counter = makeCounter();
let counter2 = makeCounter();
  
console.log( counter() ); // 0
console.log( counter() ); // 1

// тут будут 0 и 1, т.к. при новом вызове makeCounter создаётся новое
// лексическое окружение, следовательно, новая переменная count и новая возвращаемая функция
console.log( counter2() ); // 0
console.log( counter2() ); // 1 