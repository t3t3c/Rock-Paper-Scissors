"use strict";

function computerPlay() {
  let randomNumber = Math.random() * 3; // *3 to get value between 0 and 3
  if (randomNumber <= 1) {
    return "Rock";
  } else if (randomNumber <= 2) {
    return "Paper";
  } else {
    // random number <= 3
    return "Scissors";
  }
}

function checkIfRandom(howMuch) {
  let rock = (paper = scissors = 0);
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

function makeCaseInsetentive(userInput) {
  if (userInput == null) {
    return "";
  } else {
    return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
  }
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

function game() {
  // play the game 5 times
  for (let i = 0; i < 5; i++) {
    let result = playRound(playerPlay(), computerPlay());
    console.log(result);
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

game();

console.log('this is made in a test branch');