// Добавьте пункт к выпадающему списку
// Имеется <select>:
{/* <select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select> */}

// Используя JavaScript:

// Выведите значение и текст выбранного пункта.
// Добавьте пункт: <option value="classic">Классика</option>.
// Сделайте его выбранным.

const genres = document.querySelector('#genres');

console.log(genres.options[genres.selectedIndex].value); // значение выбранного пункта
console.log(genres.options[genres.selectedIndex].text); // текст выбранного пункта

const newOption = new Option('Классика', 'classic'); // добавляем пункт
genres.append(newOption);

newOption.selected = true; // делаем выбранным
console.log(genres.options[genres.selectedIndex].text); // Классика
