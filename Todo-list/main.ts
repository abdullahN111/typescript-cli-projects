#!/usr/bin/env node

import inquirer from "inquirer";

let toDos = [];
let condition = true;


while(condition) {

    let addTask = await inquirer.prompt(
        [
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your to dos?"
        },

        {
            name: "addMore",
            type: "list",
            message: "Do you want to add more?",
            choices: ["Yes","No"],
            default: "false"
        }
    ]
);

toDos.push(addTask.todo)
condition = addTask.addMore
console.log(toDos)

if (addTask.addMore === "No") {
    condition = false; // Set condition to false to exit the loop
}
}

console.log("To-dos:", toDos);
console.log("Goodbye!");



