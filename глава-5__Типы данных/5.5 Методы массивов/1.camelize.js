// Переведите текст вида border-left-width в borderLeftWidth

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
    const wordsArray = str.split('-');
    
    return wordsArray.slice(1).reduce((prev, current) => prev + current[0].toUpperCase() + current.slice(1) ,wordsArray[0]);
}