const scoreDisplay = document.getElementById('score') 
const grid = document.querySelector('.grid')
let scoreValue = 0
const card = document.createElement('img')
card.setAttribute('src', 'images/board.png')
grid.append(card)
scoreDisplay.innerHTML = scoreValue

console.log(scoreValue)