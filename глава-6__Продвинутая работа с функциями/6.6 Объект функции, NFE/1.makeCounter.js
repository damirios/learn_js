// Установка и уменьшение значения счётчика
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. 
// Или сделать два варианта решения: и так, и так.
function makeCounter() {

    const counter = function() {
       return counter.count++;
    };
  
    counter.count = 0;
    counter.set = function(val) {
        counter.count = val;
    }

    counter.decrease = function() {
        counter.count--;
    }

    return counter;
}
  
let counter = makeCounter();

counter.count = 10;
console.log( counter() ); // 10
counter.decrease();
console.log(counter());
counter.set(1);
console.log(counter());

