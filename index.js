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
  const body = document.querySelector("body");

  const div = document.createElement("div");
  div.classList.add("result");
  body.appendChild(div);

  const score = document.createElement("h2");
  const winOrLose = document.createElement("h2");

  const h2Winner = document.createElement("h2");
  h2Winner.classList.add("winner");
  h2Winner.textContent = "You Win!";
  const h2Loser = document.createElement("h2");
  h2Loser.classList.add("loser");
  h2Loser.textContent = "You Lose!";

  for (button of buttons) {
    button.addEventListener("click", function () {
      const playerSelection = this.textContent;
      const computerSelection = getComputerChoice();
      const outCome = playRound(playerSelection, computerSelection);
      winOrLose.textContent = outCome.toString();
      div.appendChild(winOrLose);

      score.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
      div.appendChild(score);

      if (playerScore === 5) {
        div.appendChild(h2Winner);
      } else if (computerScore === 5) {
        div.appendChild(h2Loser);
      }
    });
  }
}

function playGame() {
  setPlayersChoices();
}

playGame();
