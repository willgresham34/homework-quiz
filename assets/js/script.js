var startBtn = document.querySelector('.start-btn');
var timerEl = document.querySelector('.time');
var startBox = document.querySelector('.start-container');
var quizBox = document.querySelector('.quiz-container'); 
var option_list = document.querySelector('.option_list');
var answerRes = document.querySelector('.answerRes');
var option = document.querySelector('.option');
var endPage = document.querySelector('.endPage');
var score = document.querySelector('.score');

var que_count = 0;
var timer;
var timeCount;
//when start button is clicked
startBtn.addEventListener('click', startQuiz);
function startQuiz() {
    startBox.classList.add('hide');
    quizBox.classList.remove('hide');
    startTimer();
    showQuestions(0);
    timeCount = 60;
}
//show question
function showQuestions(index) {
    var question = document.querySelector(".question");

    var queTag = '<span>' + questions[index].question + '</span>';
    var optTag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';

    question.innerHTML = queTag;
    option_list.innerHTML = optTag;

    var option = option_list.querySelectorAll('.option');

    for(i=0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'selectedOption(this)');
    }
}

//when an option is picked
function selectedOption(answer) {
    var userAns = answer.textContent;
    var correctAns = questions[que_count].answer;
    // var allOptions = option_list.children.length;
    if (userAns === correctAns) {
        answerRes.innerHTML = "Correct!";
    } else {
        answerRes.innerHTML = "Wrong!";
        timeCount -= 10;
    }
    if (que_count < questions.length - 1){
        que_count++,
        showQuestions(que_count);
    } else {
        showResults();
    }
}

function showResults() {
    quizBox.classList.add('hide');
    endPage.classList.remove('hide');
    score.innerHTML = timeCount;
    clearInterval(timer);
}

function startTimer() {
    timer = setInterval(function (){
        timeCount--;
        timerEl.textContent = timeCount;
    }, 1000);
}