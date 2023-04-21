function getComputerChoice() {
    let status = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * status.length);
    return status[random]
}

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelectionLower = playerSelection.toLowerCase();
    console.log(computerSelection, playerSelectionLower);
    if ((playerSelectionLower=="rock" && computerSelection=="paper") ||
        (playerSelectionLower=="scissors" && computerSelection=="rock") ||
        (playerSelectionLower=="paper" && computerSelection=="scissors")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if ((playerSelectionLower=="paper" && computerSelection=="rock") ||
             (playerSelectionLower=="rock" && computerSelection=="scissors") ||
             (playerSelectionLower=="scissors" && computerSelection=="paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return "Tie Game!"
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?");



function Game() {
    let i = 0;
    do {
        i++;
        console.log(playRound());
    } while (i < 5)
}

Game()
// console.log(playerSelection, computerSelection);
// console.log(playRound(playerSelection, computerSelection));