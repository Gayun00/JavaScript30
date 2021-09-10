function loadItems() {
  return fetch("data/data.json").then((response) => response.json());
}

loadItems()
  .then((items) => {
    console.log(items)
  })

  .catch((items) => {
    console.log(items)
  })
