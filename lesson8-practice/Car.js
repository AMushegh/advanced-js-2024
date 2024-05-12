function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.speed = 0;
}

Car.prototype.start = function () {
  console.log(`${this.brand} ${this.model} is ready!`);
};
Car.prototype.stop = function () {
  if (this.speed === 0) {
    console.log(`${this.brand} ${this.model} is stopped!`);
  } else {
    console.log(`${this.brand} ${this.model} speed should be 0`);
  }
};
Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.break = function () {
  this.speed -= 10;
};
Car.prototype.speedInfo = function () {
  console.log(`${this.brand} ${this.model} speed is ${this.speed}!`);
};

const bmw = new Car("bmw", "5");
const mb = new Car("mb", "e");

bmw.start();
bmw.speedInfo();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.speedInfo();
bmw.break();
bmw.break();
bmw.break();
bmw.speedInfo();
bmw.stop();
