// Работа с прототипами

// В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
  
console.log( rabbit.jumps ); // true | берём из объекта rabbit

delete rabbit.jumps;

console.log( rabbit.jumps ); // null | берём из объекта animal

delete animal.jumps;

console.log( rabbit.jumps ); // undefined | свойства jumps нет ни в rabbit, ни в animal