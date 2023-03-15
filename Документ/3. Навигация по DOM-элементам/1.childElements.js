// Дочерние элементы в DOM

// Для страницы:
<html>
<body>
    <div>Пользователи:</div>
    <ul>
        <li>Джон</li>
        <li>Пит</li>
    </ul>
</body>
</html>

// Напишите код, как получить…
// 1. элемент <div>?
// 2. <ul>?
// 3. второй <li> (с именем Пит)?

// РЕШЕНИЯ:
// 1.
document.body.children[0];
document.body.firstElementChild;

// 2.
document.body.children[1];
document.body.lastElementChild;
document.body.firstElementChild.nextElementSibling;

// 3. (для каждого из приведённых 3-х способов доступа к <ul> имеем по 3 способа доступа ко второму <li>.
// приведу примеры лишь для <ul>, полученного через document.body.children[1]):
document.body.children[1].children[1];
document.body.children[1].lastElementChild;
document.body.children[1].firstElementChild.nextElementSibling;