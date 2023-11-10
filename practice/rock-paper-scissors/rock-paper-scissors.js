let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

/*
if (!score) {
    wins: 0,
    losses: 0,
    ties: 0
}*/

updateScore();


function playGame(playerMove) {
    const computerMove = pickComputerMove(playerMove);
    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove == 'scissors') {
            result = 'Tie';
        } else if (computerMove == 'rock') {
            result = 'You lose.';
        } else if (computerMove == 'paper') {
            result = 'You win.';
        }
    }

    else if (playerMove === 'rock') {
        if (computerMove == 'scissors') {
            result = 'You win.';
        } else if (computerMove == 'rock') {
            result = 'Tie';
        } else if (computerMove == 'paper') {
            result = 'You lose.';
        }
    }
     
    else if (playerMove === 'paper') {
        if (computerMove == 'scissors') {
            result = 'You lose.';
        } else if (computerMove == 'rock') {
            result = 'You win.';
        } else if (computerMove == 'paper') {
            result = 'Tie';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    }
    else if (result === 'You lose.') {
        score.losses += 1;
    }
    else if (result === 'Tie') {
        score.ties += 1;
    }
    
    localStorage.setItem('score', JSON.stringify(score));

    updateScore();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML = `You <img src= "images/${playerMove}-emoji.png" alt="${playerMove}-image" class="move-button"> - <img src= "images/${computerMove}-emoji.png" alt="${computerMove}-image" class="move-button"> Computer`;
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();
    if (randomNumber >=0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
return computerMove;
}