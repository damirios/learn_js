// Поведение "подсказка"

// Напишите JS-код, реализующий поведение «подсказка».
// При наведении мыши на элемент с атрибутом data-tooltip, 
// над ним должна показываться подсказка и скрываться при переходе на другой элемент.
// Пример HTML с подсказками:
{/* <button data-tooltip="эта подсказка длиннее, чем элемент">Короткая кнопка</button>
<button data-tooltip="HTML<br>подсказка">Ещё кнопка</button> */}

// В этой задаче мы полагаем, что во всех элементах с атрибутом data-tooltip – только текст. То есть, в них нет вложенных тегов (пока).

// Детали оформления:

// Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
// Подсказка должна быть, по возможности, посередине элемента.
// Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена, 
// если нельзя показать сверху – показывать снизу элемента.
// Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
// Для решения вам понадобятся два события:

// mouseover срабатывает, когда указатель мыши заходит на элемент.
// mouseout срабатывает, когда указатель мыши уходит с элемента.
// Примените делегирование событий: установите оба обработчика на элемент document, 
// чтобы отслеживать «заход» и «уход» курсора на элементы с атрибутом data-tooltip и управлять подсказками с их же помощью.
// После реализации поведения – люди, даже не знакомые с JavaScript смогут добавлять подсказки к элементам.

// P.S. В один момент может быть показана только одна подсказка.

document.addEventListener('mouseover', (e) => {
    const elem = e.target.closest('[data-tooltip]');
    if (elem) {
        const elemData = elem.getBoundingClientRect()
        const elemOffsetTop = elemData.top;
        const elemHeight = elemData.height;
        const margin = 5;

        const tip = document.createElement('div');
        tip.style.position = 'fixed';
        tip.style.border = '2px solid #777';
        tip.style.borderRadius = '5px';
        tip.style.padding = '5px';
        tip.style.backgroundColor = '#222';
        tip.style.color = '#fff';
        tip.style.left = elemData.left + 'px';
        tip.innerHTML = elem.dataset.tooltip;
        tip.dataset.tip = true;
        document.body.append(tip);
        const tipHeight = tip.getBoundingClientRect().height;
        if (elemOffsetTop < margin + tipHeight) { // если не влезает вверх, ставим вниз
            tip.style.top = elemOffsetTop + elemHeight + margin + 'px';
        } else {
            tip.style.top = elemOffsetTop - tipHeight - margin + 'px';
        }
    }
});

document.addEventListener('mouseout', (e) => {
    const elem = e.target.closest('[data-tooltip]');
    if (elem) {
        const tip = document.querySelector('[data-tip]');
        tip.remove();
    }
});