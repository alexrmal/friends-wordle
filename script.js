const rows = document.querySelectorAll(".row");

let currentRow = 0;
let currentCol = 0;

document.addEventListener("keydown", handleKeyPress);

// This function runs everytime a key is press and handles them.
function handleKeyPress(event) {
    const key = event.key.toUpperCase();

    // Listening for specific keyboard presses.
    if (key === "BACKSPACE") {
        removeLetter();
    } else if (key === "ENTER") {
        submitGuess();
    } else if (key.length === 1 && key >= "A" && key <= "Z") {
        addLetter(key);
    }

function addLetter(letter) {
    if (currentCol >= 5) {
        return
    }

    const title = rows[currentRow].children[currentCol];
    title.textContent = letter;
    currentCol++;
}

}