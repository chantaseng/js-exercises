'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess'));
*/
const numberGenerator = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = numberGenerator();
// console.log(secretNumber);
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

// Creating functions to keep code DRY
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};

const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};

const changeBackgrounfColor = function (hexcode) {
  document.querySelector('body').style.backgroundColor = hexcode;
};

const changeWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!';
    displayMessage('⛔️ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);

    // document.querySelector('body').style.backgroundColor = '#60b347';
    changeBackgrounfColor('#60b347');
    // document.querySelector('.number').style.width = '30rem';
    changeWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = '👾 Game Over!';
      displayMessage('👾 Game Over!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👾 Game Over!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👾 Game Over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = numberGenerator();

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.number').textContent = '?';
  displayNumber('?');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.guess').value = '';

  // document.querySelector('body').style.backgroundColor = '#222';
  changeBackgrounfColor('#222');
  // document.querySelector('.number').style.width = '15rem';
  changeWidth('15rem');
});
