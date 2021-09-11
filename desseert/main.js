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
    displayItems(items);
    setEventListener(items);
  })

  .catch((items) => {
    console.log("error")
  })

function setEventListener(items) {
  $filterSection.addEventListener("click", (ev) => onClick(ev, items));
}

function onClick(ev, items) {
  const target = ev.target;
  const value = target.dataset.value;

  if(target.tagName !== "BUTTON") return;
  const $itemContainers = document.querySelectorAll(".item-container");
  $itemContainers.forEach((itemContainer) => {
    itemContainer.classList.toggle("item-container-hide",false);

    const itemContainerClass = itemContainer.getAttribute("class");
    if (!itemContainerClass.match(value)) {
      itemContainer.classList.add("item-container-hide");
    }
  })
}

  function displayItems(items) {
  const html = (items.map((item) => createHTMLString(item)).join(""));
  $itemSection.innerHTML = html;
}

function createHTMLString(item) {
  return `<box class="item-container ${item.type}">
  <img class="item-img" src="${item.image}" >
  <div class="item-info">
    <span class="item-title">${item.title}</span>
    <span class="item-price">${item.price}</span>
  </div>
</box>`
}
