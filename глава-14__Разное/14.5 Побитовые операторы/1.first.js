// Побитовый оператор и значение

// Почему побитовые операции в примерах ниже не меняют число? Что они делают внутри?

console.log( 123 ^ 0 ); // 123
console.log( 0 ^ 123 ); // 123
console.log( ~~123 ); // 123

// ОТВЕТ:
// в первых двух случаях побитовый оператор ^ работает так, что он ставит 1, если на этой
// битовой позиции стоит 1 только для одного из двух операндов. Т.к. один из операндов 0, то 
// всегда получаем значение равное второму оператору (11011 ^ 00000 => 11011)

// в третьем примере двойное отрицание приводит к исходному значению (~~1 => 1, ~~0 => 0)