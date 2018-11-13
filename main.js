var leftScore=0;
var rightScore=0;
function lcounter(){
    document.getElementById('lscore').innerHTML = ++leftScore;
}
function rcounter(){
  document.getElementById('rscore').innerHTML = ++rightScore;     
}
  
// function reset() {
//  let left=0;
//  let right=0;
//  document.getElementById('rscore').innerHTML = left; 
//  document.getElementById('lscore').innerHTML = right;
// }