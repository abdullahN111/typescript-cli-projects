// rock paper scissor game
let player1 = "Rock";
let player2 = "Scissors";
if (player1 === player2) {
    console.log("It's a tie!");
}
else if ((player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "Scissors" && player2 === "Paper") ||
    (player1 === "Paper" && player2 === "Rock")) {
    console.log("Player 1 wins!");
}
else {
    console.log("Player 2 wins!");
}
export {};
