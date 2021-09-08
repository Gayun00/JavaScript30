//   const getTodoList = document.querySelector(".todo-list");
//   const addTodo = document.createElement("li");
//   addTodo.innerHTML = `
//       <ul class="todo-List">
//       <input type="checkbox" name="" class="todo-checkbox" />
//       <p class="todo-Text">ddddddd</p>
//     </ul>
//       `;
// }

// getBtn.addEventListener("click", addText);
//   let getTextVal = getText.value;
// function addText() {
//   console.log(getText.value);
// }
window.onload = function () {
  const getBtn = document.querySelector(".add");
  const getText = document.querySelector(".text");
  getBtn.addEventListener("click", function () {
    const getText = document.querySelector(".text");
    let getTextValue = getText.value;
    console.log(getTextValue);
    addTodo(getTextValue);
    text.textContent = "";
  });
  //   let getTextVal = getText.value;
  //   function addText() {
  //     console.log("clicked!");
  //   }

  function addTodo(inputText) {
    const itemElement = document.querySelector(".item");
    const todoElement = document.createElement("ul");
    const todoCheckElement = document.createElement("input");
    const todoTextElement = document.createElement("p");

    todoCheckElement.setAttribute("type", "checkbox");

    todoTextElement.textContent = `${inputText}`;
    itemElement.appendChild(todoElement);
    todoElement.appendChild(todoCheckElement);
    todoElement.appendChild(todoTextElement);

    todoElement.classList.add("todoEl");
    todoElement.style.display = "flex";
    todoElement.style.alignItems = "center";
  }
};
