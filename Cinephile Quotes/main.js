#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "confirm",
        message: "Do you want to start?",
        type: "confirm",
        default: "true"
    }
]);
if (answer.confirm) {
    console.log();
    console.log(chalk.bgGreen("<<Welcome to the Cinephile Quotes, where every line spoken is a piece of cinematic gold>>"));
    console.log();
}
let condition = true;
while (condition) {
    let moviesQuotes = [
        "“I'm gonna make him an offer he can't refuse. ~ Vito Corleone” - 'The Godfather'",
        "“I think the only thing behind the mask is pain. ~ Batman” - The Dark Knight",
        "“Vengeance won't change the past, mine or anyone else's. I have to become more. People need hope. ~ Batman” - 'The Batman'",
        "“The hardest choices require the strongest wills. ~ Thanos” - 'Avengers: Infinity War'",
        "“When I was sixteen, I won a great victory. I felt in that moment I would live to be a hundred. Now I know I shall not see thirty. ~ Baldwin IV” - 'Kingdom of Heaven'",
        "“Hope is a good thing, maybe the best of thing and no good thing ever dies. ~ Stephen King” - 'The Shawshank Redemption'",
        "“The only thing we can count on is ourselves. ~ Cooper” - 'Interstellar'",
        "“Dreams feel real while we're in them. It's only when we wake up that we realize something was actually strange. ~ Dom Cobb” - 'Inception'",
        "“Our lives are defined by opportunities, even the ones we miss. ~ Benjamin Button” - 'Curious Case of Benjamin Button'",
        "“And they found you amusing for a while, the people of this city, but the one thing they love more then a hero... is to see a hero fail. ~ Green Goblin” - 'Spiderman'",
        "“Amateurs seeks the sun and get eaten. Power stays in the shadows. ~ Lewis Strauss” - 'Oppenheimer'",
        "“Pray for the best, prepare for the worst. ~ Detective Loki” - 'Prisoners'",
        "“It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward. ~ Rocky” - 'Rocky Balboa'",
    ];
    let showsQuotes = [
        "“Every sacrifice we make needs to be for the greater good. ~ Rick Grimes” - 'The Walking Dead'",
        "“Everybody works for points. You work, you live. You don't work, well, you don't live. ~ Negan Smith” - 'The Walking Dead'",
        "“You either run from things, or you face them. ~ Jesse Pinkman” - 'Breaking Bad'",
        "“Sometimes, to get what you want, you have to do things you never thought you would.. ~ Thomas Shelby” - 'Peaky Blinders'",
        "“There's always a way. You just have to find it. ~ Michael Scofield” - 'Prison Break'",
        "“Power is only given to those who are prepared to lower themselves to pick it up. ~ Ragnar Lothbrok” - 'Vikings'",
        "“Alone is what I have. Alone protects me. ~ Sherlock Holmes” - 'Sherlock'",
    ];
    let answer1 = await inquirer.prompt([
        {
            name: "choose",
            message: "Which category do you want to select?",
            type: "list",
            choices: ["Movies", "Shows"]
        }
    ]);
    if (answer1.choose === "Movies") {
        const genMovies = Math.floor(Math.random() * moviesQuotes.length);
        console.log();
        console.log(chalk.yellow(moviesQuotes[genMovies]));
        console.log();
    }
    else if (answer1.choose === "Shows") {
        const genShows = Math.floor(Math.random() * showsQuotes.length);
        console.log();
        console.log(chalk.yellow(showsQuotes[genShows]));
        console.log();
    }
    let con = await inquirer.prompt({
        name: "cond",
        message: "Do you wanna continue?",
        type: "list",
        choices: ["Yeah", "Nah"],
        default: true
    });
    if (con.cond === "Nah") {
        condition = false;
        console.log();
        console.log(chalk.cyan("“For me, this is the end of a beautiful friendship. ~ Neil” - 'Tenet'"));
    }
}
