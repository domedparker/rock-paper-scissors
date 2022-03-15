const choice = ['rock', 'paper', 'scissors'];
let computerSelection = computerChoice();
let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    while((playerSelection === '') || (playerSelection === null) || ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors'))){
        playerSelection = prompt('Invalid choice, please pick one of the following: Rock, Paper, or Scissors?').toLowerCase();
    }


function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection) {
      alert('It\'s a Tie!')
  } else if (
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')) {
        alert(`You win! ${playerSelection} beats ${computerSelection}!`);
  } else if (
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')) {
        alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
  }
 }

function computerChoice(){
    return choice[Math.floor(Math.random() * choice.length)]
}

function game(){
}

game()