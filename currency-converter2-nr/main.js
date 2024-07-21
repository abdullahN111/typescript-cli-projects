#! /usr/bin/env node
import inquirer from "inquirer";
let condition = true;
let currency = {
    USD: 1, //base currency
    EUR: 0.92,
    PKR: 278,
    INR: 83.30,
    BTK: 109.50,
    AUD: 1.52,
    TRY: 32.08,
    CNY: 7.23,
    SAR: 3.75,
    Qar: 3.65,
    KWD: 0.31,
    AED: 3.67
};
while (condition) {
    let userAnswer = await inquirer.prompt([
        {
            name: "from",
            message: "Enter FROM currency",
            type: "list",
            choices: ["USD", "EUR", "PKR", "INR", "BTK", "AUD", "TRY", "CNY", "SAR", "QAR", "KWD", "AED"]
        },
        {
            name: "to",
            message: "Enter TO currency",
            type: "list",
            choices: ["USD", "EUR", "PKR", "INR", "BTK", "AUD", "TRY", "CNY", "SAR", "QAR", "KWD", "AED"]
        },
        {
            name: "amount",
            message: "Enter your amount",
            type: "number"
        },
    ]);
    let fromAmount = currency[userAnswer.from];
    let toAmount = currency[userAnswer.to];
    let amount = userAnswer.amount;
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    console.log(`Your currency value is: ${convertedAmount}`);
    let continueAnswer = await inquirer.prompt({
        name: "continue",
        message: "Do you want to continue?",
        type: "list",
        choices: ["Yes", "No"],
        default: "false"
    });
    if (continueAnswer.continue === "No") {
        condition = false;
    }
}
