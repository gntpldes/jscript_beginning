var scores, roundScore, activePlayer, dice, gamePlaying; 

init(); 


//The game
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        //Roll Dice
    //1. Random Number 
        var dice = Math.floor(Math.random() * 6) +1; 
        //2. Display Result
        var diceDOM = document.querySelector('.dice'); 
        diceDOM.style.display = 'block'; 
        diceDOM.src = 'dice-' + dice + '.png'; 

        //3. Update Round Score if rolled number isnt 1
        if (dice !== 1){
            //add to score
            roundScore += dice; 
            document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        }else{
            //Next Player
            nextPlayer(); 
        }    
    }
}); 


//This is why you start by commenting what the section does...
document.querySelector('btn-hold').addEventListener('click', function(){
    if (gamePlaying){
            //Add current score to global score
            scores[activePlayer] += roundScore;

            //Update UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 

            //See if player won game
            if(scores[activePlayer] >= 100){
                document.querySelector('#name-' + activePlayer).textContent = "Winner!"; 
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
                gamePlaying = false; 
            }else{
                //Next Player
                nextPlayer(); 
            }
    }


}); 

//Switch player
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0; 

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('.active'); 
    document.querySelector('.player-1-panel').classList.toggle('active'); 
        
    document.querySelector('.dice').style.display = 'none'; 
}; 

//New Game
document.querySelector('.btn-new').addEventListener('click', init); 

function init() {
    //set score variables
    scores = [0,0]; 
    activePlayer = 0; 
    roundScore = 0; 
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none'; 
    //set player variables
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('#name-0').textContent = 'Player 1';
    document.getElementById('#name-1').textContent = 'Player 2'; 

    //reset player status variables
    document.querySelector('.player-0-panel').classList.remove('winner'); 
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-0-panel').classList.add('active');     
    document.querySelector('.player-1-panel').classList.remove('active'); 
}