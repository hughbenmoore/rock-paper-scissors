//Create a user's choice variable

//Create a computer's choice variable
let getComputerChoice = Math.random();

if (getComputerChoice < 0.34) {
	getComputerChoice = "rock";
} else if (getComputerChoice < 0.67) {
	getComputerChoice = "paper";
} else {
	getComputerChoice = "scissors"
};

console.log("Computer chooses: " + getComputerChoice);
//Create a result variable

//Create a function that compares the user's choice and the computer's choice and determines a winner

