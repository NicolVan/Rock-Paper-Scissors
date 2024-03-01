const rocks= document.getElementById("rock");
const papers = document.getElementById("paper");
const scissorss = document.getElementById("scissors");



let user = document.getElementById("user");
let computer = document.getElementById("computer");
let result = document.getElementById("result");

let playersc = document.getElementById("scoreplayer");
let gamesc = document.getElementById("compscor");


let scoreplay = 0;
let scorecom = 0;


const Choices = {
    ROCK: 'Rock',
    PAPER: 'Paper',
    SCISSORS: 'Scissors',
}

const GameState = {
    WIN:'Win',
    LOOSE:'Loose',
    TIE:'Tie',
}

let compChoice = [Choices.ROCK,Choices.PAPER,Choices.SCISSORS]

let generateChoice = () => {
    return compChoice[Math.floor(Math.random() * compChoice.length)];
}

function gms(computerChoice){
    console.log(computerChoice)
    if(computerChoice === Choices.ROCK){
        computer.innerHTML ='Computer choise is rock';
    }
    else  if(computerChoice === Choices.PAPER){
        computer.innerHTML ='Computer choise is paper';
    }
    else{
        computer.innerHTML ='Computer choise is scissors';
    }
}

function rock(){
    game(Choices.ROCK,generateChoice());
}
function paper(){
    game(Choices.PAPER,generateChoice());
}
function scissors(){
    game(Choices.SCISSORS,generateChoice());
}

function getGameState(player, computer){
    console.log(player, computer)
    switch(player){
        case Choices.PAPER: 
        if(computer === Choices.PAPER){
            return GameState.TIE;
        }
        if(computer === Choices.SCISSORS){
            return GameState.LOOSE;
        }
        return GameState.WIN;

        case Choices.ROCK: 
        if(computer === Choices.PAPER){
            return GameState.LOOSE;
        }
        if(computer === Choices.SCISSORS){
            return GameState.WIN;
        }
        return GameState.TIE;

        case Choices.SCISSORS: 
        if(computer === Choices.PAPER){
            return GameState.WIN;
        }
        if(computer === Choices.SCISSORS){
            return GameState.TIE;
        }
        return GameState.LOOSE;
    }

}

let game = (player,computer) => {
    user.innerHTML = `You choise was ${player}`;
    gms(computer);
    let result = getGameState(player,computer);
    if(GameState.WIN === result){
        result.innerHTML = 'You win';
        scoreplay++;
        playersc.innerHTML =`${scoreplay}`;
    }
    if(GameState.LOOSE === result){
        result.innerHTML = 'Computer win';
        scorecom++;
        gamesc.innerHTML =`${scorecom}`;
    }
    if(GameState.TIE === result){
        result.innerHTML = 'You click on button and try again';
    }
}
