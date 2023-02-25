// Максимальная зарплата

// У нас есть объект salaries с зарплатами:
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
    let top = 0;
    let topName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > top) {
            top = salary;
            topName = name;
        }
    }
    
    return topName;
}