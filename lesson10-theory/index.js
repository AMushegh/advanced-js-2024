// class starts
function CarConstructor(name) {
  this.name = name;
}

CarConstructor.prototype.drive = function () {
  console.log("speed");
};
// class end

// function car(name) {
//   return { name };
// }

const car1 = new CarConstructor("toyota");
// const car3 = new Car("honda");

// const car2 = car("toyota");

// console.log(JSON.stringify(car1));
// console.log(JSON.stringify(car2));

class Car {
  isDriving = false;

  constructor() {
    console.log("dawjlkdawjklh");
  }

  drive() {
    console.log("speed");
  }

  stop() {
    console.log(stop);
  }
}
