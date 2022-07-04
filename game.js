const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choiceText'));

var timer = document.getElementById('#timer');
var timeLeft = 61;
var score = document.getElementById('#finalScore')


let currentQuestion = {}
let acceptingAnswers = true
// let score = 60;
let questionCounter = 0;
let availableQue = []



let questions = [
    { 
        question: "Which band member supposedly Fed-Exed him/herself to an audition for the band?",
        choice1: '2D',
        choice2: 'Russel',
        choice3: 'Murdoc',
        choice4: 'Noodle',
        answer: 'Noodle',
    },
    {
        question: "Where do the Gorillaz live?",
        choice1: 'Ape Studios',
        choice2: 'Gorilla Studios',
        choice3: 'Monkey Studios',
        choice4: 'Kong Studios',
        answer: 'Kong Studios',
    },
    {
        question: "Who produced the Gorillaz's first album?",
        choice1: 'Danger Mouse',
        choice2: 'Damon Albarn',
        choice3: 'Dan the Automator',
        choice4: 'David Foster',
        answer: 'Dan the Automator',
    },
    {
        question: "Why did Russel get kicked out fo private school?",
        choice1: 'He was a heretic',
        choice2: 'He drove drunk',
        choice3: 'He broke a school drumset',
        choice4: 'He was possessed',
        answer: 'He was possessed',
    },
    {
        question: "What does the name 2D stand for?",
        choice1: 'Two Dents',
        choice2: 'Two Dots',
        choice3: 'Two Dimensions',
        choice4: 'Nothing, it is made up',
        answer: 'Two Dents',
    },
    {
        question: "What is 2d's real name?",
        choice1: 'Pol Pot',
        choice2: 'Stuart Pot',
        choice3: 'Stuart Little',
        choice4: 'Stuart Pol',
        answer: 'Stuart Pot',
    },
    {
        question: "What is the name of Russel's ghost friend who raps in songs on the self-titled Gorillaz album?",
        choice1: 'Del',
        choice2: 'Stu',
        choice3: 'Dan',
        choice4: 'Jamie',
        answer: 'Del',
    },
    {
        question: "Who is the voice behind Noodle?",
        choice1: 'Miho Hatori',
        choice2: 'Utada Hikaru',
        choice3: 'Ayumi Hamasaki',
        choice4: 'Yuka Honda',
        answer: 'Miho Hatori',
    },
    {
        question: "Who is the real-life personality of 2D?",
        choice1: 'Damon Albarn',
        choice2: 'Dan the Automator',
        choice3: 'Jamie Hewlett',
        choice4: 'Danger Mouse',
        answer: 'Damon Albarn',
    },
    {
        question: "Who has attempted to jump over Russel on a 3-wheeled bike?",
        choice1: '2D',
        choice2: 'Del',
        choice3: 'Noodle',
        choice4: 'Murdoc',
        answer: '2D',
    }

]

const SCORE_POINTS = -5;
const MAX_QUESTIONS =  10;

startGame = () => {
    // startTimer();
    questionCounter = 0;
    score = 60
    availableQue = [...questions]
    // gameClock()
    getNewQuestion()
}

// function startTimer() {
//     question.textContent = questions[availableQue].question;
//         // startGame()
//         timeLeft = 61
//         var timeInterval = setInterval(function() {
//             if(timeLeft > 0) {
//                 score.textContent = "Your score is " + score;
//                 timer.textContent = "You have " + timeLeft + " seconds left";
//                 timeLeft--;
//             }else{
//                 timer.textContent = "Game Over";
//                 clearInterval(timeInterval);
//             };
//         }, 1000);
    
    // displayAnswers()
    // (function() {
//         timeLeft--;
//         timer.textContent = timeLeft;
//         if (timeLeft === 0) {
//             clearInterval(timer);
//         }
//     })
// }

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
        // timeLeft -= 10;

        let classToApply = selectedAnswer == currentQuestion.answer

        if(classToApply === 'incorrect') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()

        }, 1000)
    })
// score

startGame()