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

