// IIFE -> Immediately Invoked Function Expression
let a = 1;

(() => {
  console.log(this);
})();

let b = 1;
