const todoContainer = document.querySelector("#todo-list");
const createButton = document.querySelector("#create-button");
const inputElement = document.querySelector("input");

const loader = '<div class="todo-loader"> <img src="./ZZ5H.gif" /></div>';

function toggleLine() {
  this.classList.toggle("text-with-line");
}

function showLoader() {
  const loaderElement = document.createElement("div");
  const loaderImageElement = document.createElement("img");
  loaderImageElement.src = "./ZZ5H.gif";

  loaderElement.appendChild(loaderImageElement);
  todoContainer.insertBefore(loaderElement, todoContainer.firstChild);
}

function removeLoader() {
  todoContainer.removeChild(todoContainer.firstChild);
}

function getInputValueAndErase() {
  const value = inputElement.value;
  inputElement.value = "";
  return value;
}

function createTodoItem(text) {
  const liElement = document.createElement("li");
  const pElement = document.createElement("p");

  pElement.innerText = text;
  pElement.addEventListener("click", toggleLine);
  liElement.appendChild(pElement);

  todoContainer.appendChild(liElement);
}

async function getTodos() {
  try {
    showLoader();
    const [resp] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todosdawd"),
      new Promise((res) => setTimeout(() => res(), 5000)),
    ]);

    if (resp.status !== 200) {
      throw new Error("Unable to load todos, sorry :(");
    }

    const data = await resp.json();
    data.splice(2, 10).forEach(({ title }) => createTodoItem(title));
  } catch (e) {
    let message = e.message;
    if (e instanceof TypeError) {
      message = "Something went wrong, please contact customer service";
    }

    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      style: {
        background: "red",
      },
    }).showToast();
  } finally {
    removeLoader();
  }
}

createButton.addEventListener("click", () =>
  createTodoItem(getInputValueAndErase())
);

getTodos();

createGreeting();
