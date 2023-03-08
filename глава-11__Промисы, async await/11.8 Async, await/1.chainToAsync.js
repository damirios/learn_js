// Перепишите, используя async/await

// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
function loadJson(url) {
    return fetch(url)
        .then(response => {
        if (response.status == 200) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    })
}

async function loadJsonAsync(url) {
    const result = await fetch(url);
    if (result.status == 200) {
        const resultJSON = await result.json();
        return resultJSON;
    } 

    throw new Error(result.status);
}
  
loadJsonAsync('no-such-user.json') // (3)
.catch(console.log); // Error: 404