# Wordle
[Live Demo Here](https://roufy235.github.io/wordle-clone/)

## Gameplay
6 tries to get a 5-letter word

## Making a guess
* Detect key presses: <br>
    x if key press is a letter
        x update "letters" attribute
            x update the tile markup based on "letters" value
    - if key press is backspace
        - delete last letter in "letters"
            - update tile markup based on "letters"

Typing in the letter will display the letter in the tile <br>
Backspace will delete the letters <br>
Enter will submit guess <br>

Guesses must be a real word, "in word list" <br>
* Guess colors (data-state): <br>
    - gray: "absent", letter not in word <br>
    - yellow: "present", letter in word, but in wrong position <br>
    - green: "correct", letter in word, and in right position <br>

Guesses are saved in local storage <br>
## Design
Tiles 5 x 6 <br>
Virtual Keyboard <br>
## Interactions
* When typing a letter: <br>
    - border of the tile changes to light gray <br>
    - blinking in animation with the letter <br>
    - backspace will remove letter, border changes back to dark gray <br>

* When submitting a guess: <br>
    - tiles will flip up and background color will change based on guess <br>

