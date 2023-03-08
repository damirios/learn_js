// Объект счётчика

// Здесь объект счётчика создан с помощью функции-конструктора.

// Будет ли он работать? Что покажет?

function Counter() {
    let count = 0;
  
    this.up = function() {
        return ++count;
    };

    this.down = function() {
        return --count;
    };
}
  
let counter = new Counter();

// у функции, доступных через методы объекта counter - общее лексическое окружение,
// т.к. они созданы одним вызовом конструктора new Counter. Значит, и переменная count - общая
console.log( counter.up() ); // 1
console.log( counter.up() ); // 2
console.log( counter.down() ); // 1