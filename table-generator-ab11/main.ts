#! /usr/bin/env node

import inquirer from "inquirer";


let condition = true;

while(condition) {

   let table = await inquirer.prompt({

        name: "number",
        type: "input",
        message: "Enter a number"

   })
   
   let myNum = table.number

   if (myNum) {
    console.log();
    
    console.log(`The Table of ${myNum}\n`);

    for (let i = 1; i <= 10; i++) {

        console.log(`${myNum} x ${i} = ${myNum * i}`);
        
    }
    
   } else {
    console.log("Please provide input in numeric form");
    
   }

   let again = await inquirer.prompt({
           
        name: "askUser",
        message: "Do you want to continue?",
        type: "list",
        choices: ["Yes","No"]

   })

   if (again.askUser === "No") {
        condition = false;
        
        console.log('\n Thank you for using Table Generator');
        
   }

}

