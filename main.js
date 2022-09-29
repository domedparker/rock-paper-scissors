// determines initial scores of player and computer and defines button variables

const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');


    // the function to determine the random computer's choice

function computerChoice(){
    return options[Math.floor(Math.random() * options.length)]
}


// the function for a single round game

function playRound(playerSelection, computerSelection){

  if (playerSelection === computerSelection) {
     const p = document.createElement('p');
     p.textContent = `It\'s a Tie! You both chose ${playerSelection}`;
     outcomeDiv.appendChild(p) 
  } else if (
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')) {
      const p = document.createElement('p');
      p.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
      outcomeDiv.appendChild(p);
        ++playerScore;
  } else if (
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')) {
      const p = document.createElement('p');
      p.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
      outcomeDiv.appendChild(p);
        ++computerScore;
  }
  if (playerScore == 5 || computerScore == 5){
    logScore();
  }
}

  // the function to log the scores of the player and the computer - this avoids repeats in the game function

function logScore(){
    if (playerScore > computerScore) {
        const h2 = document.createElement('h2');
        h2.textContent = `You have beaten the computer! ${playerScore} to ${computerScore}`;
        outcomeDiv.appendChild(h2);
    } else if (computerScore > playerScore) {
        const h2 = document.createElement('h2');
        h2.textContent = `You have lost to the computer ${computerScore} to ${playerScore}`;
        outcomeDiv.appendChild(h2);
    } else if (computerScore == playerScore){
        const h2 = document.createElement('h2');
        h2.textContent = `The game is a tie! You both scored ${playerScore}`;
        outcomeDiv.appendChild(h2);
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
});