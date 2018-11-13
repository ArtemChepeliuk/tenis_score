// var leftScore = 0;
// var rightScore = 0;

// function lcounter() {
//   document.getElementById('lscore').innerHTML = ++leftScore;
//   return leftScore;
// }

// function rcounter() {
//   document.getElementById('rscore').innerHTML = ++rightScore;
//   return rightScore;
// }



// function reset() {
//   leftScore = 0;
//   rightScore = 0;
//   document.getElementById('lscore').innerHTML = leftScore;
//   document.getElementById('rscore').innerHTML = rightScore;
// }

// document.getElementById("lbutton").addEventListener("click", sumNumbers)

// function sumNumbers() {
//   let x = document.getElementById('lscore').innerText;
//   let y = document.getElementById('rscore').innerText;
//   let summ = +x + +y;

//   if (summ % 2 == 0) {
//     document.getElementById('lBall').style.visibility = 'visible'
//     document.getElementById('rBall').style.visibility = 'hidden'
//   } else {
//     document.getElementById('rBall').style.visibility = 'visible'
//     document.getElementById('lBall').style.visibility = 'hidden'
//   }
// }

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
  onUpdate();
}

function onUpdate() {
  if ((+leftSum + +rightSum) % 2) {
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