/**
 * 어떻게 접근해야할까?
 * 이벤트 위임으로 전체에 이벤트를 등록하되,
 * class가 key일때만 반응한다
 * 
 * 그리고 ..클릭한 키의 data값을 읽어온다음
 * 반환해보자.
 */



function playSound (ev) {
  const $audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`)
  const $key = document.querySelector(`.key[data-key="${ev.keyCode}"]`)
  if(!$audio) return;
  $audio.currentTime = 0;
  $audio.play();
  $key.classList.add("playing")
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound );