const rocks= document.getElementById("rock");
const papers = document.getElementById("paper");
const scissorss = document.getElementById("scissors");

let mov = document.getElementById("liv");
let lives = document.getElementById("move");
let user = document.getElementById("user");
let computer = document.getElementById("computer");
let result = document.getElementById("result");

let playersc = document.getElementById("scoreplayer");
let gamesc = document.getElementById("compscor");


let scoreplay = 0;
let scorecom = 0;
let move = 5;

function live(){
    console.log(scoreplay);
    console.log(scorecom);
    if(move < 1 ){
        mov.innerHTML = `game is over`;
        if(scoreplay < scorecom){
            result.innerHTML = `Computer win`;
        }
        else if(scoreplay > scorecom){
            lives.innerHTML =`You win`;
        }
        else if(scoreplay === scorecom){
            lives.innerHTML = `It is tie`;
        }
    }
    
}


let compChoice = ['rock','paper','scissors']
let game1 = compChoice[Math.floor(Math.random() * compChoice.length)];



let generateChoice = () => {
    return compChoice[Math.floor(Math.random() * compChoice.length)];
}




function gms(){
    if(game1 === 'rock'){
        computer.innerHTML ='Computer choise is rock';
    }
    else  if(game1 === 'paper'){
        computer.innerHTML ='Computer choise is paper';
    }
    else{
        computer.innerHTML ='Computer choise is scissors';
    }
}

function rock(){
    
    lives.innerHTML = `${move} moves left`;
    user.innerHTML = 'You choise was rock';
    gms();
    
    if( game1 === 'scissors'){
        result.innerHTML = 'You win';
        scoreplay++;
        move--;
        playersc.innerHTML = `${scoreplay}`;
    }
    else if(game1 === 'paper'){
        result.innerHTML = 'Computer win';
        scorecom++;
        move--;
        gamesc.innerHTML =`${scorecom}`;
    }
    else{
        move--;
        scoreplay++;
        scorecom++;
        result.innerHTML = `It is a tie`;
    }
    game1 = compChoice[Math.floor(Math.random() * compChoice.length)];
    live();
}
function paper(){
    lives.innerHTML = `${move} moves left`;
    user.innerHTML = 'You choise was paper';
    gms()
    if( game1 === 'rock'){
        result.innerHTML = 'You win';
        scoreplay++;
        playersc.innerHTML = `${scoreplay}`;
        move--;
    }
    else if(game1 === 'scissors'){
        result.innerHTML = 'Computer win';
        scorecom++;
        gamesc.innerHTML =`${scorecom}`;
        move--;
    }
    else{
        scoreplay++;
        scorecom++;
        result.innerHTML = `It is a tie`;
        move--;
    }
    game1 = compChoice[Math.floor(Math.random() * compChoice.length)];
    live();
}
function scissors(){
    lives.innerHTML = `${move} moves left`;
    
    user.innerHTML = 'You choise was scissors';
    gms();
    
    if( game1 === 'rock'){
        result.innerHTML = 'Computer win';
        scorecom++;
        gamesc.innerHTML =`${scorecom}`;
        move--;
    }
    else if(game1 === 'paper'){
        result.innerHTML = 'You win';
        scoreplay++;
        playersc.innerHTML = `${scoreplay}`;
        move--;
    }
    else{
        scoreplay++;
        scorecom++;
        result.innerHTML = `It is a tie`;
        move--;
    }
    game1 = compChoice[Math.floor(Math.random() * compChoice.length)];
    live();
}
 
