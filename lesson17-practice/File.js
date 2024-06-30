class File {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  rename(newName) {
    this._name = newName;
  }
}

const a = new File("a.txt");

a.name = "adwajkl"; // should not change name
a.rename("b.txt"); // should change name

console.log(a.name);

class Image extends File {
  constructor(pixels, name) {
    super(name);
    this._pixels = pixels;
  }

  get pixels() {
    return this._pixels;
  }
}

let pixels = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
];

let image = new Image(pixels, "imageName.png");
