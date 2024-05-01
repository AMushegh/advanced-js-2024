function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

const a = sum(1, 2, 3, 4);
const a1 = sum();

// destructuring
const dimensionsOfCube = ["dw", 3, 4];
const [first, second, third] = dimensionsOfCube;
// const first = dimensionsOfCube[0];
// const second = dimensionsOfCube[1];
// const third = dimensionsOfCube[2];
let age = 11;
const obj = {
  anun: "edgar",
  age: 22,
  address: {
    city: "yerevan",
    street: "abovyan",
    building: "10",
  },
};

let {
  anun,
  age: ageFromObj,
  address: { city },
} = obj;

console.log(anun, ageFromObj, city);

const arr = ["name", "value", [1, 2, 4]];

const [temp, v, [innerFirst, innerSecond]] = arr;

console.log(innerSecond);
