// Передвиньте мяч по полю

// Пусть мяч перемещается при клике на поле, туда, куда был клик
// Требования:

// Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;
// Заметки:

// Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.

const field = document.querySelector('#field');
const ball = document.querySelector('#ball');

field.style.position = 'relative';
ball.style.left = '0px';
ball.style.top = '0px';
ball.style.position = 'absolute';
ball.style.transition = 'all 0.6s ease 0.1s';

field.addEventListener('click', (e) => {
    const clickedX = e.clientX - field.offsetLeft - field.clientLeft;
    const clickedY = e.clientY - field.offsetTop - field.clientTop;
    const maxLeft = field.clientWidth - ball.clientWidth;
    const maxTop = field.clientHeight - ball.clientHeight;
    const minLeft = 0 + ball.clientWidth / 2;
    const minTop = 0 + ball.clientHeight / 2;

    let leftPX = '';
    let topPX = '';
    if (clickedX > maxLeft) {
        leftPX = maxLeft + 'px';
    } else if (clickedX < minLeft) {
        leftPX = 0 + 'px';
    } else {
        leftPX = clickedX - ball.clientWidth / 2 + 'px';
    }

    if (maxTop < clickedY - ball.clientHeight / 2) {
        topPX = maxTop + 'px';
    } else if (clickedY < minTop) {
        topPX = 0 + 'px';
    } else {
        topPX = clickedY - ball.clientHeight / 2 + 'px';
    }

    ball.style.left = leftPX;
    ball.style.top = topPX;
});