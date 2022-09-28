// determining computer's choice and player's choice as well as their initial scores

const choice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

// the function for a single round game

function playRound(playerSelection, computerSelection){
    
    computerSelection = computerChoice();
    playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    while((playerSelection === '') || (playerSelection === null) || ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors'))){
        playerSelection = prompt('Invalid choice, please pick one of the following: Rock, Paper, or Scissors?').toLowerCase();
}

  if (playerSelection === computerSelection) {
      alert('It\'s a Tie!')
  } else if (
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')) {
        alert(`You win! ${playerSelection} beats ${computerSelection}!`);
        ++playerScore;
  } else if (
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')) {
        alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
        ++computerScore;
  }
 }

// the function to determine the random computer's choice

function computerChoice(){
    return choice[Math.floor(Math.random() * choice.length)]
}

// the function to log the scores of the player and the computer - this avoids repeats in the game function

function logScore(){
    console.log(`Player Score: ${playerScore}/5 rounds`);
    console.log(`Computer Score: ${computerScore}/5 rounds`);
    if (playerScore > computerScore) {
        console.log("You have beaten the computer!");
    } else if (computerScore > playerScore) {
        console.log("You have lost to the computer!");
    } else if (computerScore == playerScore){
        console.log("The game is a tie!");
    }
}

//the function for a 5-round game that tracks the score and determines a winner at the end

function game(){
        for (let i = 0; i <= 5; i++) {
        if (i == 5) {
            logScore();
        } else {
            playRound();
        }
    }
}

game()