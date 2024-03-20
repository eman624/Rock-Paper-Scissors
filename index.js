// const Score = { playerScore: 0, computerScore: 0 };

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "You tie! Neither player wins!";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    computerScore++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  }
}

function getComputerChoice() {
  const gameOptions = ["ROCK", "PAPER", "SCISSORS"];
  let randNum = Math.floor(Math.random() * gameOptions.length);

  return gameOptions[randNum];
}

function setPlayersChoices() {
  const buttons = document.querySelectorAll("button");

  for (button of buttons) {
    button.addEventListener("click", function () {
      const playerSelection = this.textContent;
      const computerSelection = getComputerChoice();
      const outCome = playRound(playerSelection, computerSelection);
      console.log(outCome);

      console.log(playerScore);
      console.log(computerScore);

      if (playerScore === computerScore) {
        console.log("You tie!");
      } else if (playerScore > computerScore) {
        console.log("You Win!");
      } else {
        console.log("You Lose!");
      }
    });
  }
}

function playGame() {
  setPlayersChoices();
}

playGame();
