// Скрыть элемент по нажатию кнопки

// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

const text = document.querySelector('#text');

const hider = document.querySelector('#hider');
hider.addEventListener('click', () => {
    text.style.display = 'none';
});