const p = new Promise((res, rej) => {
  res("dawjkl");
});

function squarePromise(promise) {
  return new Promise((res, rej) => {
    promise
      .then((v) => {
        if (typeof v === "number") {
          res(v);
        }
        if (+v) {
          res(v ** 2);
        }
        rej(`Cannot convert ${v} to a number!`);
      })
      .catch((e) => {
        rej(e);
      });
  });
}

squarePromise(p)
  .then((v) => {
    console.log(v);
  })
  .catch((e) => console.error(e));
