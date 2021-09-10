const $itemSection = document.querySelector(".item-section");

function loadItems() {
  return fetch("data/data.json")
  .then((response) => response.json())
  .then(json => json.items);
}

loadItems()
  .then((items) => {
    console.log(items)
    displayItems(items)
  })

  .catch((items) => {
    console.log("error")
  })

function displayItems(items) {
  const html = (items.map((item) => createHTMLString(item)).join(""));
  $itemSection.innerHTML = html;
}

function createHTMLString(item) {
  return `<box class="item-container">
  <img class="item-img" src="${item.image}" >
  <div class="item-info">
    <span class="item-title">${item.title}</span>
    <span class="item-price">${item.price}</span>
  </div>
</box>`
}
