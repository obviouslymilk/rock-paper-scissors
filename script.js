const buttonsElement = document.querySelector('#buttons');
const scoreLabel = document.querySelector('#status');
const playerImage = document.querySelector('#player-image');
const computerImage = document.querySelector('#computer-image');

const objects = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return objects[Math.floor(Math.random() * 3)];
}


function checkWinCondition(playerSelection, computerSelection, selectedObject) {
    if (computerSelection === selectedObject) {
        playerScore += 1;
        return `You win! Your ${playerSelection} beats ${computerSelection}. Score: ${playerScore} : ${computerScore}`;
    } else {
        computerScore += 1;
        return `You loose! Computer beats your ${playerSelection} with ${computerSelection}. Score: ${playerScore} : ${computerScore}`;
    }   
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! Everyone has selected ${playerSelection}. Score: ${playerScore} : ${computerScore}`;
    }

    switch (playerSelection) {
        case objects[0]:
            return checkWinCondition(playerSelection, computerSelection, objects[2]);
        case objects[1]:
            return checkWinCondition(playerSelection, computerSelection, objects[0]);
        case objects[2]:
            return checkWinCondition(playerSelection, computerSelection, objects[1]);
        default:
            break;
    }
}

buttonsElement.addEventListener('click', event => {
    if (event.target.className != "button-image") return ;
    const playerChoise = event.target.closest('.object-button').id;
    const computerChoise = getComputerChoice();
    scoreLabel.textContent = playRound(playerChoise, computerChoise)
    playerImage.src = `./images/${playerChoise}.svg`;
    computerImage.src = `./images/${computerChoise}.svg`;
})