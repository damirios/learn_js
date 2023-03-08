// Вывод односвязного списка в обратном порядке

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

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

function printListReverseCycle(list) {
    let obj = list;
    const values = [];
    
    while (obj !== null) {
        values.push(obj.value);
        obj = obj.next;
    }

    values.reverse().forEach(el => console.log(el));
}

function printListReverseRecursion(list) {
    if (list.next !== null) {
        printListReverseRecursion(list.next);
    }

    console.log(list.value);
}

console.log('start ------------------------------');

let timer = Date.now();
printListReverseCycle(list);
console.log('cycle time, ms: ', Date.now() - timer);

timer = Date.now();
printListReverseRecursion(list);
console.log('recursion time, ms: ', Date.now() - timer);


console.log('end --------------------------------');