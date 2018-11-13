var $leftScore = document.getElementById('lscore');
  var $rightScore = document.getElementById('rscore');
    leftSum = 0;
    rightSum = 0;

function lcounter() {
  $leftScore.innerHTML = ++leftSum;;
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
  var x = (+leftSum + +rightSum) % 2 == 0;
  var y = (+leftSum + +rightSum);
  console.log(x);
  console.log(y);
  if ((+leftSum + +rightSum) % 2 == 0) {
    document.getElementById('lBall').style.visibility = 'visible';
    document.getElementById('rBall').style.visibility = 'hidden';
    console.log('visn');
    // sum % 2 = 1
  } else {
    document.getElementById('rBall').style.visibility = 'visible';
    document.getElementById('lBall').style.visibility = 'hidden';
    console.log('hidn');
    // sum % 2 = 0
  }
}