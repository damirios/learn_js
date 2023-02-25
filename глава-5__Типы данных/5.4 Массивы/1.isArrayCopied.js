// Скопирован ли массив?

// Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); // ?

// Этот код выведет 4, т.к. мы скопировали ссылки и shoppingCart и fruits ссылаются на один и тот же массив