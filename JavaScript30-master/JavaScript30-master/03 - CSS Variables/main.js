const $spacing = document.querySelector("#spacing");
const $image = document.querySelector("#img");
const $blur = document.querySelector("#blur");
const $baseColor = document.querySelector("#base");
const $background = document.querySelector(".background");

$spacing.addEventListener("input", handleSpacing);
$blur.addEventListener("input", handleBlur);
$baseColor.addEventListener("input", handleBaseColor);

function handleSpacing (ev) {
  const spacingVal = ev.target.value;
  $image.style.margin = `${spacingVal}px`
}

function handleBlur (ev) {
  const blurVal = ev.target.value;
  $image.style.filter = `blur(${blurVal}px)`
}

function handleBaseColor (ev) {
  const colorVal = ev.target.value;
  $background.style.backgroundColor = `${colorVal}`
}
