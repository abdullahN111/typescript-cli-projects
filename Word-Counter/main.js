#! /usr/bin/env node
import inquirer from "inquirer";
//declare a constant "answer" assign it to the result of inquirer.prompt function
let condition = true;
while (condition) {
    const answers = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Enter your sentence:"
        },
        {
            name: "more",
            message: "Do you want to continue?",
            type: "list",
            choices: ["Yes", "No"],
            default: "false",
        }
    ]);
    console.log();
    const words = answers.sentence.trim().split(" ");
    console.log(words);
    //print the word count of the sentence
    console.log(`Your sentence contains ${words.length} words and ${answers.sentence.length} characters.`);
    if (answers.more === "No") {
        condition = false;
    }
}
