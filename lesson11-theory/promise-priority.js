setTimeout(() => {
  console.log(2);
}, 0);

new Promise((res) => res()).then(() => console.log(3));
new Promise((res) => res()).then(() => console.log(3));
new Promise((res) => res()).then(() => console.log(3));
Promise.resolve("1").then((v) => console.log(v));
new Promise((res) => res()).then(() => console.log(3));
new Promise((res) => res()).then(() => console.log(3));
new Promise((res) => res()).then(() => console.log(3));
new Promise((res) => res()).then(() => console.log(3));
new Promise((res) => res()).then(() => console.log(3));
new Promise((res) => res()).then(() => console.log(3));
new Promise((res) => res()).then(() => console.log(3));
new Promise((res) => res()).then(() => console.log(3));

console.log("here");
