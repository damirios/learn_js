// Создайте дерево из объекта

// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
// Например:

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
  
    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },

        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

// Синтаксис:
// let container = document.getElementById('container');
// createTree(container, data); // создаёт дерево в контейнере

// Выберите один из двух способов решения этой задачи:

// 1. Создать строку, а затем присвоить через container.innerHTML.
// 2. Создавать узлы через методы DOM.

// Если получится – сделайте оба.
// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.

// РЕШЕНИЕ:
// 1. ============================================================
function getInnerHTMLString(obj) {
    const keys = Object.keys(obj);
    let outputString = '<ul>';

    if (keys.length > 0) {
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = obj[key];
            outputString += `<li>${key}</li>`;
            outputString += getInnerHTMLString(value);
        }
    }
    
    outputString += '</ul>';
    return outputString;
}
function createTreeStr(container, data) {
    container.innerHTML = getInnerHTMLString(data);
}

// 2. ============================================================
function getDomElement(obj) {
    const keys = Object.keys(obj);
    let outerUl = document.createElement('ul');

    if (keys.length > 0) {
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = obj[key];

            const li = document.createElement('li');
            li.textContent = key;
            outerUl.append(li);

            outerUl.append(getDomElement(value));
        }
    }
    
    return outerUl;
}
function createTreeDom(container, data) {
    container.append(getDomElement(data));
}

const containerStr = document.querySelector('.container_string');
createTreeStr(containerStr, data);

const containerDom = document.querySelector('.container_dom');
createTreeDom(containerDom, data);