// Функция в if

// Посмотрите на код. Какой будет результат у вызова на последней строке?
'use strict'


let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi(); // в строгом режиме будет ошибка, т.к. функция, находящаяся внутри блока,
// недоступна снаружи блока