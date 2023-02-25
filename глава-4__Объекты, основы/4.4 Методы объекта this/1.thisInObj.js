// Использование "this" в литерале объекта

// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}
  
let user = makeUser();
  
console.log( user.ref.name ); // Каким будет результат? 
// результатом будет ошибка, типа cannot read property "name" of undefined
// функция вызывается, как функция, а не как метод объекта, поэтому возвращает undefined

