const obj = {};
let aa = obj;

const a = Object.defineProperty(obj, "key", { writable: false });

obj.key = 56752187387;
obj.key = "adwjhll";
obj.key = 56752187387;
obj.key = "daw";
obj.key = 56752187387;
obj.key = 56752187387;
obj.key = 56752187387;

console.log(obj.key);
