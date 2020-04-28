import { game } from './rcp'

const start = () => {
    const rock_svg = document.querySelector('#rock');
    const paper_svg = document.querySelector('#paper');
    const scissors_svg = document.querySelector('#scissors');

    
    rock_svg.addEventListener('click', () => {
        game('rock')
    });
    paper_svg.addEventListener('click', () => {
        game('paper')
    });
    scissors_svg.addEventListener('click', () => {
        game('scissors')
    });

}

start()





