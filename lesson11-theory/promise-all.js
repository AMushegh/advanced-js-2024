const createTimeoutPromise = (sec, resolve = true) => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      if (resolve) {
        res(sec);
      }
      rej(sec);
    }, sec * 1000)
  );
};

Promise.all([createTimeoutPromise(2), createTimeoutPromise(1)])
  .then((v) => console.log(v))
  .catch((e) => console.error(e));
