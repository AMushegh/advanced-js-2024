const arr = [
  6, 5, 9, 6, 0, 8, 8, 5, 0, 8, 3, 2, 6, 3, 1, 9, 6, 7, 0, 9, 4, 5, 7, 6, 5, 3,
  7, 0, 2, 3,
];

let arr1 = [];
let arr2 = new Array(1);
let arr3 = Array(1);

// forEach
let sum = 0;
arr.forEach((el) => {
  sum += el;
});

function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; ++i) {
    callback(arr[i], i, arr);
  }
}

//map
const mappedArray = arr.map((el) => el * 10);

console.log(arr);
console.log(mappedArray);

//filter
const filteredArray = arr.filter((_, i) => i >= 4);
console.log(filteredArray);

const names = ["bob", "jackj", "david", "maxm"];

//some
let exists = names.some((el) => el[0] === el[el.length - 1]);
console.log(exists);

//every
let existsAll = names.every((el) => el[0] === el[el.length - 1]);
console.log(existsAll);
