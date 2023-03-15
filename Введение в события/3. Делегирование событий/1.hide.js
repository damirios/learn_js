// Спрячьте сообщения с помощью делегирования
// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.
// P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего.

const container = document.querySelector('#container');

container.addEventListener('click', (e) => {
    if (e.target.closest('.remove-button')) {
        const pane = e.target.closest('.pane');
        pane.style.display = 'none';
    };
});