// Создайте калькулятор при помощи конструктора, new Calculator

// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );

function Calculator() {
    this.read = function() {
        this.a = +prompt("Первое число: ", 0);
        this.b = +prompt("Второе число: ", 0);
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
}