// Редактируемый div

// Создайте <div>, который превращается в <textarea>, если на него кликнуть.

{/* <textarea> позволяет редактировать HTML в элементе <div>. */}

{/* Когда пользователь нажимает Enter или переводит фокус, <textarea> 
превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>. */}

const view = document.querySelector('#view');
let textarea;

view.onclick = editable;

function editable(e) {
    const innerHtml = view.innerHTML;
    textarea = document.createElement('textarea');
    textarea.innerHTML = innerHtml;
    textarea.classList.add('edit');

    textarea.onblur = notEditable;
    textarea.onkeydown = function (event) {
        if (event.key === 'Enter') {
            textarea.blur();
        }
    }

    view.replaceWith(textarea);
    textarea.focus();
}

function notEditable(e) {
    const value = textarea.value;
    view.innerHTML = value;

    textarea.replaceWith(view);
}