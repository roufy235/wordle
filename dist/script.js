"use strict";var lettersPattern=/^[A-Za-z][A-Za-z0-9]*$/,currentGuessCount=1,currentGuess=document.querySelector("#guess"+currentGuessCount),currentLetters=currentGuess.dataset.letters;document.addEventListener("keydown",(function(e){var t=e.key;lettersPattern.test(t)&&1===t.length&&updateLetters(t),"backspace"===t.toLocaleLowerCase&&console.log("backspace pressed")}));var updateLetters=function(e){var t=currentGuess.dataset.letters+e;currentGuess.dataset.letters=t;var s=t.length;s<=5&&updateTiles(s,e)},updateTiles=function(e,t){document.querySelector("#guessTile"+e).innerText=t};
//# sourceMappingURL=script.js.map