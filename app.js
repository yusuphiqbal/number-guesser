let min = 1;
let max = 10;
let winningNumber = 2;
let guessesLeft = 3;
const game = document.querySelector('#game');
const maxNumber = document.querySelector('.min-num');
const minNumber = document.querySelector('.max-num');
const guessButton = document.querySelector('#guess-value');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNumber.textContent = min;
maxNumber.textContent = max;

game.addEventListener('mousedown', function(e){
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

guessButton.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  }

  if (guess === winningNumber) {
    gameOver(true, `${winningNumber} is correct! You win!`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(false, `Game over, you lost. The correct number was ${winningNumber}`);
    } else {
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`Guess is not correct. ${guessesLeft} guesses left.`, 'red');
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessButton.value = 'Play again';
  guessButton.className += 'play-again';
}