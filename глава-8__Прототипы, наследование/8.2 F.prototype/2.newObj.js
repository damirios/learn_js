// Создайте новый объект с помощью уже существующего

// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, 
// но хотелось бы создать ещё один объект такого же типа.
// Можем ли мы сделать так?

// let obj2 = new obj.constructor();

// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. 
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.

// ОТВЕТ:
// Зависит от того, какой объект "сидит" в obj.__proto__. Т.е. менялся или не менялся прототип исходного конструктора 
// объекта obj
// ПРИМЕРЫ:
// 1. 
function Animal() {
    this.type = 'bear';
}

const bear = new Animal();
const anotherBear = new bear.constructor();
console.log(bear.type); // bear
console.log(anotherBear.type); // bear

// 2.
function Animal2() {
    this.type = 'bear';
}

Animal2.prototype = {
    type: bird
};

const bear2 = new Animal2();
const anotherBear2 = new bear2.constructor(); // свойство constructor найдётся только у конструктора Object.prototype
// т.к. у bear2 его нет, у Animal2.prototype его нет, а дальше в цепочке идёт Object.prototype 

console.log(bear2.type); // bear
console.log(anotherBear2.type); // undefined