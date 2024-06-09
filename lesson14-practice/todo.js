const todoContainer = document.querySelector("#todo-list");
const createButton = document.querySelector("#create-button");
const inputElement = document.querySelector("input");

function toggleLine() {
  this.classList.toggle("text-with-line");
}

function init() {
  const pElementList = document.querySelectorAll("li p");

  pElementList.forEach((p) => {
    p.addEventListener("click", toggleLine);
  });
}

function getInputValueAndErase() {
  const value = inputElement.value;
  inputElement.value = "";
  return value;
}

function createTodoItem() {
  const liElement = document.createElement("li");
  const pElement = document.createElement("p");

  pElement.innerText = getInputValueAndErase();
  pElement.addEventListener("click", toggleLine);
  liElement.appendChild(pElement);

  todoContainer.appendChild(liElement);
}

createButton.addEventListener("click", createTodoItem);

init();
