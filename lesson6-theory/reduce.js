let arr = [1, 2, 10, 3, 4, 5];

const sum = arr.reduce((sum, el) => sum + el, 0);
const max = arr.reduce((max, el) => (el > max ? el : max), arr[0]);

console.log(sum);
console.log(max);
