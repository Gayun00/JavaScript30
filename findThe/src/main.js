
import Field from "./field.js";
import PopUp from "./popup.js";

const ITEM_COUNT = 5;
const ITEM_SIZE = 110;

let TIME = 10;
let SCORE = 0;
let started = false;

const $intro = document.querySelector(".intro");
const $startBtn = document.querySelector(".start-btn");

const $timer = document.querySelector(".timer");
const $score = document.querySelector(".score");


const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  startGame();
})

const gameField = new Field();
gameField.setClickListener(onItemClick);


$startBtn.addEventListener("click", startOrStop);

// gameField.addEventListener("click", clickItem);

function onItemClick(ev) {
  if (started === false) {
    return;
  }
  // const target = ev.target;
  if (item.matches(".radio")) {
    SCORE++;
    // target.remove();
  } else {
    SCORE--;
    // console.log("dang...")
  }
  if (SCORE < 0 || TIME ===0) {
    stopGame();
  } else if (SCORE === ITEM_COUNT - 1) {
    gameFinishBanner.showWithText('won!')
  };
  $score.innerText = `${SCORE}`;
}

function startOrStop() {
  if (!started) {
    startGame();
  } else {
    stopGame();
  }
  started = !started;
}

function startGame() {
    gameField.init();
    showTimerAndScore();
    startTimer(TIME);
    hideIntro();
}

function hideIntro() {
  $intro.classList.add("intro-hide");
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showTimerAndScore() {
  $timer.innerText = `${TIME} S`;
  $score.innerText = `0`
}

function startTimer(time) {
  const timer = setInterval(() => {
    if(time === 0){
      stopGame();
      clearInterval(timer);
      return;
    } else {
    time--;
    $timer.innerText = `${time} S`;
    }
  }, 1000);
}



function stopGame() {
  gameFinishBanner.showWithText('replay?');
}

function reStartGame() {
  started = false;
  startOrStop();
  gameFinishBanner.hide();
  updateTimerAndScore();
}

function updateTimerAndScore() {
  TIME = 10;
  SCORE = 0;
}