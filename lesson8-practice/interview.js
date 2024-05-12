function a(a, b) {
  console.log(this);
  console.log(a, b);
}

let b = a.bind(1289);

b(1);
