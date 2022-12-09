class BankAccount {
  constructor(acctnum, ownername, balance) {
    this.acctnum = acctnum;
    this.ownername = ownername;
    this.balance = balance;
  }
  getAcctnum() {
    return `${this.acctnum}`;
  }

  deposits() {
    if (this.acctnum === 12345 && this.ownername === "Jim Morris") {
      return `deposit the amount and add the amount to ${this.balance}`;
    } else {
      return `Account don't Match`;
    }
  }
  withdrawals(withdraw) {
    if (this.balance >= withdraw) {
      this.balance -= withdraw;
      return `The withdraw your and the new blance is ${this.balance} `;
    } else {
      // acctype = "checkingaccount with overdraft facility";
      return "You don't have enough money";
    }
  }
}
class CheckingAccount extends BankAccount {
  constructor(overdraftEnabled, acctnum, ownername, balance) {
    super(acctnum, ownername, balance);
    this.overdraftEnabled = overdraftEnabled;
  }

  withdrawals(overdraftEnabled) {
    super.withdrawals();
    if (this.overdraftEnabled === true) {
      console.log(`Implement the overdraft facility in checking account`);
    } else {
      console.log(`Dont impliment the overdraft facility`);
    }
  }
}

class SavingAccount extends BankAccount {
  constructor(acctnum, ownername, balance) {
    super(acctnum, ownername, balance);
  }

  withdrawals(overdraftdisabled) {
    super.withdrawals();
    if (this.overdraftdisabled === true && acctype == `savings account`) {
      console.log(` Disallow withdrawls completly`);
    } else {
      console.log(`Allow withdrawls `);
    }
  }
}

const bankAccount = new BankAccount(12345, "Jim Morris", 50000);
console.log(bankAccount);
console.log(bankAccount.getAcctnum());
console.log(bankAccount.deposits());

console.log(bankAccount.withdrawals(100));

const checkingAccount = new CheckingAccount(true, 12345, "Leena", 50000);
console.log(checkingAccount);
console.log(checkingAccount.withdrawals(`checking account`, 20000));
const savingAccount = new SavingAccount(12345, "Leena", 50000);
console.log(savingAccount);
console.log(savingAccount.withdrawals(`savings account`, 15000));