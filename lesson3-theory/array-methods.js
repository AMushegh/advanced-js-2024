const arr = new Array(30).fill().map(() => Math.floor(Math.random() * 10));

let arr1 = [];
let arr2 = new Array(1);
let arr3 = Array(1);

// forEach

console.log(arr);
let sum = 0;
arr.forEach(arr, (el) => {
  sum += el;
});

function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; ++i) {
    callback(arr[i], i, arr);
  }
}
console.log("sum", sum);
