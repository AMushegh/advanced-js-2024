class User {
  #cardNumber = "1111 2222 3333 4444";
  balance = 12222;

  get cardNumber() {
    let splitted = this.#cardNumber.split(" ");
    return `${splitted[0]} **** **** ${splitted[3]}`;
  }

  set addToBalance(v) {
    this.balance = this.balance + (v - v * 0.1);
  }
}

let mushegh = new User();
console.log(mushegh.cardNumber);
mushegh.addToBalance = 1000;
console.log(mushegh);
