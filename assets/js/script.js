var startBtn = document.querySelector('.start-btn');
var timerEL = document.querySelector('.timer');
var startBox = document.querySelector('.start-container');
var quizBox = document.querySelector('.quiz-container'); 
var option_list = document.querySelector('.option_list');

//when start button is clicked
startBtn.addEventListener('click', startQuiz);
function startQuiz() {
    startBox.classList.add('hide');
    quizBox.classList.remove('hide');
    // startTimer(60);
    showQuestions(1);
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

//when correct option (if else )

//