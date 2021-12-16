"use strict";
// Emoji: Win + . (Windows10)
// CMD + CTRL + Space (macOs)

let secretNumber = Math.trunc(Math.random() * 20) + 1; // random num from 1 to 20
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When player loses
  if (score <= 1) {
    document.querySelector(".score").textContent = 0;
    document.querySelector(".message").textContent = "💥 You lost the game!";
  }
  // When input is incorrect
  else if (guess > 20 || guess < 1) {
    document.querySelector(".message").textContent =
      "⛔ Pick a Number between 1 and 20!";
  }
  // When guess is too low
  else if (guess < secretNumber) {
    score -= 1;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "📉 Too low!";
  }
  // When guess is too high
  else if (guess > secretNumber) {
    score -= 1;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "📈 Too high!";
  }
  // When player wins
  else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector("body").style.backgroundColor = "#4e9239";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // restore basic values
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
