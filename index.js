const Score = { playerScore: 0, computerScore: 0 };

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);

  if (playerSelection === computerSelection) {
    return "You tie! Neither player wins!";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    Score.playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    Score.computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    Score.playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    Score.computerScore++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    Score.playerScore++;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    Score.computerScore++;
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
    });
  }
}

function playGame() {
  setPlayersChoices();
}

playGame();
