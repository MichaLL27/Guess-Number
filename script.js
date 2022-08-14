"use strict";
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎁';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //  When there is not input number
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔No number";
    displayMessage("⛔No number");

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number";
    displayMessage("Correct Number");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "rgb(64, 243, 64)";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too hight!" : "Too low";
      displayMessage(guess > secretNumber ? "Too hight!" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;

      // when your score is 0 = u losr the game
    } else {
      // document.querySelector(".message").textContent = "You lost the game!";
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
