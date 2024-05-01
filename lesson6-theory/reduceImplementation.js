const myReduce = (cb, initialValue, arr) => {
  let calculatedStartIndex = initialValue === undefined ? 1 : 0;
  let calculatedInitialValue = initialValue ?? arr[0];

  let acc = calculatedInitialValue;

  for (let i = calculatedStartIndex; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }

  return acc;
};

let arr = [1, 2, 3, 4, 5, 100, 6, 7, 8, 9, 10];

console.log(arr.reduce((acc, n) => acc + n, 0));
console.log(myReduce((acc, n) => acc + n, 0, arr));

console.log(arr.reduce((max, el) => (el > max ? el : max), arr[0]));
console.log(myReduce((max, el) => (el > max ? el : max), arr[0], arr));

console.log(arr.reduce((acc, el) => [...acc, el * 2], []));
console.log(myReduce((acc, el) => [...acc, el * 2], [], arr));
console.log(arr.map((el) => el * 2));

console.log(arr.filter((el) => el % 2 === 0));
console.log(arr.reduce((acc, el) => (el % 2 === 0 ? [...acc, el] : acc), []));
