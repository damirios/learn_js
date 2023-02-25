// Две функции - один объект

// Возможно ли создать функции A и B, чтобы new A() == new B()?
const obj = {
    name: 'Damir'
};
function A() {
    return obj;
}
function B() {
    return obj;
}

let a = new A();
let b = new B();

console.log( a === b ); // true, т.к. мы по сути возвращаем один и тот же объект