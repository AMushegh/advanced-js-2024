Promise.resolve(5)
  .then((v) => {
    console.log(v);
  })
  .then((v) => {
    return new Error();
    console.log(v, 2);
  })
  .catch((e) => console.log(e, "dahjkhdwkj"));
