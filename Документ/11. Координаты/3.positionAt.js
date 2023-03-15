// Покажите заметку около элемента (абсолютное позиционирование)

// Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство 
// position:absolute вместо position:fixed.

// Это предотвратит расхождение элементов при прокрутке страницы.

// Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, 
// добавьте стиль элементу <body style="height: 2000px">.

function positionAt(anchor, position, elem) {
    const anchorPositionData = getCoords(anchor);

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