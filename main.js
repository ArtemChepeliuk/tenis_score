var leftScore = 0;
var rightScore = 0;

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
  document.getElementById('lscore').innerHTML = leftScore;
  document.getElementById('rscore').innerHTML = rightScore;
}

document.getElementById("lbutton").addEventListener("click", sumNumbers)

function sumNumbers() {
  let x = document.getElementById('lscore');
  let y = document.getElementById('rscore');
  let summ = x + y;

  if (summ % 2 == 0) {
    console.log(true)
  } else {
    console.log(false)
  }
}