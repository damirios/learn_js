// Сортируемая таблица

// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.
// Каждый элемент <th> имеет атрибут data-type:

// В примере выше первый столбец содержит числа, а второй – строки. 
// Функция сортировки должна это учитывать, ведь числа сортируются иначе, чем строки.

// Сортировка должна поддерживать только типы "string" и "number".
// P.S. Таблица может быть большой, с любым числом строк и столбцов.

const table = document.querySelector('#grid');

table.addEventListener('click', (e) => {
    const clickedTh = e.target.closest('th');
    if (clickedTh) {
        const allThs = table.querySelectorAll('th');
        let colNumber = 0; // номер столбца, по которому кликнули
        for (let i = 0; i < allThs.length; i++) {
            const th = allThs[i];
            if (clickedTh === th) {
                break;
            }
            colNumber++;
        }

        const sortType = clickedTh.dataset.type;
        const rowsArray = Array.from(table.rows).slice(1); // убираем строку заголовков
        rowsArray.sort((a, b) => {
            const valueA = a.cells[colNumber].textContent;
            const valueB = b.cells[colNumber].textContent;
            if (sortType === 'string') {
                return valueA < valueB ? -1 : 1;
            } else if (sortType === 'number') {
                return +valueA < +valueB ? -1 : 1;
            }
        });

        const tbody = table.querySelector('tbody');
        tbody.append(...rowsArray);
    }
});