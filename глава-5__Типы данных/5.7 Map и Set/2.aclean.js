// Отфильтруйте анаграммы

// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

function aclean(arr) {
    const resultMap = new Map();

    for (let word of arr) {
        const sortedWord = word.toLowerCase().split('').sort().join('');
        if (!resultMap.get(sortedWord)) {
            resultMap.set(sortedWord, word);
        }
    }

    return Array.from(resultMap.values());
}