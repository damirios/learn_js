// Очистите элемент

// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

{/* <ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol> */}

{/* <script>
  clear(elem); // очищает список
</script> */}

// РЕШЕНИЕ:
function clear(elem) {
    elem.innerHTML = '';
}