//sefine global variables

var score = 0;
var secondsLeft = 60;
var timeLeft = document.getElementById("timeText");
var startButtonEl = document.querySelector("#startButton1");
var scoreTrackEl = document.getElementById("scoreTrack");
var rightWrong = document.getElementById("feedback");
var startDis = document.querySelector(".main");
var testDis = document.getElementById("questionSec");
var questionDis = document.getElementById("question");
var subAnsEl = document.getElementById("subAns");
var ansA = document.getElementById("optionA");
var ansB = document.getElementById("optionB");
var ansC = document.getElementById("optionC");
var ansD = document.getElementById("optionD");
var answerEl = document.getElementsByClassName("answer");
var endScoreEl = document.getElementById("endScore");
var finalAns = "";
var q = 0;
// console.log(startButtonEl);

// link test initialization button

startButtonEl.addEventListener("click", function () {
  timer();
  runTest();
  questionPrompt();
});
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
function runTest() {
  startDis.setAttribute("style", "display:none;");
  testDis.setAttribute("style", "display:block;");
}

var clickCheck = function () {
  finalAns = this.getAttribute("value");
  questionArr[q].answerCheck();
  q++;
  if (q > questionArr.length - 1) {
    finalScore();
  } else {
    questionPrompt();
  }
};

for (var i = 0; i < answerEl.length; i++) {
  answerEl[i].addEventListener("click", clickCheck);
}
console.log(answerEl.length);
// creat objects for questions and answers
var questionArr = [
  {
    question: "What symbols denote a function",
    answers: ["()", "//", "{}", "[]"],
    answerCheck: function () {
      // provide feedback for correct and incorrect answers
      if (finalAns == "a") {
        score++;
        rightWrong.textContent = "Correct!";
      } else {
        // create method to adjust timer based on correct vs incorrect answers
        secondsLeft = secondsLeft - 10;
        rightWrong.textContent = "Incorrect";
      }
    },
  },
  {
    question: "Where can global variables be accessed?",
    answers: [
      "Only inside a function",
      "Only inside an object",
      "Anywhere in the script",
      "Yep",
    ],
    answerCheck: function () {
      // provide feedback for correct and incorrect answers
      if (finalAns == "c") {
        score++;
        rightWrong.textContent = "Correct!";
      } else {
        // create method to adjust timer based on correct vs incorrect answers
        secondsLeft = secondsLeft - 10;
        rightWrong.textContent = "Incorrect";
      }
    },
  },
  {
    question: "In JavaScript, what does DOM refer to?",
    answers: [
      "Deciding Object Material",
      "Document Object Model",
      "Decidedly Obtuse Model",
      "Drink Only Margaritas",
    ],
    // provide feedback for correct and incorrect answers
    answerCheck: function () {
      if (finalAns == "b") {
        score++;
        rightWrong.textContent = "Correct!";
      } else {
        // create method to adjust timer based on correct vs incorrect answers
        secondsLeft = secondsLeft - 10;
        rightWrong.textContent = "Incorrect";
      }
    },
  },
];
// create waay to display questions
function questionPrompt() {
  questionDis.innerHTML = questionArr[q].question;
  ansA.innerHTML = questionArr[q].answers[0];
  ansB.innerHTML = questionArr[q].answers[1];
  ansC.innerHTML = questionArr[q].answers[2];
  ansD.innerHTML = questionArr[q].answers[3];
  // create score tracker
  scoreTrackEl.textContent = "You're current score is " + score;
}

// console.log(answerEl);
// answerEl.addEventListener("click", function () {
// answerEl = document.getElementById("answer").value;
//   console.log(answerEl);
//   questionArr[q].answerCheck();
//   q++;
//   if (q > questionArr.length - 1) {
//     finalScore();
//   } else {
//     questionPrompt();
//   }
// });

// create final score card
// create input to track score
function finalScore() {
  document.getElementById("finalScore").setAttribute("style", "display:block;");
  endScoreEl.textContent = "You're final score is " + score;
  testDis.setAttribute("style", "display:none;");
}
