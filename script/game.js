const divGame = document.getElementById('divGame');
const dataDiv = document.createElement('div');
const buttonClear = document.createElement('button');

const p1 = document.createElement('p'); 
const p2 = document.createElement('p'); 

dataDiv.classList.add('dataDiv');
divGame.appendChild(dataDiv);
divGame.appendChild(buttonClear);
dataDiv.appendChild(p1);
dataDiv.appendChild(p2); 

buttonClear.classList.add('buttonClear');
buttonClear.textContent = 'Clear New Players';

const newPlayers = JSON.parse(sessionStorage.getItem('newPlayers') || '[]');
const storedPlayers = localStorage.getItem('players');

let playersToDisplay = [];

if (newPlayers.length > 0) {
    playersToDisplay = newPlayers;
} else if (storedPlayers) {
    const players = JSON.parse(storedPlayers);
    if (players.length >= 2) {
        playersToDisplay = players;
    }
}

if (playersToDisplay.length >= 2) {
    p1.textContent = `${playersToDisplay[0].name} : ${playersToDisplay[0].score}`;
    p2.textContent = `${playersToDisplay[1].name} : ${playersToDisplay[1].score}`;
} else {
    p1.textContent = 'Player 1: No data';
    p2.textContent = 'Player 2: No data';
}

buttonClear.addEventListener('click', () => {
    sessionStorage.setItem('newPlayers', JSON.stringify([]));
    console.log("Cleared new players:", newPlayers);
});




