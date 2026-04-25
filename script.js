let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const emojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
  };

  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").textContent = emojis[userChoice];
  document.getElementById("computer-choice").textContent = emojis[computerChoice];

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win! 🎉";
    userScore++;
  } else {
    result = "Computer Wins! 💻";
    computerScore++;
  }

  document.getElementById("result").textContent = result;
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;

  document.getElementById("user-score").textContent = 0;
  document.getElementById("computer-score").textContent = 0;
  document.getElementById("user-choice").textContent = "❔";
  document.getElementById("computer-choice").textContent = "❔";
  document.getElementById("result").textContent = "Choose your move!";
}