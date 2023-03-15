// Раскрывающееся дерево

// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:

// Требования:
// Использовать только один обработчик событий (применить делегирование)
// Клик вне текста заголовка (на пустом месте) ничего делать не должен.

const tree = document.querySelector('#tree');

tree.addEventListener('click', (e) => {
    const clickedSpan = e.target.closest('span');
    if (clickedSpan) {
        const listItemOuter = clickedSpan.closest('li');
        const listInner = listItemOuter.querySelector('ul');
        if (listInner) {
            listInner.classList.toggle('hidden');
        }
    }
});