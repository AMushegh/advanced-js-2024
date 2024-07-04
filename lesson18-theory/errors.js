// Range Error
// console.log("a".repeat(2 ** 30));

// ReferenceError
// console.log(a);

//SyntaxError
// if(){}

// console.log(typeof SyntaxError);

async function fetchTodo(id) {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/" + id
    );

    if (!data.completed) {
      throw new Error("piti lini completed");
    }
  } catch (error) {
    console.error(error.message);
  }
}

// fetchTodo(1);

// try {
//   // Range Error
//   "a".repeat(2 ** 30);
// } catch (e) {
//   Toastify({
//     text: "dajkwdjald",
//   }).showToast();
// }

// new Promise((res, rej) => {
//   rej();
// })
//   .then()
//   .catch((e) => console.log());

// console.log("hajord tox");

new Promise((res) => {
  res({});
})
  .then(() => {
    throw new Error();
  })
  .then(() => console.log("info"))
  .catch((e) => console.log(e));
