let userScore=0;
let computerScore=0;

function play(userchoice){
  const choices=["rock","paper","scissors"];
  const emojis={
    rock:"✊",
    paper:"✋",
    scissors:"✌️"  
  };
}

const computerChoice=choices[Math.floor(Math.random()*3)];

document.getElementById("user-choice").textContent=emojis[userChoice];
document.getElementById("computer-choice").textContent=emojis[computerChoice];

let result="";

if (userChoice == computerChoice) {
  result = "It's a Draw!";
} else if (
  (userChoice == "rock" && computerChoice == "scissors") ||
  (userChoice == "paper" && computerChoice == "rock") ||
  (userChoice == "scissors" && computerChoice == "paper")
) {
  result = "You Win!";
} else {
  result = "Computer Wins!";
}


