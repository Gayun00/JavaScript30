const $checkBoxesAll = document.querySelectorAll('input[type="checkbox"]');
const $inbox = document.querySelector('.inbox');


let toBeChecked = false;
$inbox.addEventListener('click', (ev) => {
  const target = ev.target;

  if (target.tagName !== 'INPUT') return;

  if (ev.shiftKey) {
    $checkBoxesAll.forEach((checkBox) => {
      if (checkBox.checked === true) {
        toBeChecked = !toBeChecked;
        console.log(toBeChecked)
      }

      if (toBeChecked) {
        checkBox.checked = true;
      }
    })
  }



})