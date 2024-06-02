const FOOD_TYPE = {
  Meat: "meat",
  Fish: "fish",
  Grain: "grain",
};

class Animal {
  energy = 20;

  sound() {
    this.energy -= 3;
  }

  eat(food) {
    this.energy += 5;
  }

  sleep() {
    this.energy += 10;
  }
}

class Snake extends Animal {}

class Tiger extends Animal {
  sleep() {
    this.energy += 5;
  }

  eat(food) {
    if (food.type === FOOD_TYPE.Grain) {
      console.log("I can’t eat that");
      return;
    }

    super.eat();
  }
}

class Monkey extends Animal {
  sound() {
    this.energy -= 4;
  }

  eat() {
    this.energy += 2;
  }

  play() {
    if (this.energy < 8) {
      console.log("too tired");
      return;
    }

    console.log("Oooo Oooo");
    this.energy -= 8;
  }
}

class Food {
  constructor(type) {
    this.type = type;
  }
}

class Grain extends Food {
  constructor() {
    super(FOOD_TYPE.Grain);
  }
}

class Fish extends Food {
  constructor() {
    super(FOOD_TYPE.Fish);
  }
}

class Meat extends Food {
  constructor() {
    super(FOOD_TYPE.Meat);
  }
}

class Jungle {
  constructor(animals) {
    this.animals = animals;
  }

  soundOf() {
    this.animals.forEach((animal) => {
      animal.sound();
      console.log(animal.energy);
      console.log("----");
    });
  }
}

// food start
const grain = new Grain();
const fish = new Fish();
const meat = new Meat();
// food end

// animal start
const tiger = new Tiger();
const tiger2 = new Tiger();
const snake = new Snake();
const snake2 = new Snake();
const monkey = new Monkey();
// animal end

const animals = [tiger, tiger2, snake, snake2, monkey];
const jungle = new Jungle(animals);
