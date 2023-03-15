// Выведите список потомков в дереве

// Есть дерево, организованное в виде вложенных списков ul/li.
// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. 
// Узлы нижнего уровня, без детей – пропускайте.

const listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    const li = listItems[i];
    const count = li.querySelectorAll('li').length;
    if (count) {
        li.firstChild.data += ` [${count}]`;
    }
}