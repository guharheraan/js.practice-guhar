//accesing a random variable using the Math.random() method that the user will later guess about.
let randomNumber = parseInt(Math.random() * 100 + 1);

//accessing all the elements in the html file.
const submit = document.querySelector('#sbmt');
let userInput = document.querySelector('#user_input');
const details = document.querySelector('.details');
const current_guesses = document.querySelector('.guesses');
const remaining_guesses = document.querySelector('.remaining_guesses');
const lowOrHigh = document.querySelector('.lowOrHigh');

//we will create this node and append it later to the tree structure.
const p = document.createElement('p');

//previous guesses will be an array that will be empty at starting
// and then we will add all the values to it that the user will guess.
let prevGuesses = [];
//now we will keep record of the number of guesses that the user has used starting from 1.
let numberGuesses = 1;

//through playgame we will be able to stop the game when the user has guessed the number.
let playGame = true;

//if game is playing then we will use an eventlistener to listen to the click event on the submit button.
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value); // here we will convert the float values to int.
    // console.log(guess);
    validateGuess(guess); //here we will pass the value of the guess to the validateGuess function to check
    // weather the received value is valid or not.
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    //if value is not a number then print this.
    alert(`please enter a valid number.`);
  } else if (guess < 1) {
    //if value is less than 1 then print this.
    alert(`please enter a number geater or equal to 1.`);
  } else if (guess > 100) {
    //if value is greater than 100 then print this.
    alert(`please enter a number less than 100.`);
  } else {
    //when all these checks are satisfied then we will add this value to our previousGuesses array.
    prevGuesses.push(guess);
    //what if its the last attempt of a user to guess the number then.
    if (numberGuesses === 11) {
      displayGuesses(guess);
      displayMessage(`Game over! the random number was ${randomNumber}`);
      setGameOver(); //game will get terminated.
    } else {
      displayGuesses(guess); //passing the guess value to the display function.
      checkGuess(guess); // passing the guess value to check weather it is equal to the random number or not.
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    //if guess === randomnumber then we will display this message.
    displayMessage(`you guessed it right!`);
    setGameOver(); //and the game will get terminated.
  } else if (guess < randomNumber) {
    //if the guessed number is lower than the random number then.
    displayMessage(`your guess is too low.`);
  } else if (guess > randomNumber) {
    //if the guessed number is higher than the random number then.
    displayMessage(`you guess is too high.`);
  }
}

function displayGuesses(guess) {
  userInput.value = ''; //we will empty the user input area so that other guesses can be entered.
  current_guesses.innerHTML += `${guess}, `; //we will display the guesses in the current guesses area.
  numberGuesses++; //the number of guesses will increase by 1.
  remaining_guesses.innerHTML = `${12 - numberGuesses}`; //the remaining guesses will decrease by 1.
}

function displayMessage(message) {
  //since we had written the messages that we want to for each function now we just pass those msgs to this function.
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function setGameOver() {
  userInput.value = ''; //when game is over than the input should be empty.
  userInput.setAttribute('disabled', ''); //the input should not accept any value when the game is over.
  p.classList.add('button'); //adding a button to the html page so we can reset the game.
  p.innerHTML = `<h2 id = "newGame">Start NewGame</h2>`; //showing the button content
  details.appendChild(p); //appending the button to the html page.
  playGame = false; //when the game is over then the playGame variable will be false.
  resetGame(); //reset game function will be called if the user want to play again then the game will be reset.
}

function resetGame() {
  const newGameButton = document.querySelector('#newGame'); //we will get the button from the html page.
  newGameButton.addEventListener('click', function () {
    //applying the eventlistener to listen the click event of this button.
    prevGuesses = []; //when game is reset the previous guesses should be empty.
    numberGuesses = 1; //the number of guesses should also reset to 1.
    current_guesses.innerHTML = ''; //the current guesses should also be empty.
    remaining_guesses.innerHTML = `${12 - numberGuesses}`; //the remaining guesses should also be reseted.
    userInput.removeAttribute('disabled'); //the userinput should be enabled.
    details.removeChild(p); //the child that we appended "button" should be removed after reseting the game.
    displayMessage(``); // the game msgs should also be removed after reseting the game.
    playGame = true; //the game playing capability should be restored.
  });
}
