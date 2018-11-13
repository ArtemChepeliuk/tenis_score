var leftScore = document.getElementById('lscore');
var rightScore = document.getElementById('rscore');

function lcounter() {
  document.getElementById('lscore').innerHTML = ++leftScore;
  return leftScore;
}

function rcounter() {
  document.getElementById('rscore').innerHTML = ++rightScore;
  return rightScore;
}



function reset() {
  leftScore = 0;
  rightScore = 0;
  document.getElementById('rscore').innerHTML = leftScore;
  document.getElementById('lscore').innerHTML = rightScore;
}


let summ = leftScore + rightScore;
 
  if (summ % 2 == 0) {
    console.log(true)
  } else {
    console.log(false)
  }


