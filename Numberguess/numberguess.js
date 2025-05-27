let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guess");
  const guess = parseInt(guessInput.value);
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "❗ Enter a number between 1 and 100.";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    guessInput.disabled = true;
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low!";
  } else {
    message.textContent = "📈 Too high!";
  }

  guessInput.value = "";
  guessInput.focus();
}
