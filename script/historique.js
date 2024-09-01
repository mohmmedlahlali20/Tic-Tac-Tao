const listUl = document.getElementById('listHistorique');
const players = JSON.parse(localStorage.getItem('currentPlayers')) || [];

for (let i = 0; i < players.length; i += 2) {
    const listLi = document.createElement('li');
    
    if (i + 1 < players.length) {
        listLi.innerHTML = `<span class="player-name">${players[i].name}</span> <span class="player-score">${players[i].score} - ${players[i + 1].score}</span> <span class="player-name">${players[i + 1].name}</span>`;
    } else {
        listLi.innerHTML = `<span class="player-name">${players[i].name}</span> <span class="player-score">${players[i].score}</span> <span class="player-name">No opponent</span>`;
    }
    
    listUl.appendChild(listLi);
}
