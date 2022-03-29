const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minut = document.querySelector(".minut");
const second = document.querySelector(".second");
const body = document.querySelector("body");
const title = document.querySelector(".title");

let dayText = Number(day.textContent);
let hourText = Number(hour.textContent);
let minutText = Number(minut.textContent);
let secondText = Number(second.textContent);

let setTime = setInterval(function () {
  secondText--;
  if (secondText == "00") {
    secondText = 59;
    minutText--;
    minut.textContent = String(minutText).padStart(2, 0);
  }
  if (minutText == "00") {
    minutText = 59;
    hourText--;
    hour.textContent = String(hourText).padStart(2, 0);
  }
  if (hourText == "00") {
    hourText = 59;
    dayText--;
    day.textContent = String(dayText).padStart(2, 0);
  }
  if (dayText == "00") {
    body.style.backgroundColor = "red";
    title.textContent = "Vaqtingiz tugadi";
    title.style.color = "black";
    clearInterval(setTime);
  }
  second.textContent = String(secondText).padStart(2, 0);
}, 1);
