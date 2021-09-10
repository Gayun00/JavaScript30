const $itemSection = document.querySelector(".item-section");
const $filterSection = document.querySelector(".filter-section");
const $itemImg = document.querySelector(".item-img");


function loadItems() {
  return fetch("data/data.json")
  .then((response) => response.json())
  .then(json => json.items);
}

loadItems()
  .then((items) => {
    console.log(items);
    displayItems(items);
    setEventListener(items);
  })

  .catch((items) => {
    console.log("error")
  })



function setEventListener(items) {
  $filterSection.addEventListener("click", (ev) => filterItems(ev, items));
}

function filterItems(ev, items) {
  const target = ev.target;
  console.log(items)
  if(target.tagName !== "BUTTON") return;
  console.log(target)
}

  function displayItems(items) {
  const html = (items.map((item) => createHTMLString(item)).join(""));
  $itemSection.innerHTML = html;
}

function createHTMLString(item) {
  return `<box class="item-container">
  <img class="item-img" src="${item.image}" alt="${item.type}" >
  <div class="item-info">
    <span class="item-title">${item.title}</span>
    <span class="item-price">${item.price}</span>
  </div>
</box>`
}


