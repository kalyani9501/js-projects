'use strict';

let scoreElement = document.querySelector('.score');
let buttonElement = document.querySelector('.check');
let resetButton = document.querySelector('.again');
let secretNumber = document.querySelector('.number');
let inputElement = document.querySelector('.guess');
let highScore = document.querySelector('.highscore');

buttonElement.addEventListener('click', onClickHandler);
resetButton.addEventListener('click', resetTheGame);

let numberToBeGuessed = +generateSecretNumber();
let score = 20;

secretNumber.textContent = numberToBeGuessed; //'?';
scoreElement.textContent = score;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setStyle(bgColor, numWidth) {
  document.querySelector('body').style.backgroundColor = bgColor;
  secretNumber.style.width = numWidth;
}

function generateSecretNumber() {
  secretNumber.textContent = Math.trunc(Math.random() * 20) + 1;
  return secretNumber.textContent;
}

function onClickHandler() {
  let number = Number(inputElement.value);

  if (!number) {
    displayMessage('Please enter number !!');
  } else if (number === numberToBeGuessed) {
    displayMessage('Correct Number !!');
    setStyle('#60b347', '30rem');
    if (Number(highScore.textContent) < score) {
      highScore.textContent = score;
    }
  } else if (number !== numberToBeGuessed) {
    if (score > 0) {
      displayMessage(
        number > numberToBeGuessed
          ? 'Number is too high !!'
          : 'Number is too low !!'
      );
      scoreElement.textContent = --score;
    } else {
      displayMessage('You Lost, Better Luck Next Time !!');
      scoreElement.textContent = 0;
    }
  }
}

function resetTheGame() {
  displayMessage('Start guessing...');
  setStyle('#222', '15rem');
  numberToBeGuessed = +generateSecretNumber();
  score = 20;
  scoreElement.textContent = score;
  inputElement.value = '';
}
