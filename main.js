<<<<<<< HEAD
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playerPlay));

function playerPlay(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}

=======
>>>>>>> 36ab77bf28c559139cea0002041015c74a9196d9
const rps = ["rock", "paper", "scissors"];

function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

<<<<<<< HEAD
const body = document.querySelector('body');
const div = [];

for (let i = 0; i < 3; i++) {
    div[i] = document.createElement('div');
    body.insertBefore(div[i], body.children[i + 1]);
}

let playerScore = 0;
let computerScore = 0;
const div1text = document.createTextNode('Press any of the above buttons to play');
const div2text = document.createTextNode(`Your score: ${playerScore}`);
const div3text = document.createTextNode(`Computer score: ${computerScore}`);
div[0].appendChild(div1text);
div[1].appendChild(div2text);
div[2].appendChild(div3text);

function playerWonDisplay(a,b) {
    div[0].textContent = `You won! ${a.toUpperCase()} beats ${b.toUpperCase()}.`;
    div[1].textContent = `Your score: ${++playerScore}`;
}

function playerLoseDisplay(c,d) {
    div[0].textContent = `You lose! ${d.toUpperCase()} beats ${c.toUpperCase()}.`;
    div[2].textContent = `Computer score: ${++computerScore}`;
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    div[1].textContent = `Your score: ${playerScore}`;
    div[2].textContent = `Computer score: ${computerScore}`;
=======
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
>>>>>>> 36ab77bf28c559139cea0002041015c74a9196d9
}

let count = 0;

function playRound(playerSelection, computerSelection) {
<<<<<<< HEAD
     if (playerScore === 5) {
        div[0].textContent = 'Yehey! You totally won the game. Go ahead and play another round';
        reset();
    } else if (computerScore === 5) {
        div[0].textContent = 'Aww! You lose the game. Go ahead and play another round';
        reset();
    } else {
        if (playerSelection === rps[0] && computerSelection === rps[2]) {
                playerWonDisplay(rps[0], rps[2]);
        }else if (playerSelection === rps[1] && computerSelection === rps[0]) {
                playerWonDisplay(rps[1], rps[0]);
        }else if (playerSelection === rps[2] && computerSelection === rps[1]) {
                playerWonDisplay(rps[2], rps[1]);
        }else if (playerSelection === rps[0] && computerSelection === rps[1]) {
                playerLoseDisplay(rps[0], rps[1]);
        }else if (playerSelection === rps[1] && computerSelection === rps[2]) {
                playerLoseDisplay(rps[1], rps[2]);
        }else if (playerSelection === rps[2] && computerSelection === rps[0]) {
                playerLoseDisplay(rps[2], rps[0]);
        }else {
                div[0].textContent = "It's a tie";
        }
    }
}
=======
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
>>>>>>> 36ab77bf28c559139cea0002041015c74a9196d9
