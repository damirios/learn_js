// Ошибка в setTimeout

// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.
new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(console.log);

// ОТВЕТ:
// В данном случае catch не выполнится, т.к. ошибка генерируется асинхронно. Если бы не было setTimeout,
// то catch поймал бы ошибку. 