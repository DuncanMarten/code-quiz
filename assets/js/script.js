// Quiz question array
var myquestions = [
    {
        question: "Question1?",
        answers: {
            a: "Answer 1", 
            b: "Answer 2", 
            c: "Answer 3", 
            d: "Answer 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Question2?",
        answers: {
            a: "Answer 1", 
            b: "Answer 2", 
            c: "Answer 3", 
            d: "Answer 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Question3?",
        answers: {
            a: "Answer 1", 
            b: "Answer 2", 
            c: "Answer 3", 
            d: "Answer 4"
        },
        correctAnswer: "c"
    },
    {
        question: "Question4?",
        answers: {
            a: "Answer 1", 
            b: "Answer 2", 
            c: "Answer 3", 
            d: "Answer 4"
        },
        correctAnswer: "c"
    },
];


var timeLeftEl = document.querySelector("#timeleft");
var startBtn = document.querySelector("#start-btn");
var questionContainerEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerButtonEl = document.querySelector("#answer-buttons");
var highscoreBtnEl = document.querySelector("#highscore");

// Timer
var countdown = function() {
    var timeLeft = 60;
    var myInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timeLeftEl.textContent = "Time: " + timeLeft;
        }
        else {
            timeLeft = 0;
        }
        return timeLeft;
    }, 1000);
};

// Starts the quiz
var startQuiz = function() {
    countdown();
    startBtn.classList.add("hide");
    quiz();
}

var quiz = function() {
    questionContainerEl.classList.remove("hide");
    for (i = 0; i < myquestions.length; i++) {
        questionEl.textContent = myquestions[i].question;
        var button = answerButtonEl.createElement("button");
        button.textContent = "hi";

        // if (selectAnswer === myquestions[i].correctAnswer){

        // }

        // button.addEventListener("click", selectAnswer);
    }
}



startBtn.addEventListener("click", startQuiz);