const choice = ['rock', 'paper', 'scissors'];
const computerSelection = computerChoice();
let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    while((playerSelection === '') || (playerSelection === null)){
        playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
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

playRound(playerSelection, computerSelection);