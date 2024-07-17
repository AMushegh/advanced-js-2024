// String, number, boolean, undefined, null, BigInt, Symbol,
// Object

let a = [];
let b = a;
a.push(1);
// b

let c = 1;
let d = c;
c = 63786;
// d
//-----------
function foo() {
    console.log(this);
  }
  
  let data = {
    method() {
      return () => {
        console.log(this);
      };
    },
  };
  s;
  foo = data.method();
  
  foo();
