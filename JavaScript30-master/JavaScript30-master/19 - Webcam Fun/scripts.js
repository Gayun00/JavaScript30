const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(localMediaStream => {
    console.log(localMediaStream);
    video.srcObject = localMediaStream;
    video.play();
    paintToCanvas();
  })
  .catch(err => {
    console.error(`OH NO!!`, err);
  });
}

getVideo();


function paintToCanvas() {
  const width = 640;
  const height = 480;
  canvas.width = width;
  canvas.height = height;
  console.log(width,height)
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}