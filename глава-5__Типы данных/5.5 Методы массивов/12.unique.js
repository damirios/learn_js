// Оставить уникальные элементы массива

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

function unique(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if ( !output.includes(arr[i]) ) {
            output.push(arr[i]);
        }
    }

    return output;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O

