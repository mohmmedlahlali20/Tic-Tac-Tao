const divGame = document.getElementById('divGame');
const p = document.createElement('p');
const h3 = document.createElement('h3');
const divBoard = document.createElement('div');
const divButtons = document.createElement('div');
const historyLink = document.createElement('a');
const buttonGoBack = document.createElement('button');
const restGame = document.createElement('button');
const winMessage = document.getElementById('winMessage');
divGame.append(p, h3, divButtons, winMessage, divBoard );
const storedPlayers = JSON.parse(localStorage.getItem('currentPlayers')) || [];
divButtons.append(buttonGoBack, restGame, historyLink);

restGame.innerHTML = 'Rest Game';
restGame.className = 'restGame';
divButtons.className = 'divButtons';
buttonGoBack.className = 'buttonGoBack';
buttonGoBack.textContent = 'Go Back';
h3.className = 'H3';
p.className = 'p';
divBoard.className = 'divBoard';

historyLink.setAttribute('href', '/historique.html');
historyLink.textContent = 'History';
historyLink.className = 'historyLink';

let currentTurn = true;

let player1 = storedPlayers[0] || { name: 'Player 1', symbol: 'X', score: 0 };
let player2 = storedPlayers[1] || { name: 'Player 2', symbol: 'O', score: 0 };

p.textContent = `${player1.name || 'Unknown'} ${player1.score || 0} VS ${player2.score || 0} ${player2.name || 'Unknown'}`;

function symbole() {
    return currentTurn ? player1.symbol : player2.symbol;
}

let gameOver = false;

for (let i = 0; i < 400; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('click', () => {
        if (!gameOver && square.textContent === '') {
            square.textContent = symbole();
            
            if (checkWin()) {
                const winningPlayer = currentTurn ? player1 : player2;
                winMessage.textContent = `${winningPlayer.name} (${winningPlayer.symbol}) wins!`;            
                winMessage.style.display = 'block';
                
                gameOver = true;
            
                if (currentTurn) {
                    player1.score += 1;
                } else {
                    player2.score += 1;
                }
            
                p.textContent = `${player1.name || 'Unknown'} ${player1.score || 0} VS ${player2.score || 0} ${player2.name || 'Unknown'}`;
            
                storedPlayers[0] = player1;
                storedPlayers[1] = player2;
                localStorage.setItem('currentPlayers', JSON.stringify(storedPlayers));
            
            } else {
                currentTurn = !currentTurn;
            }
            
        }
    });

    divBoard.appendChild(square);
}

function checkLine(start, step, count) {
    for (let i = 0; i < count; i++) {
        if (divBoard.children[start + step * i].textContent !== symbole()) {
            return false;
        }
    }
    return true;
}

function checkWin() {
    const winLength = 5;
    const boardSize = 20;
    
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const index = row * boardSize + col;

            if (col <= boardSize - winLength && checkLine(index, 1, winLength)) {
                return true;
            }

            if (row <= boardSize - winLength && checkLine(index, boardSize, winLength)) {
                return true;
            }

            if (row <= boardSize - winLength && col <= boardSize - winLength && checkLine(index, boardSize + 1, winLength)) {
                return true;
            }

            if (row <= boardSize - winLength && col >= winLength - 1 && checkLine(index, boardSize - 1, winLength)) {
                return true;
            }
        }
    }

    return false;
}

restGame.addEventListener('click', () => {
    for (let i = 0; i < divBoard.children.length; i++) {
        divBoard.children[i].textContent = '';
    }
    winMessage.style.display = 'none';
    gameOver = false;
    currentTurn = true;

    p.textContent = `${player1.name || 'Unknown'} ${player1.score || 0} VS ${player2.score || 0} ${player2.name || 'Unknown'}`;
});

buttonGoBack.addEventListener('click', () => {
    localStorage.removeItem('currentPlayers');
    location.href = '/Index.html';
});
