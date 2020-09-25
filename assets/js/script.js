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
    // questions left and correct answer
    if (selectAns(event) === myquestions[runningQuest].correctAnswer && runningQuest < lastQuest) {
        runningQuest++;
        renderQuest();
        statusEL.innerHTML = "<p class='correct'> Correct </p>";
    }
    // no questions left and correct answer
    else if (selectAns(event) === myquestions[runningQuest].correctAnswer && runningQuest === lastQuest) {
        clearInterval(myInterval);
        createHigh();
    }
    // incorrect answer
    else{
        timeLeft = timeLeft - 10;
        statusEL.innerHTML = "<p class='incorrect'> Incorrect </p>";
    }
}

// Create a highscore
var createHigh = function(highscore) {
    highscoreEl.setAttribute("style", "display: block;")
    questionContainerEl.setAttribute("style", "display: none;");
    
    // Score is time left and code to ask for initials
    var yourScore = timeLeft;
    highscoreEl.innerHTML = "<h2>All Done!</h2><p>Your final score is " + yourScore + ".</p><p>Please in your initials: <input name='initials'></input><button id='submit'>Submit</button></p>";
    
    // Submit Results
    var submitBtn = document.querySelector("#submit");
    submitBtn.addEventListener("click", setHigh);
}  
    
// Set results as highscore
var setHigh = function(){
    // Variables for storage
    var yourScore = timeLeft;
    var initialsInput = document.querySelector("input[name='initials']").value;
    
    // Store initials and score in local storage
    localStorage.setItem("Initials", JSON.stringify(initialsInput));
    localStorage.setItem("Scores", JSON.stringify(yourScore));
    
    // view high scores
    viewHigh();
}

// View highscores
var viewHigh = function(){
    // Pull score and initials out of storage
    var score = localStorage.getItem("Scores");
    var initials = localStorage.getItem("Initials");

    // if there is no items in storage, no viewing highscores
    if (!score || !initials) {
        return false;
    }

    // parse out score and initials
    score = JSON.parse(score);
    initials = JSON.parse(initials);

    // Bring up highscore element
    startContainerEl.setAttribute("style", "display: none;");
    highscoreEl.setAttribute("style", "display: block;")
    questionContainerEl.setAttribute("style", "display: none;");

    // set innerHTML to show score and initials
    highscoreEl.innerHTML = "<h2>High Scores</h2><div class='score'> " + score + " " + initials + "</div><div id='buttons'><button id='back'>Back</button><button id='clear'>Clear</button>"; 
    
    // clear button
    var clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", clearHigh);

    // back/reset button
    var backBtn = document.querySelector("#back");
    backBtn.addEventListener("click", reset);
}

// clear local storage
var clearHigh = function() {
    localStorage.clear();
}

// go back to the start of quiz
var reset = function(){
    // resetting variables 
    timeLeft = 60;
    runningQuest = 0;

    // bringing up start container element
    startContainerEl.setAttribute("style", "display: block;");
    highscoreEl.setAttribute("style", "display: none;")
    questionContainerEl.setAttribute("style", "display: none;");
}

// event listeners
startBtn.addEventListener("click", startQuiz);
questionContainerEl.addEventListener("click", selectAns);
highscoreBtnEl.addEventListener("click", viewHigh);