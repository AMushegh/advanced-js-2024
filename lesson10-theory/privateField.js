const REQUEST_TYPES = {
  Balance: 1,
  GetLoan: 2,
  CloseAccount: 3,
};

const DB = {
  1: { balance: 12576, loanSize: 217826871 },
  2: { balance: 1223576, loanSize: 217826432871 },
  3: { balance: 576, loanSize: 217312234826871 },
  4: { balance: 43212576, loanSize: 217824324326871 },
  5: { balance: 5476, loanSize: 217826423871 },
};

class Bank {
  constructor() {
    this.getUserRequest = this.getUserRequest.bind(this);
  }

  #getUserBalance(userId) {
    return DB[userId] ? DB[userId].balance : "not registered user";
  }

  #calculateForLoan(userId) {
    const userBalance = this.#getUserBalance(userId);
    if (userBalance > 600) {
      return DB[userId].loanSize * 0.8;
    } else {
      return "cannot accept loan";
    }
  }

  getUserRequest(type, userId) {
    console.log(this);
    switch (type) {
      case REQUEST_TYPES.Balance:
        return this.#getUserBalance(userId);
      case REQUEST_TYPES.GetLoan:
        return this.#calculateForLoan(userId);
    }
  }
}

const bank = new Bank();
bank.getUserRequest();
const a = bank.getUserRequest;
a();
