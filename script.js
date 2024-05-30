const cells = document.querySelector('.cellContainer').children;
const cell = document.querySelectorAll('.cell')
const title = document.querySelector('.title')
const scoreDisplay = document.querySelector('.score');
const start = document.querySelector('.start');

console.log(cells[24])
var inputting = false
var numbers = [];
var currentInput = 0;

function generateNewNum() {
    inputting = false;
    scoreDisplay.textContent = `Score: ${numbers.length}`
    let num = Math.floor(Math.random() * 24);
    numbers.push(num);
    showNumberCells();
}

function showNumberCells() {
    let i = 0;
    let interval = setInterval(() => {
        if (i >= numbers.length) {
            clearInterval(interval)
            inputting = true;
            currentInput = 0;
        }
        showCell(cells[numbers[i]], 1000);
        i++
    }, 1200)
}

function showCell(cell, duration) {
    cell.classList.add('active');
    setTimeout(()=> {
        cell.classList.remove('active');
    }, duration)
}

cell.forEach(cell => {
    cell.addEventListener('click', () => {
        if (inputting) {
            showCell(cell, 200);
            if (numbers[currentInput] == parseInt(cell.dataset.index)) {
                if (currentInput < numbers.length - 1 ) currentInput += 1;
                else generateNewNum();
            } else {
                gameOver();
            }
        }
    })
})

function gameOver() {
    title.textContent = "Game Over";
    start.classList.remove('hidden')
    start.classList.add('restarting')
}

start.addEventListener('click', () => {
    start.classList.add('hidden')
    start.textContent = "Restart"
    if (start.classList.contains('restarting')) {
        numbers = [];
        title.textContent = "Memory Game"
    }
    generateNewNum()
})