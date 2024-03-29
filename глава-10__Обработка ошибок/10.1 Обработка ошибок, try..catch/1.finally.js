// Finally или просто код?

// Сравните два фрагмента кода.

// 1. Первый использует finally для выполнения кода после try..catch:

// try {
//   начать работу
//   работать
// } catch (e) {
//   обработать ошибку
// } finally {
//   очистить рабочее пространство
// }

// Второй фрагмент просто ставит очистку после try..catch:

// try {
//     начать работу
//     работать
//   } catch (e) {
//     обработать ошибку
//   }
  
// очистить рабочее пространство

// Нам определённо нужна очистка после работы, неважно возникли ошибки или нет.

// Есть ли здесь преимущество в использовании finally или оба фрагмента кода одинаковы? 
// Если такое преимущество есть, то дайте пример, когда оно проявляется.


// ОТВЕТ:
// Разница появится в случае, если внутри блока try catch будет выполнен, например, выход из функции.
// Если блок try catch внутри функции, то finally выполнится при любом выходе из функции, то код после finally
// не выполнится, если в блоке try будет return или ошибка.