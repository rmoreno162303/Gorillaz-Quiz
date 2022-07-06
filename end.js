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


