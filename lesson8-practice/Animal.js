function Pet(name, animal) {
  this.name = name;
  this.animal = animal;
}

Pet.prototype.sound = function () {
  console.log("animal.sound");
};

function pet(name, animal) {
  return {
    name,
    animal,
    sound: function () {
      console.log("animal.sound");
    },
  };
}

const myDog = new Pet("Rex", "dog");
const myDog2 = pet("Rex", "dog");

console.log(myDog, myDog2);
