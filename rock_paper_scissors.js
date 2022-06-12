"use strict";

const scoreboard = {
  wins: 0,
  losses: 0,
  draws: 0
};

function computerPlay() {
  const choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function checkIfRandom(howMuch) {
  // testing function for computerPlay()
  let rock, paper, scissors;
  rock = paper = scissors = 0;
  for (let i = 0; i < howMuch; i++) {
    switch (computerPlay()) {
      case "Rock":
        rock += 1;
        break;
      case "Paper":
        ++paper;
        break;
      case "Scissors":
        ++scissors;
        break;
    }
  }
  let lista = [rock, paper, scissors];
  return lista;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a draw! You both chose ${computerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection == -"Scissors" && computerSelection === "Paper")
  ) {
    return `You win! Your ${playerSelection} beats ${computerSelection}`;
  } else {
    // Computer wins
    return `You loose! Computer's ${computerSelection} beats ${playerSelection}`;
  }
}

function playerPlay() {
  let playerSelection = makeCaseInsetentive(
    prompt('Write "Rock", "Paper" or "Scissors"')
  );
  if (
    playerSelection == "Rock" ||
    playerSelection == "Paper" ||
    playerSelection === "Scissors"
  ) {
    return playerSelection;
  } else {
    alert("You made a typo, write one more time");
    return playerPlay();
  }
}

function playRoundButton(e) {
  let playerSelection = e.target.dataset.choice;
  let computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    displayResult(`It's a draw! You both chose ${computerSelection}`);
    scoreboard.draws += 1;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection == -"Scissors" && computerSelection === "Paper")
  ) {
    displayResult(
      `You win! Your ${playerSelection} beats ${computerSelection}`
    );
    scoreboard.wins += 1
  } else {
    // Computer wins
    displayResult(
      `You loose! Computer's ${computerSelection} beats ${playerSelection}`
    );
    scoreboard.losses += 1
  }
}

function playAgain() {
  scoreboard.wins = scoreboard.losses = scoreboard.draws = 0;
  const counter = document.querySelector('.counter');
  counter.textContent = `Wins: 0, Losses: 0, Draws: 0`
  
}

function makeButtons() {
  const buttons = document.querySelectorAll("button[data-choice]");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", e => {
      playRoundButton(e);
      displayScore();
      if (scoreboard.wins >= 5) {
        const displayer = document.querySelector(".display");
        displayer.textContent = 'YOU WON! Press any button to start again';
        playAgain();
      }
      if (scoreboard.losses >= 5) {
        const displayer = document.querySelector(".display");
        displayer.textContent = 'YOU LOST! Press any button to start again'
        playAgain();
      }
    });
  }
}

function displayResult(result) {
  const displayer = document.querySelector(".display");
  displayer.textContent = result;
}

function displayScore() {
  const counter = document.querySelector('.counter');
  counter.textContent = `Wins: ${scoreboard.wins}, Losses: ${scoreboard.losses}, Draws: ${scoreboard.draws}`
};

makeButtons();
