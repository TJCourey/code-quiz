//sefine global variables
var timeLeft = document.querySelector(".timeText");
var score;
var secondsLeft = 90;

// link test initialization button
// create counter for test time
function timer() {
  var timerCount = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerCount);
      finalScore();
    }
  }, 1000);
}
// create prompts for questions
// creat objects for questions and answers
// create way to track scores
// create score tracker
// provide feedback for correct and incorrect answers
// create method to adjust timer based on correct vs incorrect answers
// create final score card
// create input to track score
