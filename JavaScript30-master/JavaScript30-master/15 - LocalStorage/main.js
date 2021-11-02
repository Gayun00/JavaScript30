const $plates = document.querySelector('.plates');
const $input = document.querySelector('input[name="item"]');
const $addButton = document.querySelector('input[value="+ Add Item"]');

$addButton.addEventListener('click', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  console.log($input.value);
}