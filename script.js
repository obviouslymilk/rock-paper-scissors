// создать функцию для компьютера, который случайным образом будет выбирать предмет
// создать функцию раунда, которая будет обрабатывать выбор игрока и возвращать результат
// игра должна проходить в 5 раундов
var Items = [
    "rock",
    "paper",
    "scissors"
];


/**
 * Выбирает случайный предмет из предоставленного списка и возвращает его название.
 * @param {String[]} items список возможных вариантов.
 * @returns строку название случайного варианта.
 */
function computerPlay(items) {
    return items[Math.floor(items.length * Math.random())];
}


/**
 * Выводит результаты раунда игры на основе выбранных предметов.
 * @param {String} compSelection - предмет, выбранный компьютером.
 * @param {String} playerSelection - предмет, выбранный игроком.
 * @returns строка с описанием результата: победы, поражения или нечьи.
 */
function playRound(compSelection, playerSelection) {
    const winMessage = `Your ${playerSelection} destroyed enemy's ${compSelection}!`;
    const lossMessage = `Your ${playerSelection} was beaten by enemy's ${compSelection}!`;
    
    if (compSelection === playerSelection)
        return `Draw! You both choosed ${compSelection}`;
    
    switch (playerSelection) {
        case "rock":
            if (compSelection == "paper")
                return lossMessage;
            else
                return winMessage;
        case "paper":
            if (compSelection == "scissors")
                return lossMessage;
            else
                return winMessage;
        case "scissors":
            if (compSelection == "rock")
                return lossMessage;
            else
                return winMessage;
    }
}


function game() {
    let playerSelection = undefined;
    do {
        playerSelection = prompt("Please, selecy your item: Rock, Paper or Scissors!").toLowerCase();
    } while (!Items.includes(playerSelection));

    console.log(playRound(computerPlay(Items), playerSelection));
}

for (let i = 0; i < 5; i++) {
    game();
}
