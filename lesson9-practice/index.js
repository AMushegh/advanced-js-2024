let arr = [1, 8, 10, 10, 2, 10];

function getMaxAges(ages) {
  let max = Math.max(...ages);
  let maxArr = ages.filter((el) => el === max);

  let arrWithoutMax = ages.filter((el) => el !== max);
  let secondMax = Math.max(...arrWithoutMax);
  let secondMaxArr = ages.filter((el) => el === secondMax);

  return [
    ...(secondMaxArr.length === 1 ? secondMaxArr : [secondMaxArr]),
    ...(maxArr.length === 1 ? maxArr : [maxArr]),
  ];
}

console.log(getMaxAges(arr));
