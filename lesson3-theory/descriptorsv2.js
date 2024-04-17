const obj = {
  key: "value",
  print: function () {},
};

Object.defineProperty(obj, "name", { value: "Mushgeh", enumerable: true });
console.log(Object.keys(obj));
