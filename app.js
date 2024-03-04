const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo')



let p2Score =0;
let p1Score = 0;
let winnigscore = 5;
let gameOver = false

p1Btn.addEventListener('click', function () {
    if(!gameOver) {
        p1Score += 1; 
        if (p1Score === winnigscore) {
            gameOver = true ;
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
        }
        p1Display.textContent = p1Score;
    }

})

p2Btn.addEventListener('click', function () {
    if(!gameOver) {
        p2Score += 1; 
        if (p2Score === winnigscore) {
            gameOver = true ;
            p1Display.classList.add('loser')
            p2Display.classList.add('winner')
        }
        p2Display.textContent = p2Score;
    }

})

winningScoreSelect.addEventListener('change', function () {
    winnigscore = parseInt(this.value)
    reset()
})

resetBtn.addEventListener('click', reset)

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove('loser','winner')
    p2Display.classList.remove('winner','loser')
}