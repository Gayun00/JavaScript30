// 재생/일시정지

const $playButton = document.querySelector(".player__button");
const $video = document.querySelector(".player__video")
$playButton.addEventListener("click", handlePlay);

let played = false;

function handlePlay (ev) {
  const target = ev.target;
  played = !played;
  if (played) {
    $video.pause();
    stopPlaybackTime();
  } else {
    $video.play();
    getPlaybackTime();
  }
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
const $progress = document.querySelector(".progress__filled");

let timer;
let playTime = $video.currentTime;
function getPlaybackTime () {
  timer = setInterval(() => {
    playTime = $video.currentTime;
    console.log(playTime)
    const duration = $video.duration;
    const playPercentage = playTime / duration * 100;
    $progress.style.flexBasis = `${playPercentage}%`
  }, 1000);
}
// $progress.style.width = "10px"
function stopPlaybackTime () {
  clearInterval(timer);
}


//비디오 건너뛰기
const $skipBtns = document.querySelectorAll(".player__button");
$skipBtns.forEach(($skipBtn) => $skipBtn.addEventListener("click", skipVideo));

function skipVideo (ev) {
  const skipSec = ev.target.dataset.skip;
  console.log(skipSec)
  playTime = playTime + skipSec;
}

