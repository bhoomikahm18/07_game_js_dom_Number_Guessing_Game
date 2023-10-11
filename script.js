const hint = document.getElementById("hint");
const noOfGuessRef = document.getElementById("no-of-guesses");
const guessedNumsRef = document.getElementById("guesses-nums");
const restartButton = document.getElementById("restart");
const game = document.getElementById("game");
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check-btn");

let answer, noOfGuesses, guessedNumsArr;

const play = () => {
    const userGuess = guessInput.ariaValueMax;
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        alert("Please enter a valid number between 1 to 100.")
        return;
    }
    guessedNumsArr.push(userGuess);
    noOfGuesses += 1;
    if (userGuess != answer) {
        if (userGuess < answer) {
            hint.innerHTML = "Too low. Try Again!";
        } else {
            hint.innerHTML = "Too high. Try Again!";
        }
        noOfGuessRef.innerHTML = `<span>No. Of Guesses: </span> ${noOfGuesses}`;
        guessedNumsRef.innerHTML = `<span>Guessed Numbers are: </span> ${guessedNumsArr.join(
            ","
        )}`;
        hint.classList.remove("error");
        setTimeout(() => {
            hint.classList.add("error");
        }, 10);
    }
};


checkButton.addEventListener("click", play)
