const rps = ["rock", "paper", "scissors"];

function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

// Check if the user entered he right word.
function playerPlay() {
    let playerChoice = "";
    do{
        playerChoice = prompt("Just enter one of the following : Rock, Paper or Scissors").toLowerCase();
        switch (playerChoice) {
            case rps[0]:
                return rps[0];
            case rps[1]:
                return rps[1];
            case rps[2]:
                return rps[2];
            default:
                continue;
        }
    } 
    while (true);
}

let count = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === rps[0] && computerSelection === rps[2]) {
        count++;
        return `You won! ${rps[0]} beats ${rps[2]}.`;
    }else if (playerSelection === rps[1] && computerSelection === rps[0]) {
        count++;
        return `You won! ${rps[1]} beats ${rps[0]}.`;
    }else if (playerSelection === rps[2] && computerSelection === rps[1]) {
        count++;
        return `You won! ${rps[2]} beats ${rps[1]}.`;
    }else if (playerSelection === rps[0] && computerSelection === rps[1]) {
        count--;
        return `You lose! ${rps[1]} beats ${rps[0]}.`;
    }else if (playerSelection === rps[2] && computerSelection === rps[1]) {
        count--;
        return `You lose! ${rps[2]} beats ${rps[1]}.`;
    }else if (playerSelection === rps[2] && computerSelection === rps[0]) {
        count--;
        return `You lose! ${rps[0]} beats ${rps[2]}.`;
    }else {
        return "It's a tie";
    }
}

for (let i = 0; i < 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
 }

 if (count >= 3 || count > 0) {
     console.log("Yehey! You won the game. You're the overall champion!");
 }else if (count < 0) {
     console.log("Aww! You lose the game. Better luck next time.");
 }else {
     console.log("Oh! It's a tie! Go ahead and play another round if you want.");
 }