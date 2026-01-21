// Countdown to Jan 19, 2027 (local time)
const target = new Date(2027, 0, 19, 0, 0, 0); // Jan = 0

const cdDays  = document.getElementById("cdDays");
const cdHours = document.getElementById("cdHours");
const cdMins  = document.getElementById("cdMins");
const cdSecs  = document.getElementById("cdSecs");

function pad2(n) {
  return String(n).padStart(2, "0");
}

function tickCountdown() {
  const now = new Date();
  let diffMs = target - now;

  if (diffMs <= 0) {
    cdDays.textContent  = "0";
    cdHours.textContent = "00";
    cdMins.textContent  = "00";
    cdSecs.textContent  = "00";
    return;
  }

  const totalSeconds = Math.floor(diffMs / 1000);

  const days  = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const mins  = Math.floor((totalSeconds % 3600) / 60);
  const secs  = totalSeconds % 60;

  cdDays.textContent  = days;
  cdHours.textContent = pad2(hours);
  cdMins.textContent  = pad2(mins);
  cdSecs.textContent  = pad2(secs);
}

tickCountdown();
setInterval(tickCountdown, 1000);
