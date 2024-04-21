// const a = {};
const b = new Object();
// const c = Object.create();

const MyObject = function (n) {
  // let this = {}
  this.name = n;
  this.age = 24;
  // return this
};

const myData = new MyObject("musfsrhegh");
const a = Object.keys(myData);
console.log(a);

const obj = Test("dawhkj");
