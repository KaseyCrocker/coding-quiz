var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var btnStartVar = document.getElementById("btn-start");
var startQuizVar = document.getElementById("startQuiz");
var questionsArr = document.getElementById("showQuestions");
var time = 75;
var countDownVar = document.getElementById("countdown");

function generateQuiz(){
    var myQuestions = [
        {
            question: "What's the short cut to create a default page in HTML?",
            answers: ["html:5", "HTML", "It does not exist", "html'5"],
            correctAnswer: "0"
        },
        {
            question: "What's the first line in a HTML document?",
            answers: ["<docs html>","<!DOCTIPE html>", "<!DOCTYPE html>", "<html lang=>"],
            correctAnswer: "2"
        },
        {
            question: "Which answer is not true?",
            answers: ["var number = x;", "let number = y;","var arrNumber = [];", "div function() {};"],
            correctAnswer: "3"
        },
        {
            question: "What's the attribute that indicates the destination of the hyperlink after the anchor <a ...?",
            answers: ["ref", "href","img","id"],
            correctAnswer: "1"
        },
        {
            question: "How can you print a variable or a message in the debugging console in JavaScript?",
            answers: ["console.ra();", "console.log();", "console.val();", "console.911();"],
            correctAnswer: "1"
        },
        {
            question: "What's the correct way to display an image in css?",
            answers: ["<img...", "background-image:url('...')","padding: ...", "display-img"],
            correctAnswer: "2"
        },
        {
            question: "What DOM stands for in JavaScript?",
            answers: ["Document Object Model", "Document Object Modify","Document Other Model", "Days On Market"],
            correctAnswer: "0"
        },
        {
            question: "How can you display the color inside this code :root {--primary-color=#fce138}?",
            answers: ["var(primary-color);","var(--primary-color);","var(-primary-color);", "primary-color();"],
            correctAnswer: "1"
        },
        {
            question: "If you are in UCF BootCamp and you need help, what would be the first thing to do?",
            answers: ["call 911","ask in BCS Learning Assistant","watch movies to destress myself", "wait until class"],
            correctAnswer: "1"
        },
        {
            question: "What's the default value for flex-direction?",
            answers: ["column", "center","space-between", "row"],
            correctAnswer: "3"
        },
    ];

	function quiz(){
		// we'll need a place to store the output and the answer choices
	    var output = [];

	    // for each question...
	    myQuestions.forEach((currentQuestion, questionNumber) =>{
        
	    	// first reset the list of answers
	    	var answers = [];

	    	// for each available answer to this question...
	    	for(letter in currentQuestion.answers){

	    		// ...add an html radio button
	    		answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
	    		);
	    	}

	    	// add this question and its answers to the output
	    	output.push(
                `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                </div>`
		    );
            
	        // finally combine our output list into one string of html and put it on the page
            quizContainer.innerHTML = output.join('');
            showSlide(0);
	    });


	}

	function showResults() {
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll(".answers");
    
        // keep track of user's answers
        let numCorrect = 0;
    
        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            var answerContainer = answerContainers[questionNumber];
            var selector = `input[name=question${questionNumber}]:checked`;
            var userAnswer = (answerContainer.querySelector(selector) || {}).value;
            
            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;
            
                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].removeAttribute("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;
        
        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }
        
        if (currentSlide === slides.length - 1) {
            qnextButton.style.display = "none";
            qsubmitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");

    

    var nextButton = document.getElementById("next");
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;

    quiz();
    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    nextButton.addEventListener("click", showNextSlide);
}

function countDown (time){

    var timeInterval = setInterval(function(){
        
        if(time > 0){
            countDownVar.textContent = time;
            time--;             
        }

    }, 1000);
}

btnStartVar.addEventListener("click", function(){

    btnStartVar.setAttribute("disabled","true"); // disable btn so the timer does not goes up and down in value, only strings
    countDown(time);
    startQuizVar.setAttribute("class","hideElement"); // disable btn so the timer does not goes up and down in value, only strings
    questionsArr.removeAttribute("class");
    generateQuiz();
});



