const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    function checkGuess() {
      const guessInput = document.getElementById('guess');
      const guess = parseInt(guessInput.value);
      
      if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('result').innerHTML = 'Invalid guess. Please enter a number between 1 and 100.';
        return;
      }
      attempts++;
      
      if (guess === randomNumber) {
        document.getElementById('result').innerHTML = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        guessInput.disabled = true;
      } else if (guess < randomNumber) {
        document.getElementById('result').innerHTML = 'Too low! Try a higher number.';
      } else {
        document.getElementById('result').innerHTML = 'Too high! Try a lower number.';
      }
      
      guessInput.value = '';
    }