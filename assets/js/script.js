var startBtn = document.querySelector('.start-btn');
var timerEL = document.querySelector('.timer');
var startBox = document.querySelector('.start-container');
var quizBox = document.querySelector('.quiz-container'); 
var option_list = document.querySelector('.option_list');
var answerRes = document.querySelector('.answerRes');
var option = document.querySelector('.option');
var que_count = 0;

//when start button is clicked
startBtn.addEventListener('click', startQuiz);
function startQuiz() {
    startBox.classList.add('hide');
    quizBox.classList.remove('hide');
    // startTimer(60);
    showQuestions(0);
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
    }
    if (que_count < questions.length - 1){
        que_count++,
        showQuestions(que_count);
    } else {
        // showResults();
    }
}

