let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;
let lapNumber = 1;

const display = document.getElementById("display");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");

const laps = document.getElementById("laps");
const lapCount = document.getElementById("lapCount");

function updateDisplay() {

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    let ms = String(milliseconds).padStart(2, "0");

    display.innerText = `${h}:${m}:${s}:${ms}`;

}

function stopwatch() {

    milliseconds++;

    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();

}

startBtn.addEventListener("click", function () {

    if (timer !== null) return;

    timer = setInterval(stopwatch, 10);

});

pauseBtn.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

});

resetBtn.addEventListener("click", function () {

    clearInterval(timer);
    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    updateDisplay();

    laps.innerHTML = "";

    lapNumber = 1;
    lapCount.innerText = "Total: 0";

});

lapBtn.addEventListener("click", function () {

    if (timer === null) return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>Lap ${lapNumber}</span>
        <span>${display.innerText}</span>
    `;

    laps.prepend(li);

    lapCount.innerText = `Total: ${lapNumber}`;

    lapNumber++;

});

updateDisplay();