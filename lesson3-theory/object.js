const a = {
  name: "Mushehg",
  getName() {
    console.log("log");
  },
};
const b = a;

const str = "ajdaklw";
// console.log(str.split(""));

// array, object, function

let arr = [1, 2, 3, 4, 5];

console.log("arr", arr[5]);

arr.type = "array";

function foo() {}

foo.myProp = 10;
console.log(foo.myProp);
console.log(arr.type);
