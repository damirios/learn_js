// В чём отличие CSS-свойств width и clientWidth

// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
// Укажите хотя бы 3 отличия, лучше – больше.

// ОТВЕТ:
// 1. getComputedStyle(elem).width возвращает строку вида '10px', а elem.clientWidth число - 10;
// 2. getComputedStyle(elem).width может вернуть значение 'auto' (например, для строчного элемента);
// 3. В некоторых браузерах ширина полосы скрола вычитается из getComputedStyle(elem).width, а в других не вычитается,
// а elem.clientWidth всегда возвращает ширину за вычетом ширины скрола;
// 4. Значение, возвращаемое getComputedStyle(elem).width, зависит от того, как задано значение box-sizing,
// а elem.clientWidth не зависит.