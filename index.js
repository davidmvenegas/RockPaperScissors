let choices = ["paper", "rock", "scissors"]
let computerChoice = choices[Math.floor(Math.random() * 3)]
let userPoints = 0
let computerPoints = 0

const scoreEl = document.getElementById("score")
const boxEl = document.getElementById("challenge")
const userChoiceEl = document.getElementById("yourChoice")
const computerChoiceEl = document.getElementById("computerChoice")
const resultEl = document.getElementById("result")

const setScore = () =>  {
    computerChoice = choices[Math.floor(Math.random() * 3)]
    scoreEl.innerHTML = `${userPoints} - ${computerPoints}`
}

function convert(choice) {
    if(choice === "paper") return '<i class="far fa-hand-paper"></i>'
    if(choice === "rock") return '<i class="far fa-hand-rock"></i>'
    if(choice === "scissors") return '<i class="far fa-hand-scissors"></i>'
}

function play(userChoice) {
    boxEl.style.display = "inline-flex"
    userChoiceEl.innerHTML = convert(userChoice)
    computerChoiceEl.innerHTML = convert(computerChoice)
    if ((userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'rock' && computerChoice === 'scissors')) {
        win()
    } else if (userChoice === computerChoice) {
        draw()
    } else {
        lose()
    }
}

function win() {
    resultEl.innerHTML = "You Win!"
    userPoints++
    setScore()
}
function draw() {
    resultEl.innerHTML = "Draw"
}
function lose() {
    resultEl.innerHTML = "You lost"
    computerPoints++
    setScore()
}