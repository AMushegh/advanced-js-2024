function foo() {
  let count = 1;

  return function () {
    console.log(count++);
  };
}
let logger = foo();

logger();
logger();
logger();
logger();
logger();
logger();
logger();
