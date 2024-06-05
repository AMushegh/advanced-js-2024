const API_URL = "https://jsonplaceholder.typicode.com/todos/";

function getData() {
  document.write("loading");

  fetch(API_URL, {
    method: "get",
  })
    .then((resp) => resp.json())
    .then((data) => {
      let a = [...data];

      console.log(a);
    });
}
getData();
