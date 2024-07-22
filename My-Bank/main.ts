interface myBankAccount {
  credit(amount: number): void;
  debit(amount: number): void;
}

class BankAccount implements myBankAccount {
  accountBalance: number;

  constructor(accountBalance: number) {
    this.accountBalance = accountBalance;
  }

  public credit(amount: number) {
    if (amount > 0) {
      this.accountBalance += amount;
      console.log(
        `Credit successfully and your balance is: ` + this.accountBalance
      );
    } else {
      console.log("Credit unsuccessful");
    }
  }

  public debit(amount: number) {
    if (amount > 0 && amount < this.accountBalance) {
      this.accountBalance -= amount;
      console.log(
        `Debit successfully share and your balance is: ` + this.accountBalance
      );
    } else {
      console.log("Debit unsuccessful");
    }
  }
}

class Customer {
  person: {
    firstName: string;
    lastName: string;
  };
  age: number;
  gender: string;
  mobile: number;
  bankAccount: BankAccount;

  constructor(
    person: { firstName: string; lastName: string },
    age: number,
    gender: string,
    mobile: number,
    bankAccount: BankAccount
  ) {
    this.person = person;
    this.age = age;
    this.gender = gender;
    this.mobile = mobile;
    this.bankAccount = bankAccount;
  }

  public display() {

    console.log("Name: "+this.person.firstName+ " " +this.person.lastName);
    console.log("Age: " +this.age);
    console.log("Gender: "+this.gender);
    console.log("Mobile: "+this.mobile);
    console.log("Amount in Bank Account: "+this.bankAccount.accountBalance);
    console.log();
    
  }

}

const a1 = new BankAccount(80000)
const c1 = new Customer({firstName: "Muhammad", lastName: "Abdullah"}, 21, "Male", 35813198427492, a1)

c1.display()
c1.bankAccount.debit(5000)
console.log();
const a2 = new BankAccount(65000)
const c2 = new Customer({firstName: "Muhammad", lastName: "Uzair"}, 20, "Male", 5365436437264, a2)

c2.display()
c2.bankAccount.debit(3000)
console.log();

