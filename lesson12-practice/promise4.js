const mapPromise = (promise, transformer) => {
  return new Promise((res, rej) => {
    promise
      .then((v) => {
        res(transformer(v));
      })
      .catch((e) => {
        rej(e);
      });
  });
};

const myPromise = new Promise((resolve) => {
  resolve(2);
});

const timesTwo = (val) => val * 3;

mapPromise(myPromise, timesTwo)
  .then((result) => console.log(result))
  .catch((e) => {
    console.log(e, "catch");
  });
