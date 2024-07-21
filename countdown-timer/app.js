import inquirer from "inquirer";
const countdown = (time) => {
    if (time === 0) {
        console.log("Time over!");
        return;
    }
    console.log(time);
    setTimeout(() => countdown(time - 1), 1000);
};
inquirer.prompt({
    name: "time",
    type: "input",
    message: "Enter time, in seconds:",
    validate: (input) => !isNaN(Number(input)) || `Please enter a valid number.`
})
    .then((answers) => {
    const time = parseInt(answers.time, 10);
    countdown(time);
});
