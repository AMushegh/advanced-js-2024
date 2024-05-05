//ex 1
function findRecursiveSum(number) {
  if (number === 1) {
    return 1;
  }

  return number + findRecursiveSum(number - 1);
}

//ex 2
function findIndex(arr, el, index = 0) {
  if (index === arr.length) {
    return -1;
  }

  if (arr[index] === el) {
    return index;
  }

  return findIndex(arr, el, index + 1);
}

//ex 3
function findRecursiveLength(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (Array.isArray(arr[i])) {
      count + findRecursiveLength(arr[i]);
    } else {
      count++;
    }
  }

  return count;
}
