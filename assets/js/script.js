// Quiz question array
var myquestions = [
    {
        question: "Question1?",
        
        a: "Answer 1", 
        b: "Answer 2", 
        c: "Answer 3", 
        d: "Answer 4",
        
        correctAnswer: "c"
    },
    {
        question: "Question2?",
        
        a: "Answer 1", 
        b: "Answer 2", 
        c: "Answer 3", 
        d: "Answer 4",
        
        correctAnswer: "c"
    },
    {
        question: "Question3?",
        
        a: "Answer 1", 
        b: "Answer 2", 
        c: "Answer 3", 
        d: "Answer 4",
        
        correctAnswer: "c"
    },
    {
        question: "Question4?",
        
        a: "Answer 1", 
        b: "Answer 2", 
        c: "Answer 3", 
        d: "Answer 4",
        
        correctAnswer: "c"
    },
];


var timeLeftEl = document.querySelector("#timeleft");
var startBtn = document.querySelector("#start-btn");
var questionContainerEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerButtonEl = document.querySelector("#answer-buttons");
var highscoreBtnEl = document.querySelector("#highscore");
var aEl = document.querySelector("#A");
var bEl = document.querySelector("#B");
var cEl = document.querySelector("#C");
var dEl = document.querySelector("#D");

var timeLeft = 60;
// Timer
var countdown = function() {
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

// var selectAnswer = function(event) {
//     var selectedButton = event.target;
//     var answerOut = selectedButton.id;
//     console.log(answerOut);
// }

// // Starts the quiz
// var startQuiz = function() {
//     countdown();
//     startBtn.classList.add("hide");
//     quiz();
// }

// var quiz = function() {
//     //debugger;
//     questionContainerEl.classList.remove("hide");
//     for (i = 0; i < myquestions.length; i++) {
//         questionEl.textContent = myquestions[i].question;
        
//         answerButtonEl.innerHTML = 
//         "<button class='btn' id='a'>" + myquestions[i].answers.a + "</button>" +
//         "<button class='btn' id='b'>" + myquestions[i].answers.b + "</button>" +
//         "<button class='btn' id='c'>" + myquestions[i].answers.c + "</button>" +
//         "<button class='btn' id='d'>" + myquestions[i].answers.d + "</button>";

//         if (selectAnswer(event) === myquestions[i].correctAnswer){
//            i++;
//         }
//         answerButtonEl.addEventListener("click", selectAnswer);
//     }
// }








var lastQuest = myquestions.length - 1;
var runningQuest = 0;

var renderQuest = function() {
    var q = myquestions[0];

    questionEl.innerHTML = "<p>" + q.question + "</p>";
    aEl.innerHTML = q.a;
    bEl.innerHTML = q.b;
    cEl.innerHTML = q.c;
    dEl.innerHTML = q.d;
}

var startQuiz = function() {
    startBtn.setAttribute("style", "display: none;");
    renderQuest();
    questionContainerEl.setAttribute("style", "display: block;");
    countdown();
}

var selectAns = function(event) {
    var selected = event.target;
    var answer = selected.id.toLowerCase();
    return answer;
}


var checkAnswer = function() {
    console.log(selectAns(event));
    if (selectAns(event) === myquestions[runningQuest].correctAnswer) {
        runningQuest++;
        console.log(runningQuest);
        renderQuest();
    }
    else{
        timeLeft = timeLeft - 10;
    }
}

startBtn.addEventListener("click", startQuiz);
questionContainerEl.addEventListener("click", selectAns);