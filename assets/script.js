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
console.log(startButtonEl);

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
// creat objects for questions and answers
var questionArr = [
  {
    question: "What symbols denote a function",
    answers: ["()", "//", "{}", "[]"],
    answerCheck: function () {
      // provide feedback for correct and incorrect answers
      if (subAnsEl == "a") {
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
      if (subAnsEl == "c") {
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
    answerCheck: function () {
      // provide feedback for correct and incorrect answers
      if (subAnsEl == "b") {
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
var i = 0;
function questionPrompt() {
  questionDis.innerHTML = questionArr[i].question;
  ansA.innerHTML = questionArr[i].answers[0];
  ansB.innerHTML = questionArr[i].answers[1];
  ansC.innerHTML = questionArr[i].answers[2];
  ansD.innerHTML = questionArr[i].answers[3];
  console.log(questionArr[i].answers[1]);
}
subAnsEl.addEventListener("click", function () {
  i++;
  if (i > questionArr.length - 1) {
    finalScore();
  } else {
    questionPrompt();
  }
});

// create score tracker
scoreTrackEl.textContent = "You're current score is " + score;

// create final score card
function finalScore() {
  scoreTrackEl.textContent = "You're final score is " + score;
}
// create input to track score
