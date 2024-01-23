const objects = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return objects[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    const choosedObject = promt("Select rock, paper or scissors").toLowerCase();
    if (objects.find(choosedObject) === undefined) {
        return getPlayerChoice()
    }
    return choosedObject;
}