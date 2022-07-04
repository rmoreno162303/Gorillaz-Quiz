const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choiceText'));

var timer = document.getElementById('timer');
var timeLeft = 61;
var score = document.getElementById('currentScore')


let currentQuestion = {}
let acceptingAnswers = true
// let score = 0;
let questionCounter = 0;
let availableQue = []



let questions = [
    { 
        question: "De donde soy?",
        choice1: 'San Marcos',
        choice2: 'Austin',
        choice3: 'Eagle Pass',
        choice4: 'El Indio',
        answer: 'El Indio',
    },
    {
        question: "De donde es Ruth?",
        choice1: 'San Marcos',
        choice2: 'Austin',
        choice3: 'Eagle Pass',
        choice4: 'El Indio',
        answer: 'Eagle Pass',
    },
    {
        question: "De donde es Henry?",
        choice1: 'San Marcos',
        choice2: 'Austin',
        choice3: 'England',
        choice4: 'El Indio',
        answer: 'England',
    },
    {
        question: "De donde es Steve?",
        choice1: 'San Marcos',
        choice2: 'Austin',
        choice3: 'Eagle Pass',
        choice4: 'El Indio',
        answer: 'Eagle Pass',
    },
    {
        question: "De donde es Welita Mela?",
        choice1: 'Monterey',
        choice2: 'Austin',
        choice3: 'England',
        choice4: 'El Indio',
        answer: 'Monterey',
    }

]

// const SCORE_POINTS = 100;
const MAX_QUESTIONS =  5;

startGame = () => {
    startTimer();
    questionCounter = 0;
    score = 0
    availableQue = [...questions]
    // gameClock()
    getNewQuestion()
}

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
        }
    })
}

// function gameClock () {
//     availableQue.textContent = questions[questionIndex].question;
//     startGame();
    // timeLeft = 61
//     var timeInterval = setInterval(function() {
//         if(timeLeft > 0) {
//             score.textContent = "Score:" + score;
//             timer.textContent = timeLeft + " seconds left.";
//             timeLeft--;
//         }else{
//             timer.textContent = "Game Over";
//             clearInterval(timeInterval);
//         };
//     }, 1000); 
// };

getNewQuestion = () => {
    if(availableQue.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('recentScore', score)

        return window.location.assign('end.html')
    }
    
    questionCounter++

    const questionIndex = Math.floor(Math.random() * availableQue.length)
    currentQuestion = availableQue[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQue.splice(questionIndex,1)

    acceptingAnswers = true 
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return 

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        timeLeft -= 10;

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        // if(classToApply === 'incorrect') {
        //     timer
        // }
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()

        }, 1000)
    })

// score

startGame()