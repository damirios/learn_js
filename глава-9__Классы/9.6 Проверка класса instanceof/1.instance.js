// Странный instanceof

// Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B ); // true

// ОТВЕТ:
// т.к. мы установили A.prototype = B.prototype = {}, то это значит, что,
// a.__proto__ === A.prototype === B.prototype. instanceof вернёт true, если в цепочке прототипов есть B.prototype,
// как в нашем случае