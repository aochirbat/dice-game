//Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;


//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [ 0, 0]

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг Random-оор хийж өгнө.
var dice = Math.floor(Math.random() * 6)+1;
document.querySelector('#score-0').textContent = dice;
console.log('shoo: ' + dice)