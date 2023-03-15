// Узнать ширину полосы прокрутки

// Напишите код, который возвращает ширину стандартной полосы прокрутки.
// Для Windows она обычно колеблется от 12px до 20px. Если браузер не выделяет место под полосу прокрутки 
// (так тоже бывает, она может быть прозрачной над текстом), тогда значение может быть 0px.
// P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого.

const div = document.createElement('div');

div.style.width = "300px";
div.style.height = "300px";
div.style.backgroundColor = '#ccc';
div.style.overflowY = "scroll";

document.body.append(div);
const scrollWidth = div.offsetWidth - div.clientWidth;

console.log(scrollWidth); // 17
