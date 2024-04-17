function foo() {
  console.log(this.name);
}

const obj1 = {
  name: "111",
  printThis: foo,
};

const obj2 = {
  name: "222",
  printThis: foo,
};

const obj3 = {
  name: "333",
  printThis: foo,
};

obj1.printThis();
obj2.printThis();
obj3.printThis();
foo();
