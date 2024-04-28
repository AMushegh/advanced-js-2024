function getArrayAverage(array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}

const arr = [12, 33, 4, 5, 34, 23, 435, 34, 76768, 6, 868, 2, 2, 564];
let average = getArrayAverage(arr);

const arr1 = [
  12354, 33354, 4354, 5, 34, 23, 435343435, 2, 73456768, 6, 868, 2465, 2, 564,
];
const average1 = getArrayAverage(arr1);

const arr2 = [
  12453354, 33354, 4354, 5, 34, 23, 435343435, 2, 73456768, 6, 868, 2465, 2,
  564,
];
const average2 = getArrayAverage(arr2);

function getNumberEvenOdd(number) {
  if (number === -0) {
    return;
  }

  if (number % 2 === 0) {
    return "even";
  }
  return "odd";
}
