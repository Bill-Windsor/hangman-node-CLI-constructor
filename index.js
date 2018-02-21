
// index.js: Hangman CLI Game, using constructor and prototype functions.
// This game operates just like Hangman, but is driven from the command line.

var letter = require("./letter.js");
var word = require("./word.js")
var inquirer = require("inquirer");

var blanksLetterArray = [];
var lettersGuessedArray = [];

var garyWordsArray = ["scary", "query", "imaginary", "strawberry", "blueberry", "wary", "vary", "contrary", "corollary", "hairy", "fairy", "emissary"];
var garyWordSelection = function() {
    var index = Math.floor(Math.random()*garyWordsArray.length);
    this.garyWordSelect = garyWordsArray[index];
    this.garyWordLength = garyWordsArray[index].length;
    }

var chosenWordObject = new garyWordSelection();
var chosenWord = chosenWordObject.garyWordSelect.split('');
var solutionWord;

// console.log("\nchosenWord Object = " + chosenWordObject);
// console.log("chosenWordSelect =    " + chosenWordObject.garyWordSelect);
// console.log("chosenWordLength =    " + chosenWordObject.garyWordLength);
// console.log("chosenWordArray =     " + chosenWord);
// console.log("chosenWordArray built into a single word = " + chosenWord.join(''));

console.log('\nThis is the game "HangGary": just like "Hangman", but all solution words rhyme with "Gary".');
console.log('To guess the mystery word, please input your letter guesses, ');
console.log('  within the limit of the number of guesses. Good luck!\n');

// Initiates the game and conduct the game control 
function userGuess() {
    console.log(" ");
    console.log("The mystery word is:  " + newWord.print());
    console.log(" ");
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Pick one letter:',
    }]).then(function(user) {
        console.log("=====================================");
        var letter = user.letter;
        newWord.checkLetter(letter);
        if (newWord.isLetterValid) {
            console.log("You already guessed that letter; please try a different one!");
            userGuess();
        } else {
            solutionWord = newWord.chosenWord.join('');
            if (newWord.isComplete()) {
                console.log("\nCorrect, YOU WIN!  " + solutionWord + " was the mystery word.\n");
                playAgain();
            } else if (newWord.guessesLeft === 0) {
                console.log("\nYou have reached the maximum number of guesses (sorry!). The answer was " + " ' " + solutionWord + " ' ");
                playAgain();
            } else if (newWord.notCorrect) {
                console.log("Incorrect guess. You have " + newWord.guessesLeft + " guesses remaining!");
                userGuess();
                }
                else {
                console.log("Correct guess! You have " + newWord.guessesLeft + " guesses remaining!");
                userGuess();
                }
            }
        });
    }

// Play again control
function playAgain() {
    inquirer.prompt([{
        type: 'input',
        message: 'Would you like to play again? Please type "y" for Yes and "n" for No',
        name: 'playAgain'
    }]).then(function(user) {
        var answer = user.playAgain;
        if (answer == 'y') {

            chosenWordObject = new garyWordSelection();
            chosenWord = chosenWordObject.garyWordSelect.split('');
            // console.log("\nchosenWord Object = " + chosenWordObject);
            // console.log("chosenWordSelect =    " + chosenWordObject.garyWordSelect);
            // console.log("chosenWordLength =    " + chosenWordObject.garyWordLength);
            // console.log("chosenWordArray =     " + chosenWord);
            // console.log("chosenWordArray built into a single word = " + chosenWord.join(''));

            newWord = new word.Word(chosenWord);
            userGuess();
        } 
        else if (answer === 'n') {
            console.log("\nThank you for playing!");
            return;
            }
        })
    }

    newWord = new word.Word(chosenWord);
    userGuess();
