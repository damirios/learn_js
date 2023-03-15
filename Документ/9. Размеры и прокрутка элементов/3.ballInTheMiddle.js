// Каковы координаты центра поля?

// Вычислите их и используйте, чтобы поместить мяч в центр поля:

// Элемент должен позиционироваться за счёт JavaScript, а не CSS.
// Код должен работать с любым размером мяча (10, 20, 30 пикселей) и любым размером поля без привязки к исходным значениям.
// P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. 
// Далее будут другие темы и более сложные ситуации, когда JavaScript будет уже точно необходим, это – своего рода «разминка».

const ball = document.querySelector('#ball');
const field = document.querySelector('#field');
// вставить высоту и ширину сюда, если нужно
console.log(field.clientWidth - ball.clientWidth);
const offsetLeft = (field.clientWidth - ball.clientWidth) / 2;
const offsetTop = (field.clientHeight - ball.clientHeight) / 2;
ball.style.left = `${offsetLeft}px`;
ball.style.top = `${offsetTop}px`;

// если проблемы с вычислением высоты и ширины мяча(картинки), то можно их задать вручную
// ball.style.width = '30px';
// ball.style.height = '30px';