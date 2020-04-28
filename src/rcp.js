import { win, lose, draw } from './views'
const getcomputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * choices.length + 1);
    let choice = `${choices[random]}`
    return choice
}

//evaluate playerChoice & computerChoice
const game = (state) => {
    let playerChoice = state;
    let computerChoice = getcomputerChoice()
    compare(playerChoice, computerChoice)
}

const compare = (playerChoice, computerChoice) => {
    switch(playerChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(playerChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(playerChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(playerChoice, computerChoice);
            break;
    }
}

export { game }