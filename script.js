const scores = document.querySelector('.scores');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');

const scoreForWin = 5;
let playerScore = 0;
let computerScore = 0;
var Items = [
    'rock',
    'paper',
    'scissors'
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
        return `Draw! You both choosed ${compSelection}.`;

    function loss() {
        computerScore += scoreForWin;
        return lossMessage;
    }

    function win() {
        playerScore += scoreForWin;
        return winMessage;
    }
    
    
    switch (playerSelection) {
        case 'rock':
            if (compSelection == 'paper')
                return loss();
            else
                return win();
        case 'paper':
            if (compSelection == 'scissors')
                return loss();
            else
                return win();
        case 'scissors':
            if (compSelection == 'rock')
                return loss();
            else
                return win();
    }
}


/**
 * 
 * @param {PointerEvent} e click event object.
 */
function game(e)
{
    const button = e.target;
    const selection = button.dataset.item;
    
    result.innerText = playRound(computerPlay(Items), selection);
    scores.innerText = `Your score: ${playerScore} — Computer score: ${computerScore}`;
}

buttons.forEach(button => button.addEventListener('click', game))
