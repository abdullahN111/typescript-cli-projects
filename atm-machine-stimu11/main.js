#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000;
let myPin = 1570;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin:",
        type: "number"
    }
]);
if (pinAns.pin === myPin) {
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option:",
            type: "list",
            choices: ["Withdraw", "Check balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "withdrawalType",
                message: "Select withdrawal type:",
                type: "list",
                choices: ["Fast Cash", "Custom Amount"]
            }
        ]);
        if (amountAns.withdrawalType === "Fast Cash") {
            let fastCashAmount = await inquirer.prompt([
                {
                    name: "fastCashAmount",
                    message: "Select amount for Fast Cash:",
                    type: "list",
                    choices: [5000, 10000, 20000, 30000, 50000]
                }
            ]);
            if (fastCashAmount.fastCashAmount > myBalance) {
                console.log("Transaction failed!! Insufficient balance.");
            }
            else {
                myBalance -= fastCashAmount.fastCashAmount;
                console.log(`Successfully withdrawn ${fastCashAmount.fastCashAmount}`);
                console.log(`Your remaining balance is: ${myBalance}`);
            }
        }
        else if (amountAns.withdrawalType === "Custom Amount") {
            let customAmount = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount to withdraw:",
                    type: "number"
                }
            ]);
            if (customAmount.amount > myBalance) {
                console.log("Transaction failed!! Insufficient balance.");
            }
            else {
                myBalance -= customAmount.amount;
                console.log(`Successfully withdrawn ${customAmount.amount}`);
                console.log(`Your remaining balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log("Your balance is: $" + myBalance);
    }
}
else {
    console.log("Incorrect pin!!!");
}
