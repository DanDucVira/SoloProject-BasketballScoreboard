let hScore = document.getElementsByClassName("Hscore")[0];
let gScore = document.getElementsByClassName("Gscore")[0];
let resetH = document.getElementsByClassName("resetH")[0];
let resetG = document.getElementsByClassName("resetG")[0];
let homeScore = 0;
let guestScore = 0;


function HonePoint(){
    homeScore += 1;
    hScore.textContent = homeScore;
    console.log(homeScore);
}
HonePoint();

function HtwoPoint(){
    homeScore += 2;
    hScore.textContent = homeScore;
    console.log(homeScore);
}
function HthreePoint(){
    homeScore += 3;
    hScore.textContent = homeScore;
    console.log(homeScore);
}

function GonePoint(){
    homeScore += 1;
    gScore.textContent = homeScore;
    console.log(homeScore);
}
GonePoint();

function GtwoPoint(){
    homeScore += 2;
    gScore.textContent = homeScore;
    console.log(homeScore);
}
function GthreePoint(){
    homeScore += 3;
    gScore.textContent = homeScore;
    console.log(homeScore);
}
function gReset(){
    homeScore = 0;
    gScore.textContent = homeScore;
    console.log("reset Guest");
}
function hReset(){
    homeScore = 0;
    hScore.textContent = homeScore;
    console.log("reset Home");
}




