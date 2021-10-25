const $checkBoxesAll = document.querySelectorAll('input[type="checkbox"]');
const $inbox = document.querySelector('.inbox');

let toBeChecked = false;

$inbox.addEventListener('click', (ev) => {
  const target = ev.target;
  console.log(this)
  if (target.tagName !== 'INPUT') return;

  if (ev.shiftKey) {
    $checkBoxesAll.forEach((checkBox) => {
      if (checkBox.checked === true) {
        toBeChecked = !toBeChecked;
      }

      if (toBeChecked) {
        checkBox.checked = true;
      }
    });
  }
});