Array.prototype.groupByCount = function () {
  return this.reduce((acc, el) => {
    if (!acc[el]) {
      acc[el] = 0;
    }
    acc[el]++;

    return acc;
  }, {});
};

const b = [1, 2, 3, 4, 1, 2, 34];
console.log(b.groupByCount());
