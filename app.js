//Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;


//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [ 0, 0]

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг Random-оор хийж өгнө.

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.btn-roll').addEventListener('click', function (){
    var dice = Math.floor(Math.random() * 6)+1;
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = "dice-" + dice + '.png'; 
});
