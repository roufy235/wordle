
// detect keypress
const lettersPattern  = /^[A-Za-z][A-Za-z0-9]*$/;
let currentGuessCount = 1;
let currentGuess = document.querySelector('#guess' + currentGuessCount);
let currentLetters = currentGuess.dataset.letters

document.addEventListener('keydown', (e) => {
	const keypress = e.key
	// if its a letter
	 if (lettersPattern.test(keypress) && keypress.length === 1) {
		updateLetters(keypress)
	}
	// if backspace
	if(keypress.toLocaleLowerCase === 'backspace') {
		console.log('backspace pressed');
	}
})

// update "letters"
const updateLetters = (letter) => {
	let oldLetters = currentGuess.dataset.letters
	let newLetters = oldLetters + letter
	currentGuess.dataset.letters = newLetters
	let currentTile = newLetters.length;
	if(currentTile <= 5) {
		updateTiles(currentTile, letter);
	}
}

// update tile markup
const updateTiles = (tileNumber, letter) => {
	let currentTile = document.querySelector('#guessTile' + tileNumber);
	currentTile.innerText = letter;
}

// delete last letter
