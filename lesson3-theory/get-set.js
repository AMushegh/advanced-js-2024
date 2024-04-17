const hashiv = {
  gumar: 10000,

  get kanxikQanak() {
    return this.gumar - 100;
  },

  set kanxikQanak(h) {
    console.log(h);
    this.gumar += h - 20;
  },
};

let car = {
  brand: "toyota",
  startDrive() {
    this.realSpeed = 58;
  },
  realSpeed: 0,

  get speed() {
    return this.realSpeed + 2;
  },

  set speed(speedIWantToSeeOnDashboard) {
    this.realSpeed = speedIWantToSeeOnDashboard - 2;
    return speedIWantToSeeOnDashboard;
  },
};

car.startDrive();
console.log(car.speed); // 60
car.speed = 90;
console.log(car.speed);
console.log(car.realSpeed);
