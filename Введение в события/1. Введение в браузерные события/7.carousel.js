// Карусель

// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.
// P.S. В этой задаче разработка структуры HTML/CSS составляет 90% решения.

const image = document.querySelector('.display ul li img');
const list = document.querySelector('.display ul');

const maxShiftNumber = document.querySelectorAll('.display ul li').length - 3; // общее число картинок - видимое число картинок

const prevButton = document.querySelector('.arrow_left');
const nextButton = document.querySelector('.arrow_right');

let x = 0;
let shift = maxShiftNumber; // от 0 до maxShiftNumber
prevButton.addEventListener('click', () => {
    if (shift > 0) {
        x -= 130;
        shift -= 1;
        list.style.transform = `translateX(${x}px)`;
    }
});

nextButton.addEventListener('click', () => {
    if (shift < maxShiftNumber) {
        x += 130;
        shift += 1;
        list.style.transform = `translateX(${x}px)`;
    }
});