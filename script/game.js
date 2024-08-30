const divGame = document.getElementById('divGame');
const p = document.createElement('p');
const h3 = document.createElement('h3');
const divBoard = document.createElement('div');
const buttonGoBack = document.createElement('button');
const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];


divGame.append( p, h3 , buttonGoBack, divBoard);

buttonGoBack.className = 'buttonGoBack';
buttonGoBack.textContent = 'Go Back';
h3.className = 'H3'

p.className = 'p';
if (storedPlayers.length === 2) {
    const [player1, player2] = storedPlayers;
p.textContent = `${player1.name || 'Unknown'} ${player1.score || 0} VS ${player2.score || 0}  ${player2.name || 'Unknown'}`;
} else {
    p.textContent = 'Insufficient player data available';
}

divBoard.className = 'divBoard';

const turn = true;

let player1 = {
    Symbol  : 'X',
    score : 0
}
    
    

let player2 = {
    Symbol  : 'O',
    score : 0
}

function symbole(player , i){
    square[i].innerHTML = player.Symbol;
}


for (let i = 0; i < 400; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square[i].addEventListener('click', () => {
        if(turn){
            symbole(player1, i);
            
        }
    });
    divBoard.appendChild(square);
}



const winner = () =>{}





buttonGoBack.addEventListener('click', () => {
    localStorage.removeItem('players');
    location.href = '/Index.html';
    // removeEventListener(type, click)

});
