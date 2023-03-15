// Модальное диалоговое окно с формой

// Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

// Пользователь должен ввести что-то в текстовое поле и нажать Enter или кнопку «OK», после чего должна вызываться функция callback(value) со значением поля.
// Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
// В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

// Требования:

// Форма должна быть в центре окна.
// Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно, пока пользователь не закроет его.
// При показе формы, фокус должен находиться сразу внутри <input>.
// Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы.
// Пример использования:



// P.S. HTML/CSS исходного кода к этой задаче содержит форму с фиксированным позиционированием, но вы должны сделать её модальной.

showButton.addEventListener('click', (e) => {
    showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
        alert(value);
    });
});

function showPrompt(html, callback) {
    const blurBox = document.querySelector('.blur-box');
    const promptContainer = document.querySelector('#prompt-form-container');
    const message = document.querySelector('#prompt-message');

    blurBox.style.display = 'block';
    promptContainer.style.display = 'block';
    message.innerHTML = html;

    const form = promptContainer.querySelector('#prompt-form');
    const input = form.text;
    input.focus();

    form.onsubmit = function (e) {
        let text = form.text.value;
        if (text === '' ) {
            return false;
        }

        completeHandler(text);
    }

    form.cancel.onclick = function(e) { // если кликнули по отмене, то закрываем с null
        completeHandler(null);
    }
    document.onkeydown = function(e) { // если нажали Escape, то закрываем с null
        if (e.key === 'Escape') {
            completeHandler(null);
        }
    }

    // табуляция не должна покидать форму
    const lastElem = form.elements[form.elements.length - 1];
    const firstElem = form.elements[0];
    firstElem.onkeydown = function(e) {
        if (e.key === 'Tab' && e.shiftKey) {
            lastElem.focus();
            return false;
        }
    }
    lastElem.onkeydown = function(e) {
        if (e.key === 'Tab' && !e.shiftKey) {
            firstElem.focus();
            return false;
        }
    }

    function completeHandler(text) {
        blurBox.style.display = 'none';
        promptContainer.style.display = 'none';

        callback(text);
    }
}

