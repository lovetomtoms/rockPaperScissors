const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playerPlay));

function playerPlay(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}

const rps = ["rock", "paper", "scissors"];

function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

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
}

function playRound(playerSelection, computerSelection) {
     if (playerScore === 5) {
        div[0].textContent = 'Yehey! You totally won the game. Go ahead and play another round';
        reset();
    } else if (computerScore === 5) {
        div[0].textContent = 'Aww! You lose the game. Go ahead and play another round';
        reset();
    } else {
        if (playerSelection === rps[0] && computerSelection === rps[2]) {
                playerWonDisplay(rps[0], rps[2])
        }else if (playerSelection === rps[1] && computerSelection === rps[0]) {
                playerWonDisplay(rps[1], rps[0])
        }else if (playerSelection === rps[2] && computerSelection === rps[1]) {
                playerWonDisplay(rps[2], rps[1])
        }else if (playerSelection === rps[0] && computerSelection === rps[1]) {
                playerLoseDisplay(rps[0], rps[1])
        }else if (playerSelection === rps[1] && computerSelection === rps[2]) {
                playerLoseDisplay(rps[1], rps[2])
        }else if (playerSelection === rps[2] && computerSelection === rps[0]) {
                playerLoseDisplay(rps[2], rps[0])
        }else {
                div[0].textContent = "It's a tie";
        }
    }
}