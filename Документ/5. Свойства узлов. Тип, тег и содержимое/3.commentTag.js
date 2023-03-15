// Тег в комментарии

// Что выведет этот код?

{/* <script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script> */}

// ОТВЕТ: 
// body.tagName вернёт BODY (название тега). В итоге внутри тега body будет комментарий:
// <!--BODY-->. Тогда поле data у firstChild вернёт BODY, т.к. первым потомком (узлом) body будет комментарий