let p1 = {
    score : 0 ,
    button : document.querySelector('#p1Btn'),
    display : document.querySelector('#p1Display')
}

let p2 = {
    score : 0 ,
    button : document.querySelector('#p2Btn'),
    display : document.querySelector('#p2Display')
}

const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo')
let winnigscore = 3;
let gameOver = false

function updateScores (player, opponent) {
    if(!gameOver) {
        player.score += 1; 
        if (player.score === winnigscore) {
            gameOver = true ;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }

}



p1.button.addEventListener('click', function() {
    updateScores(p1,p2)
})

p2.button.addEventListener('click', function() { 
    updateScores(p2,p1)
})

winningScoreSelect.addEventListener('change', function () {
    winnigscore = parseInt(this.value)
    reset()
})

resetBtn.addEventListener('click', reset)

function reset() {
    gameOver = false;
    for (let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent=0;
        p.display.classList.remove('has-text-danger','has-text-success')
        p.button.disabled = false;
    }
    
}