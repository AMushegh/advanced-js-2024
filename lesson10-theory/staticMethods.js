class MyObject {
  static anun = "static anun";
  anun = "anun";
  anun = "anun 2";

  static values() {
    console.log("static values");
  }

  static values() {
    console.log("static values 2");
  }

  values() {
    console.log("values");
  }
}

class Child extends MyObject {
  static values() {
    console.log("static child values");
  }
}

Child.values();
