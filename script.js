const cells = document.querySelector('.cellContainer').children;

console.log(cells[24])
var numbers = [];

function generateNewNum() {
    let num = Math.floor(Math.random() * 24);
    numbers.push(num);
    showNumberCells();
}

function showNumberCells() {
    let i = 0;
    let interval = setInterval(() => {
        if (i >= numbers.length) clearInterval(interval);
        showCell(cells[numbers[i]], 1000);
        i++
    }, 1200)
}

generateNewNum()

function showCell(cell, duration) {
    cell.classList.add('active');
    setTimeout(()=> {
        cell.classList.remove('active');
    }, duration)
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        showCell(cell, 200);
    })
})
