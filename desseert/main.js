const $imgSection = document.querySelector(".img-section");

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
    console.log("catch")
  })

// function displayItems(items) {
//   console.log("ddddd")
//   const html = items.map((item) => createHTMLString(item).join(""));
//   console.log(html)
// }

// function createHTMLString() {
//   return `
//   <box class="item-container">
//   <img class="item-img" src="${items.image}" >
//   <div class="item-info">
//     <span class="item-title">${items.title}</span>
//     <span class="item-price">${items.price}</span>
//   </div>
// </box>
//   `
// }
