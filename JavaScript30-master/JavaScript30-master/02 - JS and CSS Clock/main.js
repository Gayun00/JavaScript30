const $hourHand = document.querySelector(".hour-hand");
const $minHand = document.querySelector(".min-hand");
const $secondHand = document.querySelector(".second-hand");

setInterval(getSec, 1000);

function getSec(){
  const now = new Date();
  const second = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  $secondHand.style.transform =
    `rotate(${second / 60 * 360 + 90}deg)`;

  $minHand.style.transform =
    `rotate(${min / 60 * 360 + 90}deg)`;

  $hourHand.style.transform =
    `rotate(${((hour / 12) * 360) + 90}deg);`
}
