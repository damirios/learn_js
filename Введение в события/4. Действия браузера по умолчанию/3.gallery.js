// Галерея изображений

// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
// P.S. Используйте делегирование.

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
    const clickedLink = e.target.closest('a');
    if (clickedLink) {
        e.preventDefault();
        const newSrc = clickedLink.getAttribute('href');
        largeImg.src = newSrc;
    }
});