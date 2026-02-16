// Event Listeners
const rockSelection = document.getElementById("rock");
const paperSelection = document.getElementById("paper");
const scissorsSelection = document.getElementById("scissors");

rockSelection.addEventListener("click", () => {
	playRound("rock", getComputerChoice());
});

paperSelection.addEventListener("click", () => {
	playRound("paper", getComputerChoice());
});

scissorsSelection.addEventListener("click", () => {
	playRound("scissors", getComputerChoice());
});

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
};

// Declare Score Variables
let humanScore = 0;
let computerScore = 0;

// Write Logic to Play One Round
function playRound(human, computer) {
	if (human === computer) {
		roundResults.textContent = "It's a tie!";
	} else if (
		(human === "rock" && computer === "scissors") ||
		(human === "paper" && computer === "rock") ||
		(human === "scissors" && computer === "paper")) {
		roundResults.textContent = "Human wins!";
		humanScore ++;
	} else {
		roundResults.textContent = "Computer wins!";
		computerScore ++;
	}
	scoreDisplay.textContent = `Score is Human: ${humanScore} | Computer: ${computerScore}`;
	if (humanScore === 5) {
		roundResults.textContent = "Human has reached target score of 5! Human wins!";
		disableButtons();
		return
	} else if (computerScore === 5) {
		roundResults.textContent = "Computer has reached target score of 5! Computer wins!";
		disableButtons();
		return
	};
};

// Turn off Buttons
function disableButtons() {
	rockSelection.disabled = true;
	paperSelection.disabled = true;
	scissorsSelection.disabled = true;
}

// Div Element Display
const roundResults = document.getElementById("roundResults");
const scoreDisplay = document.getElementById("score");

