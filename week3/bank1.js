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
    if ((balance === 50000 && acctype === `checking acc`)) {
      balance = this.balance - 15000;
      return "The balance has been reduced"
    } else {
    
      // acctype = "checkingaccount with overdraft facility";
      return "You cannot withdraw"
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
    if (this.overdraftEnabled === true ) {
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
console.log(bankAccount.withdrawals("checking acc", 50000));
const checkingAccount = new CheckingAccount(true, 12345, "Leena", 50000);
console.log(checkingAccount);
console.log(checkingAccount.withdrawals(`checking account`, 20000));
const savingAccount = new SavingAccount(12345, "Leena", 50000);
console.log(savingAccount);
console.log(savingAccount.withdrawals(`savings account`, 15000));
