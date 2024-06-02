const createPromise = (arg) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (typeof arg !== "string") {
        rej(arg);
        return;
      }

      res(arg.toUpperCase());
    }, 500);
  });
};

createPromise("dajhklwdhajkwdhkj").then(console.log).catch(console.error);
