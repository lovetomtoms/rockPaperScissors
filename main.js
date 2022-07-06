let count = 0;

function computerPlay() {
    const rockPaperScissors = ["rock", "paper", "scissors"];
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

// Check if the user entered he right strings.
function playerSelect() {
    let playerChoice;
    do{
        playerChoice = prompt("Just enter one of the following : Rock, Paper or Scissors").toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            return playerChoice;
        };
    } 
    while (true);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        count++;
        return "You won! Rock beats Scissors.";
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        count++;
        return "You won! Paper beats Rock.";
    }else if (playerSelection === "scissors" && computerSelection === "paper") {
        count++;
        return "You won! Scissors beats Paper.";
    }else if (playerSelection === "rock" && computerSelection === "paper") {
        count--;
        return "You Lose! Paper beats Rock.";
    }else if (playerSelection === "paper" && computerSelection === "scissors") {
        count--;
        return "You Lose! Scissors beats Paper.";
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        count--;
        return "You Lose! Rock beats Scissors.";
    }else {
        return "It's a tie";
    }
}

for (let i = 0; i < 5; i++) {
    const playerSelection = playerSelect();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
 };

 if (count >= 3 || count > 0) {
     console.log("Congrats! You won the game.");
 }else if (count < 0) {
     console.log("Aww! You lose the game. Better luck next time.");
 }else {
     console.log("It's a tie! Go and play another round.");
 };