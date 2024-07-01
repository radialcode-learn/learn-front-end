const userInput = document.querySelector("#userInput");
const submit = document.querySelector("[type=submit]");
const guessSlot = document.querySelector(".previousGuess");
const rightOne = document.querySelector(".previousGuessResult");
const remaining = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultBox");
const lowOrHi = document.querySelector(".lowOrHi");
remaining.innerHTML = `10`;
function randomNumGenrator() {
  return parseInt(Math.random() * 100 + 1);
}

let randomNumber = randomNumGenrator();
let prevGuess = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    userInput.value = "";
    alert("PLease enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10 && guess != randomNumber) {
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  const button = document.createElement("button");
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  button.classList.add("button");
  button.innerHTML = `Start new Game`;
  startOver.appendChild(button);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector(".button");
  newGameButton.addEventListener("click", function () {
    randomNumber = randomNumGenrator();
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    rightOne.innerHTML = "";
    remaining.innerHTML = 10;
    userInput.removeAttribute("disabled");
    startOver.removeChild(newGameButton);
    lowOrHi.innerHTML = "";
    playGame = true;
  });
}

function checkGuess(guess) {
  randomNumber = randomNumGenrator();
  ++numGuess;
  guessSlot.innerHTML += `${guess}, `;
  remaining.innerHTML = `${10 - numGuess}`;
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
    newGame();
  } else if (guess < randomNumber) {
    displayMessage(`Low, it was ${randomNumber}`);
  } else if (guess > randomNumber) {
    displayMessage(`High, it was ${randomNumber}`);
  }
  if (rightOne.innerHTML == "") {
    rightOne.innerHTML = randomNumber;
  } else {
    rightOne.innerHTML += ", " + randomNumber;
  }
  userInput.value = "";
}
