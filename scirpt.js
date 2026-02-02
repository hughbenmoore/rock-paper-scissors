// Generate Computer Choice
function getComputerChoice() {
	let computerChoice = Math.random();
	if (computerChoice < 0.33) {
		return "rock";
	} else if (computerChoice < 0.67) {
		return "paper";
	} else {
		return "scissors";
	}
}

// Generate Human Choice
function getHumanChoice() {
	let humanChoice = prompt("Do you choose rock, paper or scissors?");
	return humanChoice.toLowerCase();
}

// Declare Score Variables
let humanScore = 0;
let computerScore = 0;

// Write Logic to Play One Round
function playRound(human, computer) {
	if (human === computer) {
		console.log("It's a tie!");
	} else if (
		(human === "rock" && computer === "scissors") ||
		(human === "paper" && computer === "rock") ||
		(human === "scissors" && computer === "paper")) {
		console.log("Human wins!");
		humanScore ++;
	} else {
		console.log("Computer wins!");
		computerScore ++;
	}
}

//Write Logic to Play Full Game
function playGame() {
	for (let i = 0; i < 5; i++) {
		playRound(getHumanChoice(), getComputerChoice());
	}
	console.log("Final Score - Human: " + humanScore + " Computer: " + computerScore);
}