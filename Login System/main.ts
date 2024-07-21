#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Credentials {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

class UserName {
  firstName: string;
  lastName?: string;
  constructor(fName: string, lName?: string) {
    this.firstName = fName;
    this.lastName = lName;
  }
}

const users: Credentials[] = [
  new Credentials("demo@gmail.com", "1000"),
  new Credentials("abd@gmail.com", "1001"),
  new Credentials("uzr@gmail.com", "1002"),
  new Credentials("qmr@gmail.com", "1003"),
  new Credentials("hmz@gmail.com", "1004"),
  new Credentials("shanz@gmail.com", "1005"),
];

const userName: UserName[] = [
  new UserName("Alexa", ""),
  new UserName("Abdullah", "Nadeem"),
  new UserName("Uzair", "Nadeem"),
  new UserName("Qamar", "Siddiqui"),
  new UserName("Hamzah", "Syed"),
  new UserName("Shanzey", "Shah"),
];

const userMap = new Map<string, UserName>();

users.forEach((user, index) => {
  userMap.set(user.email, userName[index]);
});

async function loginUser(): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const answer = await inquirer.prompt([
        {
          name: "email",
          type: "input",
          message: "Enter your email:",
        },
        {
          name: "password",
          type: "password",
          message: "Enter you password:",
          mask: "*",
        },
      ]);
      const user = users.find(
        (u) => u.email === answer.email && u.password === answer.password
      );

      if (user) {
        const userNames = userMap.get(user.email);
        setTimeout(() => {
          console.log();

          resolve(
            chalk.green(
              `${userNames?.firstName} ${userNames?.lastName}: Logged in Successfully`
            )
          );
        }, 2000);
        setTimeout(() => {
          console.log(chalk.blue("<<<------------------------->>>"));

          console.log(chalk.cyan(`Welcome back ${userNames?.firstName}`));
        }, 3000);
      } else {
        reject(chalk.red("Invalid password or email"));
      }
    } catch (error) {
      reject("Something went wrong");
    }
  });
}

loginUser()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => console.log(error));
