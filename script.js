const words = ["coding", "github", "javascript", "game"];
let currentWord = words[0];


const wordDisplay = document.getElementById("word");
const inputField = document.getElementById("input");

wordDisplay.innerText = currentWord;

inputField.addEventListener("input", () => {
    if (inputField.value === currentWord) {
        currentWord = words[Math.floor(Math.random() * words.length)];
        wordDisplay.innerText = currentWord;
        inputField.value = "";
    }
});
