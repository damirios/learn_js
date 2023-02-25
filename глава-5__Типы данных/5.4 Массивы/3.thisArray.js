// Вызов в контексте массива

// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
    console.log( this );
});

arr[2](); // ?

// Ответ: выведет элементы массива через запятую, т.к. функция вызывается как метод объекта (массива):
// ["a", "b", function() {}]