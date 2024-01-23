const objects = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return objects[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    const choosedObject = prompt("Select rock, paper or scissors").toLowerCase();
    if (objects.find((v, i) => v === choosedObject ? true : false) === undefined) {
        return getPlayerChoice()
    }
    return choosedObject;
}