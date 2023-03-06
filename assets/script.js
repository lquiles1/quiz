let time = document.querySelector(".time");
let secondsLeft = 51;
let startQuiz = document.getElementById('startBtn');
let questionTitle = document.getElementById("questionTitle");
let subheading = document.getElementById("subheading")
let correctAnswer = Document.getElementById("answerBtn");



function setTime() {

    let timerInterval = setInterval(function () {
            secondsLeft--;
            time.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {

            clearInterval(timerInterval);
            secondsLeft = 51;
        }

    }, 1000);
}

function question1()
 {

    questionTitle.textContent = "Commonly used data types DO NOT include:";
    questionTitle.style.fontsize = "30px";
    subheading.style.display = "none";
    startQuiz.textContent= " 1. Numbers";

   
    

 }

  startQuiz.addEventListener("click", setTime);
  startQuiz.addEventListener('click', question1);
