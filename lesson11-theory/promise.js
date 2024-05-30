// const createPromise = (arg) => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(arg);
//     }, 2000);
//   });
// };

// createPromise(500)
//   .then((value) => {
//     console.log(value);
//     return value + 200;
//   })
//   .then((v) => console.log(v))
//   .then((v) => console.log(v, "3rd"));

const a = new Promise((res) => {
  res("b");
});

a.then(console.log);

a.then((v) => console.log(v, "2"));
