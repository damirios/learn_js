// Создать раскрывающееся меню

// Создать меню, которое по нажатию открывается либо закрывается:

// P.S. HTML/CSS исходного документа можно и нужно менять.

const button = document.querySelector('#button');
const arrowRight = document.querySelector('#arrow_right');
const arrowDown = document.querySelector('#arrow_down');
const dropDownList = document.querySelector('#drop-down');

button.addEventListener('click', () => {
    arrowDown.classList.toggle('hidden');
    arrowRight.classList.toggle('hidden');
    dropDownList.classList.toggle('hidden');
});