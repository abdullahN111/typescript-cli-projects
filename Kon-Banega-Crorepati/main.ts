#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { ExitStatus } from "typescript";


let condition = true;

let welcome = chalk.bgYellow.bold("<<<---Welcome to the hot seat of Kon Banega Crorepati--->>>");
console.log();

console.log(welcome);
console.log();

while (condition) {
    
    
    let answer = await inquirer.prompt(
        [
            {
                name: "confirm",
                type: "confirm",
                message: "You finally here at the Hot seat of KBC, can we start the game?",
                default: "true"
                
            }
        ]
    );
    console.log();
    
    
    if (answer.confirm) {
        console.log(chalk.green("Here we go.."))
        console.log(chalk.green("..."))
        console.log();
    }
let answer1 = await inquirer.prompt(
    [
        {
            name: "q1",
            message: "1) Which year did Pakistan gain independence?",
            type: "list",
            choices: ["A) 1945",
                "B) 1947",
                "C) 1950",
                "D) 1952"],
            default: "false"
            
        }
    ]
);
console.log();


if (answer1.q1 === "B) 1947") {
    console.log(chalk.green("Correct answer."));
    console.log();
    console.log(chalk.yellow("You've won 1000 rupees!!!"));
    
    console.log();
    
} else {
    console.log(chalk.red("Wrong answer! The Correct answer is B) 1947)"));
    console.log(chalk.blue("Hard luck to you, you've lost it before it started."));
    break;
    
}

let answer2 = await inquirer.prompt (
    {
        name: "q2",
        message: "2) Which one is the National flower of Pakistan?",
        type: "list",
        choices: ["A) Jasmine",
        "B) Rose",
        "C) Lotus",
        "D) Sunflower"],
        default: "false"
        
    }
);
console.log();

if (answer2.q2 === "A) Jasmine") {
    console.log(chalk.green("Correct answer."));
    console.log();
    console.log(chalk.yellow("You've won 2000 rupees!!!"));
    
    console.log();
    
} else {
    console.log(chalk.red("Wrong answer!" + "The Correct answer is A) Jasmine)"));
    console.log(chalk.blue("Hard luck to you."));
    console.log();
    
    console.log(chalk.yellow("You've won 1000 only."));
    break;
    
}

let answer3 = await inquirer.prompt (
    {
        name: "q3",
        message: "3) Which Pakistani city is known as the City of Lights?",
        type: "list",
        choices: ["A) Lahore",
        "B) Quetta",
        "C) Islamabad",
        "D) Karachi"],
        default: "false"
        
    }
);
console.log();


if (answer3.q3 === "D) Karachi") {
    console.log(chalk.green("Correct answer."));
    console.log();
    console.log(chalk.yellow("You've won 5000 rupees!!!"));
    
    console.log();
    
} else {
    console.log(chalk.red("Wrong answer!" + "The Correct answer is D) Karachi)"));
    console.log(chalk.blue("Hard luck to you."));
    console.log();
    
    console.log(chalk.yellow("You've won 2000 only."));
    break;
    
}
let answer4 = await inquirer.prompt (
    {
        name: "q4",
        message: "4) When did Pakistan won their first ever Cricket World Cup?",
        type: "list",
        choices: ["A) 2009",
        "B) 2007",
        "C) 1992",
        "D) 1999"],
        default: "false"
        
    }
);
console.log();


if (answer4.q4 === "C) 1992") {
    console.log(chalk.green("Correct answer."));
    console.log();
    console.log(chalk.yellow("You've won 10000 rupees!!!"));
    
    console.log();
    
} else {
    console.log(chalk.red("Wrong answer!" + "The Correct answer is C) 1992)"));
    console.log(chalk.blue("Hard luck to you."));
    console.log();
    
    console.log(chalk.yellow("You've won 5000 only."));
    break;
    
}
let answer5 = await inquirer.prompt (
    {
        name: "q5",
        message: "5) What percentage of the Earth's surface is covered by water?",
        type: "list",
        choices: ["A) 53%",
        "B) 71%",
        "C) 17%",
        "D) 90%"],
        default: "false"
        
    }
);
console.log();


if (answer5.q5 === "B) 71%") {
    console.log(chalk.green("Correct answer."));
    console.log();
    console.log(chalk.yellow("You've won 30000 rupees!!!"));
    
    console.log();
    
} else {
    console.log(chalk.red("Wrong answer!" + "The Correct answer is B) 71%"));
    console.log(chalk.blue("Hard luck to you."));
    console.log();
    
    console.log(chalk.yellow("You've won 10000 only."));
    break;
    
}
let answer6 = await inquirer.prompt (
    {
        name: "q6",
        message: "6) Which Superhero wears Black costume?",
        type: "list",
        choices: ["A) Ironman",
        "B) Superman",
        "C) Batman",
        "D) Spiderman"],
        default: "false"
        
    }
);
console.log();


if (answer6.q6 === "C) Batman") {
    console.log(chalk.green("Correct answer."));
    console.log();
    console.log(chalk.yellow("You've won 60000 rupees!!!"));
    
    console.log();
    
} else {
    console.log(chalk.red("Wrong answer!" + "The Correct answer is C) Batman"));
    console.log(chalk.blue("Hard luck to you."));
    console.log();
    
    console.log(chalk.yellow("Your winnings decreased to 10000."));
    break;
    
}
let answer7 = await inquirer.prompt (
    {
        name: "q7",
        message: "7) Who was the first female Prime Minister of Pakistan?",
        type: "list",
        choices: ["A) Mohtarma Fatima Jinnah",
        "B) Mohtarma Benazir Bhutto",
        "C) Hina Rabbani Khar",
        "D) Asma Jahangir"],
        default: "false"
        
    }
);
console.log();


if (answer7.q7 === "B) Mohtarma Benazir Bhutto") {
    console.log(chalk.green("Correct answer."));
    console.log();
    console.log(chalk.yellow("You've won 120000 rupees!!!"));
    
    console.log();
    
} else {
    console.log(chalk.red("Wrong answer!" + "The Correct answer is B) Mohtarma Benazir Bhutto"));
    console.log(chalk.blue("Hard luck to you."));
    console.log();
    
    console.log(chalk.red("Your winnings decreased to 30000."));
    console.log();
    console.log(chalk.bgGreen("Thank you for playing KBC"));
    console.log(chalk.bgCyan(`This game is not just about winning money,
     it's also a test of knowledge and courage. 
     You did very well and showed a lot of courage. 
     Come back again next time, and fulfill your dreams.`));
     
    
    
    break;
    
}
let answer8 = await inquirer.prompt (
    {
        name: "q8",
        message: "8) Who was the founder of the Mughal Empire in the Indian subcontinent?",
        type: "list",
        choices: ["A) Aurangzeb",
        "B) Timur",
        "C) Akbar",
        "D) Babur"],
        default: "false"
        
    }
);
console.log();


if (answer8.q8 === "D) Babur") {
    console.log(chalk.green("Correct answer."));
    console.log();
    console.log(chalk.yellow("You've won 360000 rupees!!!"));
    console.log();
    let ans1 = await inquirer.prompt(
        {
            name: "ans1",
            type: "list",
            message: `<You have won 360000, you can exit the game and collect your cheque, or do you want to continue the game?>`,
            choices: ["I want to continue","I want to exit"]

        }
    );
    if (ans1.ans1 === "I want to exit"){
        console.log(chalk.green("Thank you for playing KBC, you can collect the checque of 360000"));
        console.log();
        console.log(chalk.bgYellow("Come back again next time, and fulfill your dreams."));
        break;
    } 
     else {

    }
    

    console.log();
    
} else {
    console.log(chalk.red("Wrong answer! The Correct answer is D) Babur"));
    console.log(chalk.blue("Hard luck to you."));
    console.log();
    
    console.log(chalk.red("Your winnings decreased to 60000."));
    console.log();
    console.log(chalk.bgGreen("Thank you for playing KBC"));
    console.log();
    
    console.log(chalk.bgCyan(`This game is not just about winning money,
     it's also a test of knowledge and courage. 
     You did very well and showed a lot of courage. 
     Come back again next time, and fulfill your dreams.`));
     
    
    
    break;
    
}
let answer9 = await inquirer.prompt (
    {
        name: "q9",
        message: "9) Which Pakistani cricketer holds the record for the most centuries in Test cricket?",
        type: "list",
        choices: ["A) Younus Khan",
        "B) Misbah ul Haq",
        "C) Javed Miandad",
        "D) Imran Khan"],
        default: "false"
        
    }
);
console.log();


if (answer9.q9 === "A) Younus Khan") {
    console.log(chalk.green("Correct answer."));
    console.log();
    console.log(chalk.yellow("You've won 1280000 rupees!!!"));
    console.log();
    let ans2 = await inquirer.prompt(
        {
            name: "ans2",
            type: "list",
            message: `<You can exit the game and collect the cheque of 1280000,
            or do you want to continue the game?>`,
            choices: ["I want to continue","I want to exit"]

        }
    );
    if (ans2.ans2 === "I want to exit"){
        console.log(chalk.green("Thank you for playing KBC, you can collect the checque of 1280000"));
        console.log();
        console.log(chalk.bgYellow("Come back again next time, and fulfill your dreams."));
        break;
    } 
     else {

    }
    

    console.log();
    
} else {
    console.log(chalk.red("Wrong answer! The Correct answer is A) Younus Khan"));
    console.log(chalk.blue("Hard luck to you."));
    console.log();
    
    console.log(chalk.red("Your winnings decreased to 120000."));
    console.log();
    console.log(chalk.bgGreen("Thank you for playing KBC"));
    console.log();
    
    console.log(chalk.bgCyan(`This game is not just about winning money,
     it's also a test of knowledge and courage. 
     You did very well and showed a lot of courage. 
     Come back again next time, and fulfill your dreams.`));
     
    
    
    break;
    
}
let answer10 = await inquirer.prompt (
    {
        name: "q10",
        message: "10) What is the chemical symbol for gold?",
        type: "list",
        choices: ["A) Pb",
        "B) Au",
        "C) Fe",
        "D) Br"],
        default: "false"
        
    }
);
console.log();


if (answer10.q10 === "B) Au") {
    console.log(chalk.green("Correct answer."));
    console.log();
    console.log(chalk.yellow("You've won 2500000 rupees!!!"));
    console.log();
    let ans3 = await inquirer.prompt(
        {
            name: "ans3",
            type: "list",
            message: `<The next question can be tough or can be the game changer.
            You can exit the game and collect the cheque of 2500000,
            or do you want to continue the game?>`,
            choices: ["I want to continue","I want to exit"]

        }
    );
    if (ans3.ans3 === "I want to exit"){
        console.log(chalk.green("Thank you for playing KBC, you can collect the checque of 1280000"));
        console.log();
        console.log(chalk.bgYellow("Come back again next time, and fulfill your dreams."));
        break;
    } 
     else {

    }
    

    console.log();
    
} else {
    console.log(chalk.red("Wrong answer! The Correct answer is B) Au"));
    console.log(chalk.blue("Hard luck to you."));
    console.log();
    
    console.log(chalk.red("Your winnings decreased to 360000."));
    console.log();
    console.log(chalk.bgGreen("Thank you for playing KBC"));
    console.log();
    
    console.log(chalk.bgCyan(`This game is not just about winning money,
     it's also a test of knowledge and courage. 
     You did very well and showed a lot of courage. 
     Come back again next time, and fulfill your dreams.`));
     
    
    
    break;
    
}
let answer11 = await inquirer.prompt (
    {
        name: "q11",
        message: "11) Which ancient wonder of the world was located in present-day Iraq",
        type: "list",
        choices: ["A) Great Pyramid of Giza",
        "B) Statue of Zeus at Olympia",
        "C) Hanging Gardens of Babylon",
        "D) Colossus of Rhodes"],
        default: "false"
        
    }
);
console.log();


if (answer11.q11 === "C) Hanging Gardens of Babylon") {
    console.log(chalk.green("Correct answer."));
    console.log();
    console.log(chalk.yellow("You've won 5000000 rupees!!!"));
    console.log();
    let ans4 = await inquirer.prompt(
        {
            name: "ans4",
            type: "list",
            message: `<The next question can be tough or can be the game changer.
            You can exit the game and collect the cheque of 2500000,
            or do you want to continue the game?>`,
            choices: ["I want to continue","I want to exit"]

        }
    );
    if (ans4.ans4 === "I want to exit"){
        console.log(chalk.green("Thank you for playing KBC, you can collect the checque of 1280000"));
        console.log();
        console.log(chalk.bgYellow("Come back again next time, and fulfill your dreams."));
        break;
    } 
     else {

    }
    

    console.log();
    
} else {
    console.log(chalk.red("Wrong answer! C) Hanging Gardens of Babylon"));
    console.log(chalk.blue("Hard luck to you."));
    console.log();
    
    console.log(chalk.red("Your winnings decreased to 1280000."));
    console.log();
    console.log(chalk.bgGreen("Thank you for playing KBC"));
    console.log();
    
    console.log(chalk.bgCyan(`This game is not just about winning money,
     it's also a test of knowledge and courage. 
     You did very well and showed a lot of courage. 
     Come back again next time, and fulfill your dreams.`));
     
    
    
    break;
    
}
let answer12 = await inquirer.prompt (
    {
        name: "q12",
        message: `12) Which planet is known as the "Red Planet"?`,
        type: "list",
        choices: ["A) Venus",
        "B) Mars",
        "C) Mercury",
        "D) Saturn"],
        default: "false"
        
    }
);
console.log();


if (answer12.q12 === "B) Mars") {
    console.log(chalk.bgGreen("1 Croreee!"));
    
    console.log(chalk.green("Correct answer."));
    console.log();
    console.log(chalk.yellow("You've won 10000000 rupees!!!"));

    

    console.log();
    console.log(chalk.cyan("What a game it was, Congratulations to you! You played brilliantly."));
    console.log();
    console.log(chalk.bgCyan("Come back again next time, and fulfill your dreams."));
    
    
    
    
} else {
    console.log(chalk.red("Wrong answer! B) Mars"));
    console.log(chalk.blue("Hard luck to you."));
    console.log();
    
    console.log(chalk.red("Your winnings decreased to 1280000."));
    console.log();
    console.log(chalk.bgGreen("Thank you for playing KBC"));
    console.log();
    
    console.log(chalk.bgCyan(`This game is not just about winning money,
     it's also a test of knowledge and courage. 
     You did very well and showed a lot of courage. 
     Come back again next time, and fulfill your dreams.`));
     
    
    
    break;
    
}
break;
 
}


 




