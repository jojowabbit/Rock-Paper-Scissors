import { game } from './rcp'
const scoreMessage_h2 = document.querySelector('#score-msg');
const playerScore_span = document.querySelector('#player-score');
const computerScore_span = document.querySelector('#computer-score');
let playerScore = 0;
let computerScore = 0;

const win = (playerChoice, computerChoice) => {
    playerScore++
    scoreMessage_h2.textContent = `${playerChoice}(You) beat ${computerChoice}(PC)`.toUpperCase();
    playerScore_span.textContent = playerScore;
    console.log(playerChoice, computerChoice, `Player: ${playerScore}`)
}
const lose = (playerChoice, computerChoice) => {
    computerScore++
    scoreMessage_h2.textContent = `${computerChoice}(PC) beat ${playerChoice}(You)`.toUpperCase();
    computerScore_span.textContent = computerScore;
    console.log(playerChoice, computerChoice, `Comp: ${computerScore}`)
}
const draw = (playerChoice, computerChoice) => {
    scoreMessage_h2.textContent = `oh no its friendly fire!`.toUpperCase();
    console.log(playerChoice, computerChoice)
}

export { win, lose, draw }