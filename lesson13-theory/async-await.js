const API_URL = "https://jsonplaceholder.typicode.com/todos/";

// const deleteUser = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res();
//     }, 3000);
//   });
// };

// const notifyToFriendsThatUserIsDeleted = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("user is deleted notify");
//     }, 100);
//   });
// };

// const removeUser = () => {
//   deleteUser().then((d) => {
//     console.log(d);
//     notifyToFriendsThatUserIsDeleted().then(console.log);
//   });
// };

// // removeUser();
// // async await
// const createPromise = async function () {
//   await deleteUser();

//   console.log("2");
//   const message2 = await notifyToFriendsThatUserIsDeleted();
//   console.log(message2);
// };

// createPromise();
// // removeUser();

function createPromise() {
  return Promise.resolve();
}

async function createPromise2() {
  return;
}

const getTodos2 = () => {
  console.log("dwa");
  return fetch(API_URL).then((data) => data.json());
};

const getTodos = async () => {
  console.log("dwa");
  const resp = await fetch(API_URL);
  await resp.json();

  return;
};

getTodos2().then(() => console.log("1"));
