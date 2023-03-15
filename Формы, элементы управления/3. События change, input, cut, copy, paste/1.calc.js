// Депозитный калькулятор

// Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, 
// а затем рассчитать, какая это будет сумма через заданный промежуток времени.

// Любое изменение введённых данных должно быть обработано немедленно.

// Формула:

// initial: начальная сумма денег
// interest: проценты, например, 0.05 означает 5% в год
// years: сколько лет ждать
// let result = Math.round(initial * (1 + interest) ** years);

const calculator = document.forms.calculator;

const table = document.querySelector('#diagram');

const moneyBefore = document.querySelector('#money-before');
const moneyAfter = document.querySelector('#money-after');
const heightAfter = document.querySelector('#height-after');

calculator.money.oninput = calculate;
calculator.months.onchange = calculate;
calculator.interest.oninput = calculate;

function calculate(e) {
    let initialDeposit = +calculator.money.value;
    let durationYears = +calculator.months.value / 12;
    let precentage = +calculator.interest.value / 100;

    const moneyAfterValue = Math.round(initialDeposit * (1 + precentage) ** durationYears);

    moneyBefore.textContent = initialDeposit;
    moneyAfter.textContent = moneyAfterValue
    
    const greenHeight = (moneyAfterValue / initialDeposit) * 100 + 'px';
    heightAfter.style.height = greenHeight;
}