'use strict';

//Define random secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Keeping score number
let score = 20;
// Keeping highscore
let highscore = 0;
const displayMessage = function (place, message) {
  document.querySelector(place).textContent = message;
};

//Attempt some numnber  and press check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess,typeof guess);
  //Stage 1
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number';
    displayMessage('.message', 'No number');
  }
  //Check first if score above 0
  else if (score === 0) {
    document.querySelector('.message').textContent = 'You lost the game !!!';
  }
  //Stage 2
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber; //display correct number
    //document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('.message', 'Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Highscores
    //Check highscore and update if it is higher
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  }
  //Stage 3
  else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high !!!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  //Stage 4
  else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low !';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

//Restart the game ... pressing Again button

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';
});
