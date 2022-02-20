const buttonWrapper = document.getElementById('button-wrapper');
const output = document.getElementById('output');
const result = document.getElementById('result');
const inputNumber = document.getElementById('input-number');
const restart = document.getElementById('restart');
const errorMessage = document.getElementById('error-message');
const customTriesBlock = document.getElementById('custom-tries-block');
const formTitle = document.getElementById('form-title');

let numberToGuess = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let amountOfTries = undefined;

setTries = (amount) => {
  if(!amount) {
    amount = Number(document.getElementById('customTriesNumber').value);
  }
  if(isNaN(amount) || amount <= 0 || amount >= 100) {
    errorMessage.innerHTML = `
      <p>Please give a valid number --> 1 - 99</p>
    `
    return;
  }

  amountOfTries = amount;
  console.log(amountOfTries);
  output.classList.add('visible');
  buttonWrapper.classList.add('invisible');
  customTriesBlock.classList.remove('display-block');
  printGuessTries(guessCount);
}

printGuessTries = (number) => {
  formTitle.innerHTML = `
    ${number} / ${amountOfTries}
  `
}

customTries = () => {
  customTriesBlock.classList.add('display-block');
}

guess = () => {
  guessNumber = Number(inputNumber.value);

  guessCount++;

  if(gameOver()) {
    return;
  }

  printGuessTries(guessCount);

  if(guessNumber === numberToGuess) {
    result.innerHTML = `
      <h3>Yes! You got me in ${guessCount} guesses, I'm ${numberToGuess}</h3>
    `
    restart.classList.add('restart-visible');
  } else if(guessNumber < numberToGuess) {
    result.innerHTML = `
      <h3>you need to guess HIGHER than ${guessNumber}, try again...</h3>
    `
    gameOver();
  } else {
    result.innerHTML = `
      <h3>you need to guess LOWER than ${guessNumber}, try again...</h3>
    `
    gameOver();
  }
}

gameOver = () => {
  if(guessCount > amountOfTries) {
    result.innerHTML = `
      <h3>Game Over</h3>
    `
    restart.classList.add('restart-visible');
    return true;
  }
  return false;
}