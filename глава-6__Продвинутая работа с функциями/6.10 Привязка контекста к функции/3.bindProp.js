// Свойство функции после bind

// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.


function sayHi() {
    console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log( bound.test ); // undefined
// bind возвращает новую функцию (объект), у этого объекта уже не будет поля test. Поэтому undefined