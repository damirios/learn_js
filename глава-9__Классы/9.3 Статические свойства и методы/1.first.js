// Класс расширяет объект?

// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.

// Пример:

class Rabbit {
    constructor(name) {
        this.name = name;
    }
}
  
let rabbit = new Rabbit("Rab");
  
// метод hasOwnProperty от Object.prototype
console.log( rabbit.hasOwnProperty('name') ); // true

// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?

// В чем разница?

// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit2 extends Object { // при таком объявлении у нас будет Rabbit2.__proto__ === Object (получим доступ к статическим методам Object)
    constructor(name) {
        super(); // забыли вызвать super()
        this.name = name;
    }
}

let rabbit2 = new Rabbit2("Кроль");

console.log( rabbit2.hasOwnProperty('name') ); // Ошибка