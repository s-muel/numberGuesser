let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
const getAbsoluteDistance = (guessNumber, targetnumber) => 
Math.abs (guessNumber - targetnumber);

const compareGuesses = (humanGuess, computerGuess,targetnumber) => {
  if (humanGuess < 0 || humanGuess > 9){
    alert('Enter number between 0 and 9');
  } else if (getAbsoluteDistance(humanGuess, targetnumber) <= getAbsoluteDistance ( computerGuess, targetnumber)) {
    return true;
  } else {
    return false;
  } 
  };


const updateScore =(winner) => {
  if (winner === 'human'){
    humanScore += 1;
  }else if (winner === 'computer'){
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
  return currentRoundNumber;
}


