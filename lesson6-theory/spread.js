const a = {
  anun: "ashot",
  test: {},
};
// let arr = [1, 2, 3, 4, 5];

// const arr2 = [...arr];
// arr2.push(9);

// console.log(arr2);
// console.log(arr2, arr);

function getVolumeOfCube(a, b, c) {
  return a * b * c;
}

const dimensionsOfCube = [2, 3, 4];
const v = getVolumeOfCube(...dimensionsOfCube);

const b = { ...a };
console.log(b);
console.log(b === a); // true
console.log(b.test === a.test); // false

const splitted = [..."text"];
const splittedObj = { ..."text" };

console.log(splitted);
console.log(splittedObj);

// Note
console.log({ ...5, ...true, ...NaN }, "note1");
console.log({ ...[1, 2, 3, "ds"] }, "note2");
console.log({ ..."dadhakjlhjkh" }, "note3");
// console.log([...{ 0: 1 }], "note4"); // error

// practice
let include = false;
const arr = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
let newArr = [...arr, ...arr2, ...(include ? ["include"] : [])];
console.log(newArr);

let includeSurname = false;
let obj1 = { name: "ashot" };
let obj2 = { age: 50 };
let obj3 = { surname: "poghosyan" };

let newObj = {
  ...obj1,
  ...obj2,
  ...(includeSurname ? obj3 : {}),
};
console.log(newObj);
