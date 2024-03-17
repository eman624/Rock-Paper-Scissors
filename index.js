function playRound(playerSelection, computerSelection) {
  console.log(`player selection: ${playerSelection}`);
  console.log(`computer selection: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    return "tie";
  } else if (computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (computerSelection === "scissors") {
    return "You win! Rock Beats Scissors";
  }
}

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
