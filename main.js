var $leftScore = document.getElementById('lscore');
var $rightScore = document.getElementById('rscore');
var leftBall =  document.getElementById('lBall');
var rigthBall =  document.getElementById('rBall');
    leftSum = 0;
    rightSum = 0;

function lcounter() {
   $leftScore.innerHTML = ++leftSum;
  onUpdate();
}

function rcounter() {
  $rightScore.innerHTML = ++rightSum;
  onUpdate();
}

function reset() {
  $leftScore.innerHTML = leftSum = 0;
  $rightScore.innerHTML = rightSum = 0;
  document.getElementById('lBall').style.visibility = 'visible';
  document.getElementById('rBall').style.visibility = 'hidden';
}

function onUpdate() {
  if ((+leftSum + +rightSum) % 2 === 0) {
    leftBall.style.visibility = leftBall.style.visibility == "visible" ? "hidden" : "visible";
    rigthBall.style.visibility = rigthBall.style.visibility == "hidden" ? "visible" : "hidden";

  } 
}