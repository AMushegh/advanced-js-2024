let i = 10;

function checkScope() {
  innerScope();

  function innerScope() {
    console.log(i);
  }
}

console.log(this);
// execution context
// global execution context
// function execution context

// 1. creation phase
//     creates variable object
//     create scope chain
//     this binding

// 2. execution phase
