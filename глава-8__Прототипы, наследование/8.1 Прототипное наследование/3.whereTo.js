// Куда будет произведена запись?

// Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat(); // свойство full получит объект перед точкой, т.е. rabbit

console.log(rabbit); // {full: true}
console.log(animal); // {eat: [Function: eat]}