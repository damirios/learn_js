// Поймайте переход по ссылке

// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, 
// действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

// Детали:

// Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. 
// Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.

const contents = document.querySelector('#contents');

contents.onclick = (e) => {
    const clickedLink = e.target.closest('a');
    if (clickedLink) {
        // e.preventDefault();
        const address = clickedLink.getAttribute('href');
        const answer = confirm(`Leave for ${address}? `);

        if (!answer) {
            return false;
        }
    }
};