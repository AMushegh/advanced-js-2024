const obj = {
  profession: "programmer",
};

obj.name = "Mushegh";
obj["surname"] = "Andrasyan";
Object.defineProperty(obj, "age", {
  value: 20,
});

let descs = Object.getOwnPropertyDescriptor(obj, "age");

console.log(descs);
