const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = docment.querySelector('#finalScore')
const recentScore = localStorage.getItem('recentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

finalScore.innerText = recentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    // e.preventDefault()

    const score = {
        score: recentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores)) 
    window.location.assign('highScoresList')
}




// var endPage = document.querySelector("#end");
// var highScores = document.getElementById("highScores");
// var submitName = document.getElementById("submitName");
// var nameHead = document.getElementById("inputNameHead");
// var nameType = document.getElementById('nameInput');

// var timer = document.getElementById('timer');
// var score = document.getElementById('currentScore')

// function saveScore() {
//     var initials = typeName.value
//     var userScore = score;
//     var finalScore = (initials, userScore);
//     highScores.push(finalScore);
//     localStorage.setItem('highScores', JSON.stringify(highScores));
// };

// function popScores() {
//     highScores.sort(function (a,b) {
//         return b.userScore - a.userScore;
//     })
//     highScore.innerHTML = '';
//     highScores.forEach(function(person) {
//         var listScores = documet.createElement('li');
//         listScores.textContent = 'user: ' + person.initials + "and Score:" + person.userScore;
//         highScore.appendChild(listScores);
//     })
// }

// submitName.addEventListener('click', function() {
//     if (typeName.value !== "") {
//         saveScore();
//         popScores();
//     }else{
//         alert("try again")
//     }
// })