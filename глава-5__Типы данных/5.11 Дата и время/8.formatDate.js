// Форматирование относительной даты

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

// Например:
// console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// console.log( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
    const now = new Date();
    
    if (now - date < 1000) return "прямо сейчас";
    if (now - date < 60 * 1000) return `${Math.floor((now - date) / 1000)} сек. назад`; 
    if (now - date < 60 * 60 * 1000) return `${Math.floor((now - date) / 60000)} мин. назад`;
    
    let newDate = date.getDate().toString();
    if (newDate.length === 1) newDate = '0' + newDate;

    let newMonth = date.getMonth() + 1;
    if (newMonth.toString().length === 1) newMonth = '0' + newMonth.toString();

    let newYear = (date.getFullYear() - 2000).toString();
    if (newYear.length === 1) newYear = '0' + newYear;

    let newHours = date.getHours().toString();
    if (newHours.length === 1) newHours = '0' + newHours;

    let newMinutes = date.getMinutes().toString();
    if (newMinutes.length === 1) newMinutes = '0' + newMinutes;

    return `${newDate}.${newMonth}.${newYear} ${newHours}:${newMinutes}`;
}
