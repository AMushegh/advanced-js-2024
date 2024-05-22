class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("eating");
  }

  makeSound() {
    console.log("voice");
  }

  move() {
    console.log("move");
    console.log("move");

    console.log("move");

    console.log("move");

    console.log("move");

    console.log("move");

    console.log("move");

    console.log("move");
  }
}

class Bird extends Animal {
  constructor(name, length) {
    super(name);
    this.length = length;
  }

  move() {
    super.move();
    console.log("fly");
  }
}

const bird = new Bird("birdName", 67);
console.log(bird.name, bird.length);
bird.move();
