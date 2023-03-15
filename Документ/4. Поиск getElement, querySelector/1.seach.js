// Поиск элементов

// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.

// РЕШЕНИЯ:
const table = document.getElementById('age-table');
const labels = table.querySelectorAll('label');
const firstTd = table.querySelector('td');
const formWithName = document.querySelector('form[name="search"]');
const firstInput = formWithName.querySelector('input');
const inputs = formWithName.querySelectorAll('input');
const lastInput = inputs[inputs.length - 1];


console.log(lastInput);