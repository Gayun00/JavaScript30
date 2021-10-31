const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

addItems.addEventListener('submit', addItem);

function addItem(ev) {
  ev.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}"
        ${plate.done ? 'checked' : ''}/>
      <label for="">${plate.text}</label>
    </li>
    `;
  }).join('');
}