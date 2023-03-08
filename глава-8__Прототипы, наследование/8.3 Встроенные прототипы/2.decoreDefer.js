// Добавьте функциям декорирующий метод "defer()"

// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
// Например, должно работать так:

// в Function.prototype добавим метод defer, который вызовет this после ms миллисекунд
Function.prototype.defer = function(ms) {
    const savedThis = this;
    return function func(...args) {
        setTimeout(savedThis.bind(savedThis, ...args), ms);
    }
}

function f(a, b) {
    console.log( a + b );
}
  
f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.