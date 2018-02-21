
// word.js contains the Word constructor function with all methods to check for valid letter guesses.
// word.js requires the "letter.js" file to be used. 
var Letter = require('./letter.js');

// The Word constructor function accepts 'chosenWord' as input parameter, and tracks guesses and letters.
var Word = function(chosenWord) {
    this.guessesLeft = 10;
    this.chosenWord = chosenWord;
    this.letters = [];
    this.guesses = [];
    for (var i = 0; i < this.chosenWord.length; i++) {
        this.letters.push(new Letter.Letter(this.chosenWord[i]));
    }
};

// This Word prototype function checks the letters guessed, and updates the number of guesses. 
Word.prototype.checkLetter = function(letter) {
    this.notCorrect = true;
    this.isLetterValid = false;
    var letter = letter.toLowerCase();
    if (this.guesses.indexOf(letter) != -1) {
        this.isLetterValid = true;
    } else {
        this.guesses.push(letter);
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].letter.toLowerCase() == letter) {
                this.notCorrect = false;
                this.letters[i].show = true;
            }
        }
        if (this.notCorrect) {
            this.guessesLeft--;
        }
    }
};

// This Word prototype function checks to see if the word is complete, and then returns true or false.
Word.prototype.isComplete = function() {
    for (var i = 0; i < this.letters.length; i++) {
        if (!this.letters[i].show) {
            return false;;
        }
    }
    return true;
};

// This Word prototype function prints the output.
Word.prototype.print = function() {
    var output = "";
    for (var i = 0; i < this.letters.length; i++) {
        output += this.letters[i].printLetter();
    }
    return output;
};

// This module.exports functions to export the Word function. 
module.exports = {
    Word
};