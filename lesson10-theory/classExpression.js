let User = class {
  printMe() {
    console.log("USER");
  }
};

let user = new User();
user.printMe();

const createClass = function () {
  return class {
    printMe() {
      console.log("FROM CREATED");
    }
  };
};

let Created = createClass();
new Created().printMe();
