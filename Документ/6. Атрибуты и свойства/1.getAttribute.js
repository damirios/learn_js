// Получите атрибут

// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

// <!DOCTYPE html>
// <html>
// <body>

//   <div data-widget-name="menu">Choose the genre</div>

//   <script>
//     /* your code */
//   </script>
// </body>
// </html>

// РЕШЕНИЕ:
const elem = document.querySelector('[data-widget-name]');
console.log(elem.dataset.widgetName);