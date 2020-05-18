var activePlayer;
var scores; 
var roundScore;
var isNewGame;
newGame();
var diceNone = document.querySelector('.dice');
function newGame(){
    //Хэдэн оноогоор тоглох.
    // var limitScore = prompt('Хэдэн оноогоор тоглох вэ?');
    isNewGame = true;
    //Тоглогчийн ээлжийг хадгалах хувьсагч
    activePlayer = 0;
    //Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];
    //Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
};
function switchPlayer(){
        roundScore = 0;
        document.getElementById('score-'+ activePlayer).textContent = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceNone.style.display = 'none';
};
document.querySelector('.btn-roll').addEventListener('click', function (){
    if(isNewGame){
        var dice = Math.floor(Math.random() * 6)+1;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = "dice-" + dice + '.png'; 
        if(dice !== 1){
            roundScore =roundScore + dice;
            document.getElementById('score-' + activePlayer).textContent = roundScore;     
        }else {
            switchPlayer();
    }
    }else {
        alert('Game over');
    }
});
document.querySelector('.btn-hold').addEventListener('click' , function(){
    if(isNewGame){   
    //Тоглогчын цугуулсан оноог хадгалах хэсэг рүү хийх.
       scores[activePlayer] = scores[activePlayer] + roundScore;
       document.getElementById('current-' + activePlayer).textContent = scores[activePlayer];
       if(scores[activePlayer] >= 10 ){
           isNewGame = false;
        document.getElementById('name-' + activePlayer).textContent ='Winner!!!';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        diceNone.style.display = 'none';
        alert('Game over');
        } else{
            switchPlayer();
        }
    } else{
        alert('Game over');
    }
});
document.querySelector('.btn-new').addEventListener('click', newGame);
