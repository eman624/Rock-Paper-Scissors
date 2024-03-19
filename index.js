function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "You tie! Neither player wins!";
  }

  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return "You Lose! Paper beats Rock";
  }

  if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    return "You Lose! Scissors beats Paper";
  }

  if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection == "SCISSORS" && computerSelection === "ROCK") {
    return "you Lose! Rock beats Scissors";
    return;
  }
}

function getPlayerChoice() {
  const buttons = document.querySelectorAll("button");

  for (btn of buttons) {
    btn.addEventListener("click", function () {
      return this.textContent;
    });
  }
}

const gameOptions = { ROCK: "ROCK", PAPER: "PAPER", SCISSORS: "SCISSORS" };

function getComputerChoice() {
  var randNum = Math.floor(Math.random() * Object.keys(gameOptions).length);
  var randOption = gameOptions[Object.keys(gameOptions)[randNum]];

  return randOption;
}

const Score = { playerScore: 0, computerScore: 0 };
function playGame() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

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

getComputerChoice();

// console.log(Score.playerScore);
// console.log(Score.computerScore);
