// Вывод односвязного списка

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
};

// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?


function printListCycle(list) {
    let obj = list;
    
    while (obj !== null) {
        console.log(obj.value);
        obj = obj.next;
    }
}

function printListRecursion(list) {
    console.log(list.value);
    if (list.next === null) {
        return;
    }
    printListRecursion(list.next);
}


console.log('start ------------------------------');

let timer = Date.now();
printListCycle(list);
console.log('cycle time, ms: ', Date.now() - timer);

timer = Date.now();
printListRecursion(list);
console.log('recursion time, ms: ', Date.now() - timer);


console.log('end --------------------------------');