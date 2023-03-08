// Изменяем "prototype"

// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
// Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

console.log( rabbit.eats ); // true

// 1. Добавим одну строчку (выделенную в коде ниже). Что вызов console.log покажет нам сейчас?
function Rabbit2() {}
Rabbit2.prototype = {
    eats: true
};

let rabbit2 = new Rabbit2();

Rabbit2.prototype = {};

console.log( rabbit2.eats ); // true | т.к. в момент вызова new Rabbit2() в Rabbit2.prototype есть свойство eats: true

// 2. …А если код такой (заменили одну строчку)?
function Rabbit3() {}
Rabbit3.prototype = {
    eats: true
};

let rabbit3 = new Rabbit3();

Rabbit3.prototype.eats = false;

console.log( rabbit3.eats ); // false | напрямую меняем поле объекта Rabbit3.prototype

// 3. Или такой (заменили одну строчку)?
function Rabbit4() {}
Rabbit4.prototype = {
    eats: true
};

let rabbit4 = new Rabbit4();

delete rabbit4.eats;

console.log( rabbit4.eats ); // true | команда delete влияет только на сам объект, но не на прототип объекта

// 4. Или, наконец, такой:
function Rabbit5() {}
Rabbit5.prototype = {
    eats: true
};

let rabbit5 = new Rabbit5();

delete Rabbit5.prototype.eats;

console.log( rabbit5.eats ); // undefined | напрямую удаляем поле eats из объекта Rabbit5.prototype

// ОТВЕТЫ: 
// 1. true
// 2. true
// 3. false
// 4. true
// 5. undefined