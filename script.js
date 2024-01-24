const objects = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return objects[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    const choosedObject = prompt("Select rock, paper or scissors.").toLowerCase();
    if (objects.find((v, i) => v === choosedObject ? true : false) === undefined) {
        return getPlayerChoice()
    }
    return choosedObject;
}

function checkWinCondition(playerSelection, computerSelection, selectedObject) {
    if (computerSelection === selectedObject) {
        playerScore += 1;
        return `You win! Your ${playerSelection} beats ${computerSelection}.`
    } else {
        computerScore += 1;
        return `You loose! Computer beats your ${playerSelection} with ${computerSelection}.`
    }   
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! Everyone has selected ${playerSelection}.`
    }

    switch (playerSelection) {
        case objects[0]:
            return checkWinCondition(playerSelection, computerSelection, objects[2])
        case objects[1]:
            return checkWinCondition(playerSelection, computerSelection, objects[0])
        case objects[2]:
            return checkWinCondition(playerSelection, computerSelection, objects[1])
        default:
            break;
    }
}

function game() {
    while (playerScore + computerScore < 5) {
        alert(playRound(getPlayerChoice(), getComputerChoice()))
    }   
}