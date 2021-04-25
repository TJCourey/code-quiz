//sefine global variables

var score = 0;
var secondsLeft = 60;
var timeLeft = document.getElementById("timeText");
var startButtonEl = document.getElementById("startButton");
var scoreTrackEl = document.getElementById("scoreTrack");
var rightWrong = document.getElementById("feedback");
var startDis = document.querySelector(".main");

console.log(startButtonEl);

// link test initialization button
startButtonEl.addEventListener("click", timer());

// console.log(startButtonEl);

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

startButtonEl.addEventListener("click", runTest());

function runTest() {
  startDis.setAttribute("style", "display:none;");
}

// creat objects for questions and answers

var question1 = {
  question: "What symbols denote a function",
  answers: ["()", "//", "{}", "[]"],
  answerCheck: function () {
    // provide feedback for correct and incorrect answers
    if ((this.answers = answerSel)) {
      score++;
      rightWrong.textContent = "Correct!";
    } else {
      // create method to adjust timer based on correct vs incorrect answers
      secondsLeft = secondsLeft - 10;
      rightWrong.textContent = "Incorrect";
    }
  },
};
var question2 = {
  question: "Where can global variables be accessed?",
  answers: [
    "Only inside a function",
    "Only inside an object",
    "Anywhere in the script",
    "Yep",
  ],
  answerCheck: function () {
    // provide feedback for correct and incorrect answers
    if ((this.answers = answerSel)) {
      score++;
      rightWrong.textContent = "Correct!";
    } else {
      // create method to adjust timer based on correct vs incorrect answers
      secondsLeft = secondsLeft - 10;
      rightWrong.textContent = "Incorrect";
    }
  },
};
var question3 = {
  question: "In JavaScript, what does DOM refer to?",
  answers: [
    "Deciding Object Material",
    "Document Object Model",
    "Decidedly Obtuse Model",
    "Drink Only Margaritas",
  ],
  answerCheck: function () {
    // provide feedback for correct and incorrect answers
    if ((this.answers = answerSel)) {
      score++;
      rightWrong.textContent = "Correct!";
    } else {
      // create method to adjust timer based on correct vs incorrect answers
      secondsLeft = secondsLeft - 10;
      rightWrong.textContent = "Incorrect";
    }
  },
};
// create way to track scores
// create score tracker
scoreTrackEl.textContent = "You're current score is " + score;

// create final score card
function finalScore() {
  scoreTrackEl.textContent = "You're final score is " + score;
}
// create input to track score
