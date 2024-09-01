const divParent = document.getElementById('div-parent');
const divChild = document.createElement('div');
const inputP1 = document.createElement('input');
const inputP2 = document.createElement('input');
const spanP1 = document.createElement('span');
const spanP2 = document.createElement('span');
const buttonGo = document.createElement('button');
const errorSpanP1 = document.createElement('span'); 
const errorSpanP2 = document.createElement('span'); 


let Players = [];
let currentPlayers = [];

const storedPlayers = localStorage.getItem('players');
console.log(storedPlayers)
if (storedPlayers) {
    try {
        Players = JSON.parse(storedPlayers);
        console.log("Loaded players from localStorage:", Players);
    } catch (error) {
        console.error("Failed to parse players from localStorage:", error);
    }
}

divParent.appendChild(divChild);

divChild.append(spanP1, inputP1, errorSpanP1, spanP2, inputP2, errorSpanP2, buttonGo);

buttonGo.textContent = 'Let\'s go';

spanP1.textContent = 'Player 1';
spanP2.textContent = 'Player 2';

inputP1.setAttribute('type', 'text');
inputP1.setAttribute('placeholder', 'Player name');
inputP2.setAttribute('type', 'text');
inputP2.setAttribute('placeholder', 'Player name');

divChild.classList.add('divChild');
divParent.classList.add('divParent');
inputP1.classList.add('input');
inputP2.classList.add('input');
spanP1.classList.add('label');
spanP2.classList.add('label');
buttonGo.classList.add('buttonGo');
errorSpanP1.classList.add('error'); 
errorSpanP2.classList.add('error');

buttonGo.addEventListener('click', (e) => {
    e.preventDefault();
    const player1 = inputP1.value.trim();
    const player2 = inputP2.value.trim();

    errorSpanP1.textContent = '';
    errorSpanP2.textContent = '';

    let hasError = false;

    if (!player1) {
        errorSpanP1.textContent = 'Please enter your name';
        hasError = true;
    }

    if (!player2) {
        errorSpanP2.textContent = 'Please enter your name';
        hasError = true;
    }

    if (hasError) {
        return;
    }

    const id1 = `player_${Date.now()}_${Math.random()}`;
    const id2 = `player_${Date.now() + 1}_${Math.random()}`;

    const newPlayers = [
        { id: id1, name: player1, score: 0 , symbol:'X'},
        { id: id2, name: player2, score: 0 ,symbol:'O' }
    ];

    Players = [...Players, ...newPlayers];
    localStorage.setItem('players', JSON.stringify(Players));

    currentPlayers = [...newPlayers];
    localStorage.setItem('currentPlayers', JSON.stringify(currentPlayers));

    inputP1.value = '';
    inputP2.value = '';

    location.href = '/game.html'; 

    removeEventListener(type, click)
});
