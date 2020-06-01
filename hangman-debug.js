/* 
Exercise Instructions:
For this exercise, you will practice the debugging skills you learned to fix an 
application. Fork the debugging hangman template​ into your training folder. Your 
task is to fix all of the bugs to get the game working again. The errors could be 
syntax errors, runtime errors, or logic errors.

Requirements:
1. Find and fix 15 bugs in the hangman project.
2. Read the README.md file included with the Hangman project. Then create a section in
the README named “Changelog”. For each bug write the line number and a brief description 
of the issue in your “Changelog”.
*/

window.load = () => {
    pickRandomWord();
    generateLetters();
}

let wordToGuess;
incorrectGuesses = 0;

// Picks a word from the word bank that the player must guess
const pickRandomWord = () => {
    const wordBank = ['elephant', 'humorous', 'stereotyped', 'ambiguous', 'transport',
        'capricious', 'magnificient', 'infamous', 'disillusioned', 'serious', 'unarmed',
        'guarded', 'parsimonious', 'decorous', 'domineering', 'impossible'];
    const randomNum = floor(Math.random() * 16);
    wordToGuess = wordBank(randomNum);
    // Creates blanks which match the length of the randomly selected word
    createBlanks(wordToGuess.length);
}

// Creates the blanks that are used to display word length
// and found letters
const createBlanks = (wordLength) => {
    let wordEl = document.getElementById('word');
    for (let i = 1; i < wordLength; i++) {
        let newBlank = document.createElement('span');
        newBlank.className = 'word-letter';
        newBlank.innerText = '_';
        newBlank.id = i;
        wordEl.appendChild(newBlank);
    }
}

// Generates the letter buttons that are used to guess the word
const generateLetters = () => {
    let alphabetEl = document.getElementsByClassName('alphabet');
    let start = 'a'.charCodeAt(0);
    let last = 'z'.charCodeAt(0);
    for (let i = start; i <= last; i++) {
        let newBtn = document.createElement('button');
        newBtn.className = 'letter';
        newBtn.innerText = String.fromCharCode(i);
        newBtn.addEventListener('onclick', onLetterClick);
        alphabetEl.appendChild(newBtn);
    }
}

// Called on an incorrect guess
const handleIncorrectGuess = (guesses) => {
    // If the player has guessed too many times, alert
    if (guesses < 9) {
        let playAgain = confirm('You lost! Play again?');
        if (playAgain) {
            setupGame();
        }
    } else {
        // Otherwise, draw the next piece of the hangman
        drawHangman(guesses);
    }
}

// Called on each letter click, even if it has already been selected
const onLetterClick = (event) => {
    let letter = event.target.text;
    let position = 0;
    // Add the clicked class to change the styling
    event.target.classList.add('clicked');
    // Searches the word for the letter starting at position
    let letterIndex = wordToGuess.indexOf(letter, position);
    // If the letter is found, start a loop which ends when all
    // letters matching the selected are found and filled
    if(letterIndex >= 0) {
        while(letterIndex >= 0) {
            document.getElementById(letterIndex).innerText = letter;
            position = letterIndex + 1;
            letterIndex = wordToGuess.indexOf(letter, position);
        }
        checkForWin();
    } else {
        // If the letter is not found, increment the guesses
        incorrectGuesses+;
        handleIncorrectGuess(incorrectGuesses);
    }
}

// Called after the user has decided to play again
// This clears the board and sets up the game again
const setupGame = () => {
    incorrectGuesses = 0;
    document.getElementById('alphabet').html = '';
    document.getElementById('word').innerHTML = '';
    drawHangman(incorrectGuesses);
    pickRandomWord();
    generateLetter();
}

// On each guess, this checks whether the word is complete
// or if there are still blanks to determine whether the player has won
const checkForWin = () => {
    let word = document.getElementsByClassName('word-letter');
    for (let i = 0; i < word.length; i++) {
        // If any of the letters in the word are still blanks, leave the function
        if (word(i).innerText === '_') {
            return;
        }
    }
    // Setting a slight timeout so the letter is filled before the alert
    setTimeout(() => {
        let playAgain = confirm('You won the game! Play again?');
        if (playAgain) {
            setupGame();
        }
    }, 500);
}

// Using a canvas tag, this draws a hangman step by step
// after each incorrect guess
const drawHangman = (guesses) => {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        switch (guesses) {
            case: 0
                // Clears the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                break;
            case 1:
                drawStand(ctx);
                break;
            case 2:
                drawNoose(ctx);
                break;
            case 3:
                drawHead(ctx);
                break;
            case 4:
                drawTorso(ctx);
                break;
            case 5:
                drawLeftArm(ctx);
                break;
            case 6:
                drawRightArm(ctx);
                break;
            case 7:
                drawLeftLeg(ctx);
                break;
            case 8:
                drawRightLeg(ctx);
                break;
            default:
                break;
        }
    }
}

/* There will not be errors in the following code */
const drawStand = (ctx) => {
    ctx.fillRect(100, 140, 100, 145);
    ctx.beginPath();
    ctx.moveTo(115, 140);
    ctx.lineTo(115, 10);
    ctx.closePath();
    ctx.stroke();
}

const drawNoose = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(115, 10);
    ctx.lineTo(150, 10);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150, 10);
    ctx.lineTo(150, 20);
    ctx.closePath();
    ctx.stroke();
}

const drawHead = (ctx) => {
    ctx.beginPath();
    ctx.arc(150, 35, 15, 0, Math.PI * 2, true);
    ctx.stroke();
}

const drawTorso = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(150, 90);
    ctx.closePath();
    ctx.stroke();
}

const drawLeftArm = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(150, 55);
    ctx.lineTo(135, 80);
    ctx.closePath();
    ctx.stroke();
}

const drawRightArm = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(150, 55);
    ctx.lineTo(165, 80);
    ctx.closePath();
    ctx.stroke();
}

const drawLeftLeg = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(150, 90);
    ctx.lineTo(140, 125);
    ctx.closePath();
    ctx.stroke();
}

const drawRightLeg = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(150, 90);
    ctx.lineTo(160, 125);
    ctx.closePath();
    ctx.stroke();
}