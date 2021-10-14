
let options = ['rock', 'paper', 'scissors']

// document.getElementById()
function compChoice() {
  let computerChoiceIndex = Math.floor(Math.random() * options.length)
  let computerChoice = options[computerChoiceIndex]
  document.getElementById('comp').innerText = computerChoice
  return computerChoice
}

function drawScore(result) {
  document.getElementById('game').innerText = result
}

function play(playerChoice, computerChoice) {
  computerChoice = compChoice()

  if (playerChoice === computerChoice) {
    drawScore("Draw")
  }
  if (playerChoice === "rock" && computerChoice === "paper") {
    drawScore("Computer Wins")
  }
  if ((playerChoice === "rock" && computerChoice === "scissors")) {
    drawScore("You Win!")
  }

  if (playerChoice === "paper" && computerChoice === "scissors") {
    drawScore("Computer Wins")
  }
  if ((playerChoice === "paper" && computerChoice === "rock")) {
    drawScore("You Win!")
  }

  if (playerChoice === "scissors" && computerChoice === "rock") {
    drawScore("Computer Wins")
  }
  if ((playerChoice === "scissors" && computerChoice === "paper")) {
    drawScore("You Win!")
  }
}

play()