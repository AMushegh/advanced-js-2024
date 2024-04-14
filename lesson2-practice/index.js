function getSumOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; ++i) {
    sum += i * i;
  }

  return sum;
}

function getSumOfCubes(n) {
  let sum = 0;

  let i = 1;
  while (i <= n) {
    sum += Math.pow(i, 3);
    ++i;
  }
  return sum;
}

function exerciseFive(x, y, a) {
  const min = x > y ? y : x;
  const max = Math.max(x, y);

  for (let i = min + 1; i < max; ++i) {
    if (i % a === 0) {
      console.log(Math.pow(i, 3));
    }
  }
}

function createArrayFromUserInputs() {
  const lengthOfArray = +prompt("enter array length");

  let array = [];
  for (let i = 0; i < lengthOfArray; ++i) {
    const element = +prompt();
    array.push(element);
  }
  return array;
}

// increment ++ adds 1
// decrement -- takes 1
// types of manipulation --- postfix u prefix

const exercise1Result = getSumOfSquares(3);
const exercise2Result = getSumOfCubes(3);
// exerciseFive(7, 1, 3);

// const arr = createArrayFromUserInputs();

function createTriangleC() {
  for (let i = 0; i < 10; i++) {
    let str = "";
    for (let j = 0; j < 10; j++) {
      if (j < i) {
        str += " ";
      } else {
        str += "*";
      }
    }
    console.log(str);
  }
}

createTriangleC();
