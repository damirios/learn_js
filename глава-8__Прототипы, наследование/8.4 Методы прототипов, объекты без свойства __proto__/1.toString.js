// Добавьте toString в словарь

// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. 
// Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

// Вот так это должно работать:
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join(',');
        },
        writable: false,
        enumerable: false,
        configurable: false
    }
});

// ваш код, который добавляет метод dictionary.toString


// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary.toString()); // "apple,__proto__" // toString вызван явно, т.к. console.log не вызывает преобразование в строку
// в отличии от alert