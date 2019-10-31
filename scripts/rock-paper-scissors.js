function computerPlay(){
    let randomNunber = (Math.floor(Math.random() * 3) + 1);
    return  randomNunber === 1
                            ? 'Rock'
                            : randomNunber === 2
                                            ? 'Paper'
                                            : 'Scissors' ;
}

function playRound(playerSelection, computerSelection){
    // Clear the string
    playerSelection = playerSelection.trim().toLowerCase();
    //Upper case the first letter
    playerSelection = playerSelection[0].toUpperCase() +
        playerSelection.slice(1);

    // Validation word
    let arrRPS = ['Rock', 'Paper', 'Scissors']
    if(!arrRPS.includes(playerSelection)){
        console.log('Enter a valid word.');
        return 0;
    }

    console.log('Player selection: ' + playerSelection);
    console.log('Computer selection: ' + computerSelection);

    if(playerSelection === computerSelection){
        return 0;
    }

    let youWin = {
        'Paper': 'Rock',
        'Rock': 'Scissors', 
        'Scissors' : 'Paper'
    }
    if(youWin[playerSelection] === computerSelection){
        return 1;
    } else {
        return 2;
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for(let i = 0; i < 5; i++){
        console.log('Game: ' + i);
        let whoWins = playRound(prompt('Enter a word to play'), computerPlay());
        if (
            whoWins === 1
        ) {
            scorePlayer++;
        } else if (
            whoWins === 2
        ) {
            scoreComputer++;
        }  
    }

    if(scorePlayer > scoreComputer){
        alert('Congratulations! you win the game');
    } else if(scoreComputer > scorePlayer){
        alert('Sorry you lose the game');
    } else {
        alert('No one wins');
    }
}

game();