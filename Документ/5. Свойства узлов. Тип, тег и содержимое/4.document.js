// Где в DOM-иерархии "document"?

// 1. Объектом какого класса является document?

// 2. Какое место он занимает в DOM-иерархии?

// 3. Наследует ли он от Node или от Element, или может от HTMLElement?

// ОТВЕТЫ:
// 1.
// console.log(document.constructor.name); // HTMLDocument
// 2.
// console.log(document.constructor.__proto__.name); // Document
// console.log(document.constructor.__proto__.__proto__.name); // Node
// console.log(document.constructor.__proto__.__proto__.__proto__.name); // EventTarget
// 3.
//  Цепочка наследования: HTMLDocument -> Document -> Node -> EventTarget