var leftScore = 0;
var rightScore = 0;
function lcounter() {

  document.getElementById('lscore').innerHTML = ++leftScore;
}

function rcounter() {

  document.getElementById('rscore').innerHTML = ++rightScore;
}

function reset() {
  leftScore = 0;
  rightScore = 0;
  document.getElementById('rscore').innerHTML = leftScore;
  document.getElementById('lscore').innerHTML = rightScore;
}