// Сортировка таблицы

// Вот таблица:
{/* <table>
<thead>
  <tr>
    <th>Name</th><th>Surname</th><th>Age</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>John</td><td>Smith</td><td>10</td>
  </tr>
  <tr>
    <td>Pete</td><td>Brown</td><td>15</td>
  </tr>
  <tr>
    <td>Ann</td><td>Lee</td><td>5</td>
  </tr>
  <tr>
    <td>...</td><td>...</td><td>...</td>
  </tr>
</tbody>
</table> */}

// В ней может быть больше строк.
// Напишите код для сортировки по столбцу "name".

function sortTable(sortParam) { // sortParam - строка! Сортировка по числам не предусмотрена. Числа будут сравниваться как строки!
    const table = document.querySelector('table');
    const theads = document.querySelectorAll('thead tr th');
    
    let colNumber = 0;
    for (let i = 0; i < theads.length; i++) {
        const th = theads[i];
        if (th.textContent.toLowerCase() === sortParam.toLowerCase() ) {
            colNumber = i;
            break;
        }
    }

    const rowsArray = Array.from(table.rows).slice(1); // убираем строку с названиями полей
	const sortedRows = rowsArray.sort((row1, row2) => { // сортируем по нужному столбцу
		if (row1.cells[colNumber].textContent > row2.cells[colNumber].textContent) {
			return 1;
		} else {
			return -1;
		}
	});

	table.tBodies[0].append(...sortedRows); // корректно вставляем отсортированные строки в таблицу
}

sortTable('name');