function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  }

  if (playerSelection === "ROCK") {
    if (computerSelection === "SCISSORS") {
      return "You Win! Rock beats Scissors";
    } else {
      return "You Lose Paper beats Rock";
    }
  }

  if (playerSelection === "PAPER") {
    if (computerSelection === "ROCK") {
      return "You Win! Paper beats Rock";
    } else {
      return "You Lose! Scissors beats Paper";
    }
  }

  if (playerSelection === "SCISSORS") {
    if (computerSelection === "ROCK") {
      return "You Lose! Rock beats Scissors";
    } else {
      return "YOU Win! Scissors beats Paper";
    }
  }
}

function getPlayerChoice() {
  let choice = prompt("Enter Rock, Paper, or Scissors");
  return choice.toUpperCase();
}

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "ROCK";
  } else if (randomNum === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playGame() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const Score = { playerScore: 0, computerScore: 0 };

  const roundOutCome = playRound(playerSelection, computerSelection);
  checkScore(roundOutCome, Score);
  console.log(roundOutCome);

  return roundOutCome;
}

function checkScore(outcome, Score) {
  let check = outcome;
  let checkWin = check.search("Win");
  let checkLost = check.search("Lose");

  if (checkWin != -1) {
    Score.playerScore++;
  }
  if (checkLost != -1) {
    Score.computerScore++;
  }
}

for (let i = 1; i <= 5; i++) {
  playGame();
}

console.log(Score.playerScore);
console.log(Score.computerScore);
