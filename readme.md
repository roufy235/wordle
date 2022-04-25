# Wordle
[Live Demo Here](https://roufy235.github.io/wordle/)

## Gameplay
6 tries to get a 5-letter word

Typing in the letter will display the letter in the tile
Backspace will delete the letters
Enter will submit guess

Guesses must be a real word, "in word list"
Guess colors (data-state):
    - gray: "absent", letter not in word
    - yellow: "present", letter in word, but in wrong position
    - green: "correct", letter in word, and in right position

## Design
Tiles 5 x 6
Virtual Keyboard
## Interactions
When typing a letter:
    - border of the tile changes to light gray
    - blinking in animation with the letter
    - backspace will remove letter, border changes back to dark gray

When submitting a guess:
    - tiles will flip up and background color will change based on guess

