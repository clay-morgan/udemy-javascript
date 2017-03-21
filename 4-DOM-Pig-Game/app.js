/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

initGame();

function initGame() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0' ).textContent = 'Player 1';
    document.getElementById('name-1' ).textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function toggleActivePlayer() {
    // next player
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-roll').addEventListener( 'click', function() {
    if( gamePlaying ) {
        // 1. random number
        var diceRoll = Math.floor( Math.random() * 6 ) + 1;

        // 2. display the result
        var diceImage = document.querySelector('.dice');
        diceImage.style.display='block';
        diceImage.src = 'dice-' + diceRoll + '.png';

        // 3. update the round score IF the rolled number was NOT a 1
        if ( diceRoll !== 1 ) {
            // add score
            roundScore += diceRoll;
            document.querySelector('#current-' + activePlayer ).textContent = roundScore;

        } else {
            toggleActivePlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener( 'click', function() {
    if( gamePlaying ) {
        // 1. add the current score to the player's global score
        scores[activePlayer] += roundScore;
        roundScore = 0;

        // 2. Update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // 3. Check if a player won the game
        if( scores[activePlayer] >= 100 ) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner');
            gamePlaying = false;
        } else {
            toggleActivePlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener( 'click', initGame );