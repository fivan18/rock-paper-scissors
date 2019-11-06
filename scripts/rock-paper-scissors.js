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

function changeScore() {
    const displayScore = document.querySelector("#score > span");
    if(
        score.Player == 5 ||
        score.Computer == 5
        ){
        displayScore.innerHTML = `${score.Player == 5 ? 'You win!!!' : 'Loser!'}`;

        // Finish of game, so reset all
        score.Player = 0;
        score.Computer = 0;
        setTimeout(function(){
            const displayScore = document.querySelector("#score > span");
            displayScore.innerHTML = `${score.Player} - ${score.Computer}`;

            const classesRPS = document.querySelector("#rps > div").classList;
            classesRPS.remove("rock", "paper", "scissors");
        }, 3000);
    } else {
        displayScore.innerHTML = `${score.Player} - ${score.Computer}`;
    }
}

function changeImageComputer(computerSelection){
    computerSelection = computerSelection[0].toLowerCase() +
            computerSelection.slice(1);
    const classesRPS = document.querySelector("#rps > div").classList;
    classesRPS.remove("rock", "paper", "scissors");
    classesRPS.add(computerSelection);
}

function display(event) {
    const playerSelection = event.currentTarget.getAttribute("data-choose");
    const computerSelection = selectRandomRPS();
    const whoWins = playRound(playerSelection, computerSelection);

    // Animation
    const classesRPS = document.querySelector("#rps > div").classList;
    classesRPS.remove("rock", "paper", "scissors");
    setTimeout(function(){
        changeImageComputer("rock");
        setTimeout(function(){
            changeImageComputer("paper");
            setTimeout(function(){
                changeImageComputer("scissors");
                setTimeout(function(){
                    changeImageComputer(computerSelection);
                },300);
            },300);
        },300);
    },300);

    // Wait to finish the animation
    score[whoWins]++;
    setTimeout(changeScore, 1900);
}

const buttons = Array.from(document.querySelectorAll("[data-choose]"));
buttons.forEach(button => {
    button.addEventListener("click", display);
});

const score = {
    "Computer": 0,
    "Player": 0
};