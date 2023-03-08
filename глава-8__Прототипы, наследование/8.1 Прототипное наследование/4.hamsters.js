// Почему наедаются оба хомяка?

// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple"); 
console.log( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple

// ОТВЕТ:
// в строке 23 вызывается функция eat с this = speedy. Функция eat ищем у объекта speedy свойство stomach.
// Т.к. у speedy нет свойства stomach, то движок ищем это свойство в прототипе speedy -> hamster.
// У hamster есть свойство stomach. Оно принимает "apple". И т.к. lazy и speedy оба
// имеют прототипом объект hamster, то и поле stomach у них общее. Поэтому наедаются оба хомяка

// Исправление: каждому хомяку свой желудок
let speedy2 = {
    __proto__: hamster,
    stomach: []
};

let lazy2 = {
    __proto__: hamster,
    stomach: []
};

// Этот хомяк нашёл еду
speedy2.eat("apple"); 
console.log( speedy2.stomach ); // apple

console.log( lazy2.stomach ); // []