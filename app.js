//Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;


//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [ 0, 0]

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг Random-оор хийж өгнө.

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
function noilBolgodEeljSolino(){
        roundScore = 0;
        document.getElementById('score-'+ activePlayer).textContent = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click', function (){
    var dice = Math.floor(Math.random() * 6)+1;
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = "dice-" + dice + '.png'; 
    if(dice !== 1){
        roundScore =roundScore + dice;
        document.getElementById('score-' + activePlayer).textContent = roundScore;     
    }else {
        noilBolgodEeljSolino();
    }
    
   
});



//Hold process 

document.querySelector('.btn-hold').addEventListener('click' , function(){
    //Тоглогчын цугуулсан оноог хадгалах хэсэг рүү хийх.
       scores[activePlayer] = scores[activePlayer] + roundScore;
       document.getElementById('current-' + activePlayer).textContent = scores[activePlayer];
    //Rounscore 0 болгож өгнө.
    //Ээлжийг нь сольж өгнө.
    noilBolgodEeljSolino(); 

});
