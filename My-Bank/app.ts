#! /usr/bin/env node

import inquirer from "inquirer";

//Bank account interface

interface BankAccount {
  accountNumber: number;
  balance: number;
  withdraw(amount: number): void;
  deposit(amount: number): void;
  checkBalance(): void;
}

//Bank account class

class BankAccount implements BankAccount {
  accountNumber: number;
  balance: number;

  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  //debit money
  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `Withdrawal of $${amount} successful. Your remaining balance is $${this.balance}`
      );
    } else {
      console.log("Insufficient balaance");
    }
  }

  //deposit money

  deposit(amount: number): void {
    if (amount >= 100) {
      amount -= 1; //1$ fee charged for depositing 100$ or more
      this.balance += amount;
      console.log(
        `Deposit of $${amount} successful. Remaining balance is $${this.balance}`
      );
    }
    if (amount < 100) {
      this.balance += amount;
      console.log(
        `Deposit of $${amount} successful. Remaining balance is $${this.balance}`
      );
    }
  }

  //check balance

  checkBalance(): void {
    console.log(`Current balance: $${this.balance}`);
  }
}

//creating user class

class User {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  phone: number;
  account: BankAccount;

  constructor(
    firstName: string,
    lastName: string,
    gender: string,
    age: number,
    phone: number,
    account: BankAccount
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.phone = phone;
    this.account = account;
  }
}

//creating bank accounts

const accounts: BankAccount[] = [
  new BankAccount(1234, 400),
  new BankAccount(1235, 600),
  new BankAccount(1236, 2500),
  new BankAccount(1237, 1000),
];
// console.log(accounts);

//creating users

const users: User[] = [
  new User("Qamar", "Khan", "Male", 25, 3422758294, accounts[0]), //1234

  new User("Shanzey", "Shah", "Female", 20, 3136370443, accounts[1]), //1235

  new User("Muhammad", "Abdullah", "Male", 21, 3155639870, accounts[2]), //1236

  new User("Muhammad", "Uzair", "Male", 20, 3153651696, accounts[3]), //1237
];

//function to give logic performing in bank

async function service() {
  do {
    const pinInput = await inquirer.prompt({
      name: "accountNumber",
      type: "number",
      message: "Enter your account number:",
    });
    const user = users.find(
      (user) => user.account.accountNumber === pinInput.accountNumber
    );
    if (user) {
      console.log(`Welcome ${user.firstName} ${user.lastName}!\n`);

      const ans = await inquirer.prompt([
        {
          name: "select",
          type: "list",
          message: "Select an operation: ",
          choices: ["Deposit", "Withdraw", "Check Balance", "Exit"],
        },
      ]);
      switch (ans.select) {
        case "Deposit":
          const depositAmount = await inquirer.prompt({
            name: "DepositA",
            type: "number",
            message: "Enter the amount to deposit:",
          });
          user.account.deposit(depositAmount.DepositA);

          break;

        case "Withdraw":
          const WithdrawAmount = await inquirer.prompt({
            name: "withdrawA",
            type: "number",
            message: "Enter the amount to withdraw:",
          });
          user.account.withdraw(WithdrawAmount.withdrawA);
          break;

        case "Check Balance":
          user.account.checkBalance();
          break;

        default:
          console.log(`Exiting Bank Program..`);
          console.log();
          console.log(`Thanks for using our bank service.`);
          return;
      }
    } else {
      console.log(`Invalid account number, please try again.`);
    }
  } while (true);
}

service();
