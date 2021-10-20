window.addEventListener("keydown", playSound);

function playSound(ev){
  const $audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`)
  const $key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  if (!$audio) return;
  $audio.currentTime = 0;
  $audio.play();
  $key.classList.add("playing");
}

const $keys = document.querySelectorAll(".key");

$keys.forEach((key)=> {
  key.addEventListener('transitionend', removeTransition)
})

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove('playing');
}