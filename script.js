let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 9 + 1);
};
// console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, target) => {
  const valueH = Math.abs(target - humanGuess);
  const valueCPU = Math.abs(target - computerGuess);

  if (valueH < valueCPU) {
    return true;
    //  return 'You won!';
  } else if (valueCPU < valueH) {
    return false;
    //  return 'Computer won!';
  } else {
    return true;
    //  return 'You won!';
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else { // if (winner === "computer") {
    computerScore += 1;
  }
};

const advanceRound = () => {
  return (currentRoundNumber += 1);
};

// codigo de teste:
// console.log(humanScore);
// console.log(computerScore);
// updateScore('human');
// console.log(humanScore); // To confirm that this value increased by 1
// updateScore('computer');
// console.log(computerScore); // To confirm that this value increased by 1

// console.log(compareGuesses(4, 7, 6));

// console.log(compareGuesses(4, 4, 6));

// console.log(compareGuesses(4, 3, 6));
