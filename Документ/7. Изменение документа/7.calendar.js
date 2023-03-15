// Создайте календарь в виде таблицы

// Напишите функцию createCalendar(elem, year, month).

// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.
// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. 
// У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

function createCalendar(elem, year, month) {
    const days = {
        0: 'пн',
        1: 'вт',
        2: 'ср',
        3: 'чт',
        4: 'пт',
        5: 'сб',
        6: 'вс',
    };

    const table = document.createElement('table');
    const firstRow = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
        const tdFirstRow = document.createElement('th');
        tdFirstRow.textContent = days[i];
        firstRow.append(tdFirstRow);
    }
    table.append(firstRow);

    const firstDayOfMonth = new Date(year, month - 1);
    const lastDayOfMonth = new Date(year, month, 0);
    
    // создаём первую строку (неполная)
    const dayNumber = firstDayOfMonth.getDay();
    const tr = document.createElement('tr');
    for (let i = 1; i < 8; i++) {
        const td = document.createElement('td');
        if (i >= dayNumber) {
            td.textContent = i - dayNumber + 1;
        }
        tr.append(td);
    }
    table.append(tr);


    // создаём все остальные ячейки
    const restDaysNumber = lastDayOfMonth.getDate() - (8 - dayNumber);
    const restWeeksNumber = Math.ceil(restDaysNumber / 7);
    for (let i = 0; i < restWeeksNumber; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const td = document.createElement('td');

            const currentDayNumber = 7 * i + j + (9 - dayNumber);
            if (7 * i + j + (9 - dayNumber) <= lastDayOfMonth.getDate()) {
                td.textContent = currentDayNumber;
            }
            tr.append(td);
        }
        table.append(tr);
    }

    elem.append(table);
}

const container = document.querySelector('.container');
createCalendar(container, 2023, 3);