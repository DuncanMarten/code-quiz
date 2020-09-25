// Quiz question array
var myquestions = [
    {
        question: "Which HTML element do we put JavaScript in?",
        
        a: "script", 
        b: "scripting", 
        c: "js", 
        d: "javascript",
        
        correctAnswer: "a"
    },
    {
        question: "What is the correct syntax for referring to and external script 'x.js?''",
        
        a: "script name='x.js'", 
        b: "script class='x.js'", 
        c: "script src='x.js'", 
        d: "script href='x.js'",
        
        correctAnswer: "c"
    },
    {
        question: "How do you write 'True' in an alert box?",
        
        a: "msgBox('True');", 
        b: "msg('True');", 
        c: "alertbox('True');", 
        d: "alert('True');",
        
        correctAnswer: "d"
    },
    {
        question: "When writing an IF statement, what is the syntax you use?",
        
        a: "if i = 2", 
        b: "if (i === 2)", 
        c: "if i === 2 then", 
        d: "if i = 2 then",
        
        correctAnswer: "b"
    },
];

// DOM elements
var timeLeftEl = document.querySelector("#timeleft");
var startBtn = document.querySelector("#start-btn");
var startContainerEl = document.querySelector("#start-container");
var questionContainerEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerButtonEl = document.querySelector("#answer-buttons");
var highscoreBtnEl = document.querySelector("#high-btn");
var aEl = document.querySelector("#A");
var bEl = document.querySelector("#B");
var cEl = document.querySelector("#C");
var dEl = document.querySelector("#D");
var statusEL = document.querySelector("#status");
var highscoreEl = document.querySelector("#highscores-container");

var timeLeft = 60;
var myInterval;
var highscores = [];

// Timer
var countdown = function() {
    myInterval = setInterval(function() {
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

// Variables for render question input
var lastQuest = myquestions.length - 1;
var runningQuest = 0;

// Creates the question for the quiz
var renderQuest = function() {
    var q = myquestions[runningQuest];

    questionEl.innerHTML = "<p>" + q.question + "</p>";
    aEl.innerHTML = q.a;
    bEl.innerHTML = q.b;
    cEl.innerHTML = q.c;
    dEl.innerHTML = q.d;
    statusEL.innerHTML = "";
}

// Starts the quiz
var startQuiz = function() {
    startContainerEl.setAttribute("style", "display: none;");
    renderQuest();
    questionContainerEl.setAttribute("style", "display: block;");
    countdown();
}

// Answer selected from the choices
var selectAns = function(event) {
    var selected = event.target;
    var answer = selected.id.toLowerCase();
    return answer;
}

// Check to see if answer selected is correct
var checkAnswer = function() {
    if (selectAns(event) === myquestions[runningQuest].correctAnswer && runningQuest < lastQuest) {
        runningQuest++;
        renderQuest();
    }
    else if (selectAns(event) === myquestions[runningQuest].correctAnswer && runningQuest === lastQuest) {
        clearInterval(myInterval);
        createHigh();
    }
    else{
        timeLeft = timeLeft - 10;
        statusEL.innerHTML = "<p class='incorrect'> Incorrect </p>"
    }
}

// Create a highscore
var createHigh = function(highscore) {
    highscoreEl.setAttribute("style", "display: block;")
    questionContainerEl.setAttribute("style", "display: none;");
    var yourScore = timeLeft;
    highscoreEl.innerHTML = "<h2>All Done!</h2><p>Your final score is " + yourScore + ".</p><p>Please in your initials: <input name='initials'></input><button id='submit'>Submit</button></p>";
    var initialsInput = document.querySelector("input[name='initials']").value;
    var highscore = {
        initials: initialsInput,
        score: yourScore
    };
    highscores.push(highscore);
    var submitBtn = document.querySelector("#submit");
    submitBtn.addEventListener("click", setHigh);
}  
    

var setHigh = function(){
    localStorage.setItem("HighScores", JSON.stringify(highscores));
}

// View highscores
var viewHigh = function(){

}

startBtn.addEventListener("click", startQuiz);
questionContainerEl.addEventListener("click", selectAns);
highscoreBtnEl.addEventListener("click", viewHigh);