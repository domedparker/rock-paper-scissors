// determines initial scores of player and computer and defines button variables

const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

// the function to determine the player's choice and call the playRound() function

choices.addEventListener('click', function(e){
    if(!e.target.dataset.choice) return false;
    playerSelection = (e.target.dataset.choice);
    playRound();
})


// the function to determine the random computer's choice

function computerChoice(){
    return options[Math.floor(Math.random() * options.length)]
}


// the function for a single round game

function playRound(computerSelection){
    
    computerSelection = computerChoice();

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
  console.log(playerSelection);
  console.log(computerSelection);
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
