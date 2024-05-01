function myMap(cb, arr) {
  let newArray = [];
  arr.forEach((element, index, array) => {
    newArray.push(cb(element, index, array));
  });

  return newArray;
}

const arr = [0, 1, 2, 3, 4, 5];

console.log(arr.map((el, i) => (i % 2 === 0 ? 2 : el)));
console.log(myMap((el, i) => (i % 2 === 0 ? 2 : el), arr));
