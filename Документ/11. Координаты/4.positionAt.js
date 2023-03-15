// Расположите заметку внутри элемента (абсолютное позиционирование)

// Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): 
// научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

// Новые значения для аргумента position:

// top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
// top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.
// Например:

// показывает заметку поверх цитаты
// positionAt(blockquote, "top-out", note);

// показывает заметку внутри цитаты вблизи верхнего края элемента
// positionAt(blockquote, "top-in", note);

function positionAt(anchor, position, elem) {
    const anchorPositionData = getCoords(anchor);

    if (position === 'top-out') {
        elem.style.left = anchorPositionData.left + 'px';
        elem.style.top = anchorPositionData.top - elem.offsetHeight + 'px';
    } else if (position === 'right-out') {
        elem.style.left = anchorPositionData.left + anchor.offsetWidth + 'px';
        elem.style.top = anchorPositionData.top + 'px';
    } else if (position === 'bottom-out') {
        elem.style.left = anchorPositionData.left + 'px';
        elem.style.top = anchorPositionData.top + anchor.offsetHeight + 'px';
    } else if (position === 'top-in') {
        elem.style.left = anchorPositionData.left + 'px';
        elem.style.top = anchorPositionData.top + 'px';
    } else if (position === 'right-in') {
        elem.style.left = anchorPositionData.left + anchor.offsetWidth - elem.offsetWidth + 'px';
        elem.style.top = anchorPositionData.top + 'px';
    } else if (position === 'bottom-in') {
        elem.style.left = anchorPositionData.left + 'px';
        elem.style.top = anchorPositionData.top + anchor.offsetHeight - elem.offsetHeight + 'px';
    }
}

// получаем координаты элемента в контексте документа
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
}