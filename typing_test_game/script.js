const currentWord = document.querySelector('#current-word')
const wordInput = document.querySelector('#word-input')
const time = document.querySelector('#time')
const score = document.querySelector('#score')
const message = document.querySelector('#message')

let timer = 6;
let count = 0;
const words = [
    'stubborn', 'cocktail', 'runaway', 'joke', 'developer', 'establishment', 'hero', 'javascript', 'nutrition', 'revolver', 'echo', 'siblings', 'investigate', 'horrendous', 'symptom', 'laughter', 'magic', 'master', 'space', 'definition'
];

document.addEventListener('DOMContentLoaded', () => {
    showWords(words)
    wordInput.addEventListener('input', () => {
        if (matchWords()) {
            showWords(words)
            wordInput.value = '';
            timer = 6;
            // countdown();
            count++;

            message.innerHTML = 'Correct';
        } else {
            message.innerHTML = 'Incorrect';
        }
        score.innerHTML = count;
    })
    setInterval(countdown, 1000)
    // setInterval(gameOver,100)    // unnecessary

})

const showWords = (words) => {
    let randomIndex = Math.floor(Math.random() * words.length)
    currentWord.innerHTML = words[randomIndex]
}



const matchWords = () => {
    return currentWord.innerHTML === wordInput.value;
};


const countdown = () => {
    if (timer > 0) {
        timer--
    } else {
        gameOver();
    }
    time.innerHTML = timer;
}

const gameOver = () => {
    if (timer === 0) {
        message.innerHTML = 'Game is Over';
        wordInput.disabled = true;
    }
}