const a = {
  method() {
    console.log("dajlwk");
  },
};

let v = a.toString();
console.log(v);

function Constructor() {} // new Funtion

console.log(Constructor.__proto__ === Function.prototype);
