
// letter.js contains a constructor function to control whether a letter that is guessed appears:
// (a) if a correctly-guessed letter, then display the letter.
// (b) If not correct, then display an underscore "_" on the screen. 

Letter.prototype.printLetter = function() {
    if (this.show) {
        return this.letter;
    } else {
        return '_';
    }
};

// function Letter compares a letter to a blank space
function Letter(letter) {
    this.letter = letter;
    if (this.letter == ' ') {
        this.show = true;
    } else {
        this.show = false;
    }
}

// module.exports exports this "Letter" prototype function to the calling routine
module.exports = {
    Letter
};