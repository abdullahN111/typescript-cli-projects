#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

class Player {
     name: string;
     fuel: number = 100;
     constructor(name: string) {
        this.name = name;
     }
    fuelDecr() {
       let fuel = this.fuel - 25
       this.fuel = fuel
    }
fuelInc() {
 this.fuel = 100
}
}


class Opponent {
     name: string;
     fuel: number = 100;
     constructor(name: string) {
        this.name = name;
    
     }
     fuelDecr() {
        let fuel = this.fuel - 25
        this.fuel = fuel
        }
     }

let player = await inquirer.prompt({
    name: "name",
    message: "Enter your name:",
    type: "input"
})

// console.log(player.name);

let opponent = await inquirer.prompt({
    name: "opponent",
    message: "Select an Opponent:",
    type: "list",
    choices: ["Darkseid","Thanos","Homelander"]
    
    })
    
    // console.log(opponent.name);
    
    let p1 = new Player(player.name)
    let o1 = new Opponent(opponent.name)
    
    do {

if (opponent.opponent == "Thanos") {
    console.log();
   console.log(`${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(opponent.opponent)}`);
   console.log();
   
   
   let ask = await inquirer.prompt({
      name: "select",
      type: "list",
      choices: ["Attack","Drink portion","Run for your life"]
      
      })
if (ask.select == "Attack"){

    let num = Math.floor(Math.random() * 3)
     if (num > 0) {
       p1.fuelDecr()
       console.log();
       
       console.log(chalk.bold.red(`${p1.name} fuel: ${p1.fuel}`));
       console.log(chalk.bold.green(`${opponent.opponent} fuel: ${o1.fuel}`));

       if (p1.fuel <= 0) {
        console.log(chalk.bold.red.italic("You lose! Better luck next time"));
        process.exit()
        }
        
     } else {
        o1.fuelDecr()
        console.log(chalk.bold.green(`${p1.name} fuel: ${p1.fuel}`));
        console.log(chalk.bold.red(`${opponent.opponent} fuel: ${o1.fuel}`));
        if (o1.fuel <= 0) {
            console.log();
            
            console.log(chalk.bold.green.italic("Woah! You've won.."));
            process.exit()
            }
            }
            
        
            
            } else if (ask.select == "Drink portion") {
                p1.fuelInc()
                console.log();
                
                console.log(chalk.bold.italic.green(`You drink health portion, Your fuel is ${p1.fuel}`));
                
                
                } else {
                    console.log(chalk.bold.red.italic("You lose! Better luck next time"));
                    process.exit()
   
   
}
}
if (opponent.opponent == "Darkseid") {
    console.log();
   console.log(`${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(opponent.opponent)}`);
   console.log();
   
   
   let ask = await inquirer.prompt({
      name: "select",
      type: "list",
      choices: ["Attack","Drink portion","Run for your life"]
      
      })
if (ask.select == "Attack"){

    let num = Math.floor(Math.random() * 3)
     if (num > 0) {
       p1.fuelDecr()
       console.log();
       
       console.log(chalk.bold.red(`${p1.name} fuel: ${p1.fuel}`));
       console.log(chalk.bold.green(`${opponent.opponent} fuel: ${o1.fuel}`));

       if (p1.fuel <= 0) {
        console.log(chalk.bold.red.italic("You lose! Better luck next time"));
        process.exit()
        }
        
     } else {
        o1.fuelDecr()
        console.log(chalk.bold.green(`${p1.name} fuel: ${p1.fuel}`));
        console.log(chalk.bold.red(`${opponent.opponent} fuel: ${o1.fuel}`));
        if (o1.fuel <= 0) {
            console.log();
            
            console.log(chalk.bold.green.italic("Woah! You've won.."));
            process.exit()
            }
            }
            
        
            
            } else if (ask.select == "Drink portion") {
                p1.fuelInc()
                console.log();
                
                console.log(chalk.bold.italic.green(`You drink health portion, Your fuel is ${p1.fuel}`));
                
                
                } else {
                    console.log(chalk.bold.red.italic("You lose! Better luck next time"));
                    process.exit()
   
}
}
if (opponent.opponent == "Homelander") {
    console.log();
   console.log(`${chalk.bold.green(p1.name)} Vs ${chalk.bold.red(opponent.opponent)}`);
   console.log();
   
   
   let ask = await inquirer.prompt({
      name: "select",
      type: "list",
      choices: ["Attack","Drink portion","Run for your life"]
      
      })
if (ask.select == "Attack"){

    let num = Math.floor(Math.random() * 3)
     if (num > 0) {
       p1.fuelDecr()
       console.log();
       
       console.log(chalk.bold.red(`${p1.name} fuel: ${p1.fuel}`));
       console.log(chalk.bold.green(`${opponent.opponent} fuel: ${o1.fuel}`));

       if (p1.fuel <= 0) {
        console.log(chalk.bold.red.italic("You lose! Better luck next time"));
        process.exit()
        }
        
     } else {
        o1.fuelDecr()
        console.log(chalk.bold.green(`${p1.name} fuel: ${p1.fuel}`));
        console.log(chalk.bold.red(`${opponent.opponent} fuel: ${o1.fuel}`));
        if (o1.fuel <= 0) {
            console.log();
            
            console.log(chalk.bold.green.italic("Woah! You've won.."));
            process.exit()
            }
            }
            
        
            
            } else if (ask.select == "Drink portion") {
                p1.fuelInc()
                console.log();
                
                console.log(chalk.bold.italic.green(`You drink health portion, Your fuel is ${p1.fuel}`));
                
                
                } else {
                    console.log(chalk.bold.red.italic("You lose! Better luck next time"));
                    process.exit()
   
}
}

}

while(true)