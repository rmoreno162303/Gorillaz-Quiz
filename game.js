const question = document.querySelector(#question);
const choices = Array.from(document.querySelectorAll('.choiceText'));

let currentQuestion = {}
let acceptingAnswers = true
let score = 0;
let questionContainer = 0;
let availableQue = []

let questions = [
    { 
        question: "De donde soy?",
        choice1: 'San Marcos',
        choice2: 'Austin',
        choice3: 'Eagle Pass',
        choice4: 'El Indio',
        answer: 'El Indio'
    },
    {
        question: "De donde es Ruth?",
        choice1: 'San Marcos',
        choice2: 'Austin',
        choice3: 'Eagle Pass',
        choice4: 'El Indio',
        answer: 'Eagle Pass'
   
    },
    {
        question: "De donde es Henry?",
        choice1: 'San Marcos',
        choice2: 'Austin',
        choice3: 'England',
        choice4: 'El Indio',
        answer: 'England'
    }

]

const MAX_QUESTIONS =  3;

startGame = () => {
    questionCounter = 0;
    score = 0
    availableQue = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQue.length === 0 || questionContainer > MAX_QUESTIONS) {
        localStorage.setItem('recentScore', score)

        return window.location.assign('/end.html')
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
    choice.addEventListener('click', e=> {
        if(!acceptingAnswers) return 

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

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