const divGame = document.getElementById('divGame');
const divBoard = document.createElement('div');
const buttonGoBack = document.createElement('button');
const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];
let currentPlayer = 'X';

divGame.append(divBoard, buttonGoBack);

divBoard.className = 'divBoard'; 

for (let i = 0; i < 400; i++) { 
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click', () => {
        if (square.textContent === '') {
            square.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
    divBoard.appendChild(square);
}

buttonGoBack.className = 'buttonGoBack';
buttonGoBack.textContent = 'Go Back';
buttonGoBack.addEventListener('click', () => {
    localStorage.removeItem('players');
    location.href = '/Index.html';
});
