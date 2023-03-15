// Создайте список

// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.

// РЕШЕНИЕ:
function createListItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
}

function insertToDOM(nodeElement) {
    const list = document.querySelector('ul#list');
    list.append(nodeElement);
}

let text = prompt('Введите новый пункт списка: ');
do {
    const listItem = createListItem(text);
    insertToDOM(listItem);
    text = prompt('Введите новый пункт списка: ');
} while(text)