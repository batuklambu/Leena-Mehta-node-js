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
      console.log(`deposit the amount and add the amount to ${this.balance}`);
    } else {
      console.log(`Account don't Match`);
    }
  }
  withdrawals(acctype, balance) {
    if ((balance = 50000 && acctype == `checking acc`)) {
      balance = this.balance - 15000;
    } else {
      acctype = "checkingaccount with overdraft facility";
    }
  }
}
const bankAccount = new BankAccount(12345, "Jim Morris", 50000);
console.log(bankAccount);
console.log(bankAccount.getAcctnum());
console.log(bankAccount.deposits());
console.log(bankAccount.withdrawals("checking acc", 50000));

class CheckingAccount extends BankAccount {
  constructor(overdraftEnabled, acctnum, ownername, balance) {
    super(acctnum, ownername, balance);
    this.overdraftEnabled = overdraftEnabled;
  }

  withdrawals(overdraftEnabled) {
    super.withdrawals(acctype, this.balance);
    if (this.overdraftEnabled === true && acctype == `checking account`) {
      console.log(`Implement the overdraft facility in checking account`);
    } else {
      console.log(`Dont impliment the overdraft facility`);
    }
  }
}

const checkingAccount = new CheckingAccount(true, 12345, "Leena", 50000);
console.log(checkingAccount);
// console.log(checkingAccount.withdrawals(`checking account`, 20000));

class SavingAccount extends BankAccount {
  constructor(acctnum, ownername, balance) {
    super(acctnum, ownername, balance);
  }

  withdrawals(overdraftdisabled) {
    // super.withdrawals(acctype, balance);
    if (this.overdraftdisabled === true && acctype == `savings account`) {
      console.log(` Disallow withdrawls completly`);
    } else {
      console.log(`Allow withdrawls `);
    }
  }
}

const savingAccount = new SavingAccount(12345, "Leena", 50000);
console.log(savingAccount);
console.log(savingAccount.withdrawals(`savings account`, 15000));
