// Спрятать себя
// Создайте кнопку, которая будет скрывать себя по нажатию.

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    button.style.display = 'none';
});