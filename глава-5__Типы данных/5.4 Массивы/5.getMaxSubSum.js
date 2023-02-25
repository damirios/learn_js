// Подмассив наибольшей суммы

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

function getMaxSubSum(arr) {
    let max = 0;
    let current = 0;

    for (let num of arr) {
        current += num;
        if (current > max) {
            max = current;
        } else {
            if (current < 0) {
                current = 0;
            }
        }
    }

    return Math.max(max, current);
}


console.log(getMaxSubSum([-1, 2, 3, -9]) == 5 );
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6 );
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11 );
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3 );
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100 );
console.log(getMaxSubSum([1, 2, 3]) == 6 );