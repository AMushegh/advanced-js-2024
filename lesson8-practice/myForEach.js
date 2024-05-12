let a = [1, 2, 3];
let b = [1, 2, 3];

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

a.myForEach((el) => console.log(el * 2));
b.myForEach((el) => console.log(el * 2));
