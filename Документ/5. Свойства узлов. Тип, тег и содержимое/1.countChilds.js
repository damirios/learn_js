// Считаем потомков
// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка <li>:

// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

const listElements = document.querySelectorAll('li');

for (let i = 0; i < listElements.length; i++) {
    const li = listElements[i];
    const count = li.querySelectorAll('li').length;
    let text = li.firstChild.data.trim();
    alert(`${text}: ${count}`);
}