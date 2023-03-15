// Редактирование TD по клику

// Сделайте ячейки таблицы редактируемыми по клику.

// По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. 
// Изменение размера ячейки должно быть отключено.
// Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
// Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», 
// клики по другим ячейкам игнорируются.
// Таблица может иметь множество ячеек. Используйте делегирование событий.

const table = document.querySelector('#bagua-table');
let td;
let textarea;
let buttonBox;
let innerHTML;

table.addEventListener('click', (e) => {
    const clickedTd = e.target.closest('td');
    const clickedButton = e.target.closest('button');
    if (clickedTd && !textarea) { // если кликнули по td и textarea не равно null или undefined (т.е. уже не редактируется)
        td = clickedTd;
        innerHTML = clickedTd.innerHTML;
        const clickedTdCoords = clickedTd.getBoundingClientRect();
    
        textarea = document.createElement('textarea');
        textarea.classList.add('edit-area');
        textarea.style.height = clickedTdCoords.height + 'px';
        textarea.style.width = clickedTdCoords.width + 'px';
        textarea.value = innerHTML;

        clickedTd.innerHTML = '';
        clickedTd.style.padding = '0';
        clickedTd.append(textarea);

        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.dataset.status = 'ok';
        const cancelButton = document.createElement('button');
        cancelButton.dataset.status = 'cancel';
        cancelButton.textContent = 'Cancel';

        buttonBox = document.createElement('div');
        buttonBox.style.position = 'absolute';
        buttonBox.append(okButton);
        buttonBox.append(cancelButton);

        clickedTd.append(buttonBox);
    } else if (clickedButton) { // если кликнули по кнопке
        const status = clickedButton.dataset.status;

        if (status === 'ok') {
            td.innerHTML = textarea.value;
        } else if (status === 'cancel') {
            td.innerHTML = innerHTML;
        }

        textarea.remove();
        textarea = null;
    }
});