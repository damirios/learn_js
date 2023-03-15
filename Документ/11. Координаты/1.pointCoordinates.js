// Найдите координаты точек относительно окна браузера

// В ифрейме ниже располагается документ с зелёным «полем».
// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
// В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.

// Ваш код должен при помощи DOM получить четыре пары координат:

// верхний левый, внешний угол (это просто).
// нижний правый, внешний угол (тоже просто).
// верхний левый, внутренний угол (чуть сложнее).
// нижний правый, внутренний угол (есть несколько способов, выберите один).
// Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

// P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.

const field = document.querySelector('#field');

const data = field.getBoundingClientRect(); 

// верхний левый, внешний угол 
const coordsTopLeftOuter = [data.left, data.top];
console.log(coordsTopLeftOuter);
// нижний правый, внешний угол
const coordsBottomRightOuter = [data.right, data.bottom];
console.log(coordsBottomRightOuter);
// верхний левый, внутренний угол
const coordsTopLeftInner = [data.left + field.clientLeft, data.top + field.clientTop];
console.log(coordsTopLeftInner);
// нижний правый, внутренний угол
const coordsBottomRightInner = [data.left + field.clientLeft + field.clientWidth, 
    data.top + field.clientTop + field.clientHeight];
console.log(coordsBottomRightInner);

