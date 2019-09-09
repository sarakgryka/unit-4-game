$( document ).ready(function() {

    console.log("ready!");

/// Create variables///

let counter;
let randomNumGuess;
let crystalValues = Math.floor(Math.random() * 12) + 1;
let wins;
let losses;
let userGuess = [];


///Show player random number at start of the game between 19-120. Should change at the begininng of each game///

function randomNumber (){
    
randomNumGuess = Math.floor(Math.random() * 101) + 19; 

let numButton = randomNumGuess;

$("#randomNumber").append(numButton);


}

randomNumber();
console.log(randomNumGuess);


///Show 4 crystals///
///Each crystal will have a random number value 1-12//
///Once crystal is clicked the value will be added to total 1-12 counter///
/// If total less than random number keep playing, is over lose, if equal win///
///Restart all values////

console.log(crystalValues);

for (var i = 0; i < 4; i++) {

    
}





























});