// Покажите заметку рядом с элементом

// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости 
// от значения свойства position рядом с элементом anchor.

// Аргумент position – строка с одним из 3 значений:

// "top" – расположить elem прямо над anchor
// "right" – расположить elem непосредственно справа от anchor
// "bottom" – расположить elem прямо под anchor
// Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. 
// Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.

function positionAt(anchor, position, elem) {
    const anchorPositionData = anchor.getBoundingClientRect();

    if (position === 'top') {
        elem.style.left = anchorPositionData.left + 'px';
        elem.style.top = anchorPositionData.top - elem.offsetHeight + 'px';
    } else if (position === 'right') {
        elem.style.left = anchorPositionData.left + anchor.offsetWidth + 'px';
        elem.style.top = anchorPositionData.top + 'px';
    } else if (position === 'bottom') {
        elem.style.left = anchorPositionData.left + 'px';
        elem.style.top = anchorPositionData.top + anchor.offsetHeight + 'px';
    }
}