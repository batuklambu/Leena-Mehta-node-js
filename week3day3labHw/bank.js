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
  withdrawals(balance) {
    if($)
    return (balance = balance - 15000);
  }
}

const bankAccount = new BankAccount(12345, "Jim Morris", 50000);
console.log(bankAccount);
console.log(bankAccount.getAcctnum());
console.log(bankAccount.deposits());
console.log(bankAccount.withdrawals(50000));

class CheckingAccount extends BankAccount {
  constructor(overdraftEnabled = true, acctnum, ownername, balance) {
    super(acctnum, ownername, balance);
    this.overdraftEnabled = overdraftEnabled;
  }

    withdrawals(balance) {
        if(this.overdraftEnabled===true && balance===0){
            console.log(`Implement the overdraft facility in checking account`);
     } else {
       console.log(`Dont impliment the overdraft facility`);
     }


    // if (balance === - && this.overdraftEnabled === false) {
    //   console.log(`Implement the overdraft facility in checking account`);
    // } else {
    //   console.log(`Dont impliment the overdraft facility`);
    // }
  }
}

// )const checkingAccount =new CheckingAccount(12345,"Leena",50000,false
const checkingAccount = new CheckingAccount(true,12345,"Leena,50000")
console.log(checkingAccount)
console.log(bankAccount.withdrawals(0));
