var headerVar = document.getElementById("header");
var countDownVar = document.getElementById("countdown");  // done
var btnStartVar = document.getElementById("btn-start");
var initialsVar = document.getElementById("initials");
var btn1Var = document.getElementById("btn1");
var btn2Var = document.getElementById("btn2");
var btn3Var = document.getElementById("btn3");
var btn4Var = document.getElementById("btn4");
var finalScoreVar = document.getElementById("final-score");
var mainContainerVar = document.getElementById("mainContainer");
var startQuizVar = document.getElementById("startQuiz")
var time = 75;
var questionsArr = document.getElementById("showQuestions");

console.log(countDownVar);



console.log(document.getElementsByTagName("title"));
var questions = [
    {
        question: "What's the short cut to create a default page in HTML?",
        options: ["html:5", "HTML", "It does not exist", "html'5"],
        answer: 0
    },
    {
        question: "What's the first line in a HTML document?",
        options: ["<docs html>","<!DOCTIPE html>", "<!DOCTYPE html>", "<html lang=>"],
        answer: 2
    },
    {
        question: "Which option is not true?",
        options: ["var number = x;", "let number = y;","var arrNumber = [];", "div function() {};"],
        answer: 3
    },
    {
        question: "What's the attribute that indicates the destination of the hyperlink after the anchor <a ...?",
        options: ["ref", "href","img","id"],
        answer: 1
    },
    {
        question: "How can you print a variable or a message in the debugging console in JavaScript?",
        options: ["console.ra();", "console.log();", "console.val();", "console.911();"],
        answer: 1
    },
    {
        question: "What's the correct way to display an image in css?",
        options: ["<img...", "background-image:url('...')","padding: ...", "display-img"],
        answer: 2
    },
    {
        question: "What DOM stands for in JavaScript?",
        options: ["Document Object Model", "Document Object Modify","Document Other Model", "Days On Market"],
        answer: 0
    },
    {
        question: "How can you display the color inside this code :root {--primary-color=#fce138}?",
        options: ["var(primary-color);","var(--primary-color);","var(-primary-color);", "primary-color();"],
        answer: 1
    },
    {
        question: "If you are in UCF BootCamp and you need help, what would be the first thing to do?",
        options: ["call 911","ask in BCS Learning Assistant","watch movies to destress myself", "wait until class"],
        answer: 1
    },
    {
        question: "What's the default value for flex-direction?",
        options: ["column", "center","space-between", "row"],
        answer: 3
    },

];


function countDown (time){

    var timeInterval = setInterval(function(){
        
        if(time > 0){
            countDownVar.textContent = time;
            time--;             
        }
        else {
            alert("You are out of time!");
        }

    }, 1000);
}

btnStartVar.addEventListener("click", function(){

    // disable btn so the timer does not goes up and down in value, only strings
    btnStartVar.setAttribute("disabled","true");
    countDown(time);
    // disable btn so the timer does not goes up and down in value, only strings
    startQuizVar.setAttribute("class","hideElement"); 
    questionsArr.removeAttribute("class");
    arrayQuestions();
});



function arrayQuestions(questions){

    var questionTitle = document.getElementById("title");

    questionTitle.textContent = questions.question;
//    for (var i = 0; i < questions.length; i++) {
//        // ask question
//        if (questions[i]) {
//        questionTitle.textContent = questions.question;
//        // once answered, display if answer was correct
//    
//        // loop to next question
//        }
//    }
}


console.log(questions);
console.log(arrayQuestions);