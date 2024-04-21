const obj = {};

obj.setName = function (name) {
  this.name = name;
};
obj.getName = function () {
  return this.name;
};

obj.setName("John");

console.log(obj.getName()); // Should log ‘John’
