// 재생/일시정지

const $playButton = document.querySelector(".player__button");
const $video = document.querySelector(".player__video")
$playButton.addEventListener("click", handlePlay);

let played = false;

function handlePlay (ev) {
  const target = ev.target;
  played = !played;
  played ? $video.pause() : $video.play();
}



//재생 속도 제어
const $videoSpeed = document.querySelector("input[name=playbackRate]");
$videoSpeed.addEventListener("input", handleSpeed)
function handleSpeed (ev) {
  const value = ev.target.value;
  $video.playbackRate = value;
}

//볼륨 조정
const $videoVolume = document.querySelector("input[name=volume]");
$videoVolume.addEventListener("input", handleVolume);
function handleVolume (ev) {
  const value = ev.target.value;
  $video.volume = value;
}

// 재생시간별 막대 표시
const $progress = 