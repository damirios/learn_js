// Вызовите async–функцию из "обычной"

// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}
  
function f() {
    wait().then(result => console.log(result));
}

f();