const Score = { playerScore: 0, computerScore: 0 };

function playRound(playerSelection, computerSelection) {
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

function getPlayerChoice() {}

function getComputerChoice() {
  const gameOptions = ["ROCK", "PAPER", "SCISSORS"];
  let randNum = Math.floor(Math.random() * gameOptions.length);

  return gameOptions[randNum];
}

function playGame() {
  //   const computerSelection = getComputerChoice();
  //   const roundOutCome = playRound(playerSelection, computerSelection);
  //   console.log(`Player selection: ${playerSelection}`);
  //   console.log(`Computer selection: ${computerSelection}`);
  //   checkScore(roundOutCome, Score);
  //   console.log(roundOutCome);
  //   return roundOutCome;
}

// function checkScore(outcome, Score) {
//   let check = outcome;
//   let checkWin = check.search("Win");
//   let checkLost = check.search("Lose");

//   if (checkWin != -1) {
//     Score.playerScore++;
//   }
//   if (checkLost != -1) {
//     Score.computerScore++;
//   }
// }

const rockBtn = document.getElementById("ROCK");
const paperBtn = document.getElementById("PAPER");
const scissorsBtn = document.getElementById("SCISSORS");

rockBtn.addEventListener("click", () => {
  alert(playRound("ROCK", getComputerChoice));
});

paperBtn.addEventListener("click", () => {
  const playerSelection = "PAPER";
});

scissorsBtn.addEventListener("click", () => {
  const playerSelection = "SCISSORS";
});

playGame();

// console.log(Score.playerScore);
// console.log(Score.computerScore);
