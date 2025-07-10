let timeInterval;
let startTime;
let elapsedTime = 0;

const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60))
    const minutes = Math.floor(milliseconds % (1000 * 60 * 60) / (1000 * 60))
    const seconds = Math.floor(milliseconds % (1000 * 60) / 1000) 
    const ms = Math.floor(milliseconds % 1000);

    return (
        `
            ${String(hours).padStart(2, '0')} : 
            ${String(minutes).padStart(2, '0')} : 
            ${String(seconds).padStart(2, '0')} . 
            ${String(ms).padStart(3, '0')} 
        ` 
    );
}

const startTimer = () => {
    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        const display = document.querySelector('.display')
        display.textContent = formatTime(elapsedTime)
    },10)
}

const stopTimer = () => {
    clearInterval(timeInterval);
}

const resetTimer = () => {
    clearInterval(timeInterval);
    elapsedTime = 0;
    const display = document.querySelector('.display')
    display.textContent = '00:00:00'
}

const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')

startButton.addEventListener('click',startTimer)
stopButton.addEventListener('click',stopTimer)
resetButton.addEventListener('click',resetTimer)