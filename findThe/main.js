const ITEM_COUNT = 5;
const ITEM_SIZE = 110;

let TIME = 10;
let SCORE = 0;
let started = false;

const $intro = document.querySelector(".intro");
const $startBtn = document.querySelector(".start-btn");
const $restartBtn = document.querySelector(".restart-btn");
const $timer = document.querySelector(".timer");
const $score = document.querySelector(".score");

const $gameField = document.querySelector(".game-field");
const $fieldRect = $gameField.getBoundingClientRect();

const $popUp = document.querySelector(".pop-up");
const $popUpText = document.querySelector(".pop-up-message");

$startBtn.addEventListener("click", startOrStop);
$restartBtn.addEventListener("click", reStartGame);
$gameField.addEventListener("click", clickItem);

function startOrStop() {
  if (!started) {
    startGame();
  } else {
    stopGame();
  }
  started = !started;
}

function startGame() {
    initGame();
    showTimerAndScore();
    startTimer(TIME);
    hideIntro();
}

function hideIntro() {
  $intro.classList.add("intro-hide");
}

function initGame() {
  $gameField.innerHTML = "";
  addItem('smiley', ITEM_COUNT, 'img/smiley.png');
  addItem('radio', ITEM_COUNT, 'img/radio.png');
  addItem('flower', ITEM_COUNT, 'img/flower.png');
  addItem('egg', ITEM_COUNT, 'img/egg.png');
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = $fieldRect.width - ITEM_SIZE;
  const y2 = $fieldRect.height - ITEM_SIZE;

  for(let i = 0; i < count; i++){
    const $item = document.createElement("img");
    $item.setAttribute("src", imgPath);
    $item.setAttribute("class", className);
    $gameField.appendChild($item);

    $item.style.position = 'absolute'
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    $item.style.left = `${x}px`
    $item.style.top = `${y}px`
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showTimerAndScore() {
  $timer.innerText = `${TIME} S`;
  $score.innerText = `0`
}

function startTimer(time) {
  timer = setInterval(() => {
    if(time === 0){
      stopGame();
      return;
    } else {
    time--;
    $timer.innerText = `${time} S`;
    }
  }, 1000);
}

function clickItem(ev) {
  if (started === false) {
    return;
  }
  const target = ev.target;
  if (target.matches(".radio")) {
    SCORE++;
    target.remove();
  } else {
    SCORE--;
    console.log("dang...")
  }
  if (SCORE < 0 || TIME ===0) {
    stopGame();
  } else (SCORE === ITEM_COUNT - 1);
  $score.innerText = `${SCORE}`;
}



function stopGame() {
  clearInterval(timer)
  showPopUpWithText('replay?');
}

function reStartGame() {
  started = false;
  startOrStop();
  hidePopUp();
  updateTimerAndScore();
}

function showPopUpWithText(text) {
  $popUpText.innerText = text;
  $popUp.classList.remove('pop-up-hide');

}

function hidePopUp() {
  $popUp.classList.add("pop-up-hide");
}

function updateTimerAndScore() {
  TIME = 10;
  SCORE = 0;
}