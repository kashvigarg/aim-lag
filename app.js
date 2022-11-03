const scoreDisplay = document.getElementById('score') 
const grid = document.querySelector('.grid')
let scoreValue = 0
const card = document.createElement('img')
card.setAttribute('src', 'images/board.png')
card.addEventListener('click', (e)=>{
    scoreValue++
    scoreDisplay.innerHTML = scoreValue
})
const point = document.querySelector('.point')
grid.append(point)


console.log(scoreValue)