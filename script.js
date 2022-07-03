 var headSta = document.querySelector(".headSta");
var parOne = document.querySelector(".parOne");
var startBut = document.querySelector(".startBut");

var timer;


// headSta.children[0].textContent = "Code Quiz";
// parOne.children[0].textContent = "It's time to test your coding skills. Click start to begin.";

const startButton = document.getElementById('startButton')
const questionContainer = document.getElementById('queContainer')

const questionInfo = document.getElementById("question")
const answerButtons = document.getElementById("answerButtons")

startButton.addEventListener('click', startGame)


function startGame() {
    console.log("started")
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextQuestion()


}

function nextQuestion(question) {
    questionInfo.innerText = question.question

}


function selectAnswer() {


}


const questions = [
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
    }
]