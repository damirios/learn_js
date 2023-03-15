// Мышь, управляемая клавиатурой

// Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать:

// P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.

// P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом.

const mouse = document.querySelector('#mouse');
mouse.tabIndex = 1;

mouse.onfocus = function(e) {
    mouse.style.position = 'fixed';
    mouse.addEventListener('keydown', keyDownHandler);
}

function keyDownHandler(event) {
    const mousePosition = mouse.getBoundingClientRect();
    if (event.code === 'ArrowRight') {
        mouse.style.left = mousePosition.x + 20 + 'px';
    } else if (event.code === 'ArrowLeft') {
        mouse.style.left = mousePosition.x - 20 + 'px';
    } else if (event.code === 'ArrowUp') {
        mouse.style.top = mousePosition.y - 20 + 'px';
    } else if (event.code === 'ArrowDown') {
        mouse.style.top = mousePosition.y + 20 + 'px';
    }
}

mouse.onblur = function(e) {
    mouse.removeEventListener('keydown', keyDownHandler);
}