function selectRandomRPS(){
    const randomNumber = (Math.floor(Math.random() * 3) + 1);
    return  randomNumber === 1
            ? 'Rock'
            : randomNumber === 2
                    ? 'Paper'
                    : 'Scissors' ;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.trim().toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() +
        playerSelection.slice(1);

    const arrRPS = ['Rock', 'Paper', 'Scissors']
    if(
        !arrRPS.includes(playerSelection) || 
        playerSelection === computerSelection
        ){
        return "No one";
    }

    const winnerCombination = {
        'Paper': 'Rock',
        'Rock': 'Scissors', 
        'Scissors' : 'Paper'
    }
    if(
        winnerCombination[playerSelection] === computerSelection
        ){
        return "Player";
    } else {
        return "Computer";
    }
}

function display(event) {
    const playerSelection = event.currentTarget.value;
    const computerSelection = selectRandomRPS();
    const whoWins = playRound(playerSelection, computerSelection);

    score[whoWins]++;

    const display = document.querySelector("#display");
    if(
        score.Player == 5 ||
        score.Computer == 5
        ){
        display.innerHTML = `Winner:  ${score.Player == 5 ? 'Player' : 'Computer'}`;

        score.Player = 0;
        score.Computer = 0;
    } else {
        display.innerHTML = `Player selection:  ${playerSelection} Score: ${score.Player} <br>` +
            `Computer selection:  ${computerSelection} Score: ${score.Computer} <br>`;
    }
}

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => {
    button.addEventListener("click", display);
});

const score = {
    "Computer": 0,
    "Player": 0
};