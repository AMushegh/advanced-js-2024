const API_BASE = "https://jsonplaceholder.typicode.com";

const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");

function fetchUser(userId) {
  return fetch(API_BASE + "/users/" + userId);
}
function fetchPosts() {
  return fetch(API_BASE + "/posts");
}

// function getUser(userId) {
//   fetchUser(userId)
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
//     .then(() => {
//       fetchPosts()
//         .then((resp) => resp.json())
//         .then((data) => {
//           let filtered = data.filter((post) => post.userId === userId);
//           return filtered;
//         })
//         .then((userPosts) => console.log(userPosts));
//     });
// }

async function getUser(userId) {
  console.log("loading user data...");
  const userDataResp = await fetchUser(userId);
  const userData = await userDataResp.json();
  console.log(userData);

  console.log("loading user posts...");
  const postsRequest = await fetchPosts();
  const posts = await postsRequest.json();
  const filtered = posts.filter((post) => post.userId === userId);
  console.log(filtered);
}

const handleButtonClick = () => {
  const inputValue = inputElement.value;

  getUser(+inputValue);
};

buttonElement.addEventListener("click", handleButtonClick);
