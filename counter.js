let day = 0;
const MAX_DAYS = 365;
let timer = null;

const decEl = document.getElementById("dec");
const hexEl = document.getElementById("hex");
const binEl = document.getElementById("bin");

function padBinary(n, width = 9) { // 365 fits in 9 bits (0–511)
  return n.toString(2).padStart(width, "0");
}

function updateDisplay() {
  decEl.textContent = day.toString(10);
  hexEl.textContent = "0x" + day.toString(16).toUpperCase();
  binEl.textContent = "0b" + padBinary(day);
}

function tick() {
  if (day >= MAX_DAYS) {
    stop();
    return;
  }
  day += 1;
  updateDisplay();
}

function start() {
  if (timer) return;
  timer = setInterval(tick, 1000);
}

function stop() {
  if (!timer) return;
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  day = 0;
  updateDisplay();
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("pauseBtn").addEventListener("click", stop);
document.getElementById("resetBtn").addEventListener("click", reset);

// init
updateDisplay();
