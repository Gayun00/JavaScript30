const $canvas = document.querySelector('#draw');
const ctx = $canvas.getContext('2d');
$canvas.width = window.innerHeight;
$canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

$canvas.addEventListener('mousemove', draw);
$canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] =[e.offsetX, e.offsetY];
});
$canvas.addEventListener('mouseup', () => isDrawing = false);
$canvas.addEventListener('mouseout', () => isDrawing = false);

function draw(e) {
  if (!isDrawing) return;
  console.log(e)
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = hue;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] =[e.offsetX, e.offsetY];

  hue++;

  if(hue >= 360) {
    hue = 0;
  }
}
