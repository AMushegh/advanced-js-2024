function sum(a, b, c, ...numbers) {
  console.log(arguments);
  //   return numbers.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3, 4, 5, 6, 7, 8);
