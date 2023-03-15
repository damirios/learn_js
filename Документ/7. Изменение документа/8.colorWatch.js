// Цветные часы с использованием setInterval

let hoursSpan = document.querySelector('span.hours');
let minutesSpan = document.querySelector('span.minutes');
let secondsSpan = document.querySelector('span.seconds');

let interval;

function getTime() {
    const date = new Date();
    
    let hours = date.getHours().toString();
    if (hours.length === 1) {hours = '0' + hours};
    hoursSpan.textContent = hours;

    let minutes = date.getMinutes().toString();
    if (minutes.length === 1) {minutes = '0' + minutes};
    minutesSpan.textContent = minutes;

    let seconds = date.getSeconds().toString();
    if (seconds.length === 1) {seconds = '0' + seconds};
    secondsSpan.textContent = seconds;
    console.log('here');
}

function onStart() {
    if (!interval) {
        interval = setInterval(getTime, 1000);
    }
}

function onStop() {
    clearInterval(interval);
    interval = null;
}