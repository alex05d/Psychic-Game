const picksText = document.getElementById("userPicks");
const lossesText = document.getElementById("losses");
const winText = document.getElementById("winsT");
const guessText = document.getElementById("tiresT");


//assign variables

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerPick = options[Math.floor(Math.random() * options.length)];
console.log(computerPick);

var wins = 0;
var loss = 0;
var tries = 9;
var userguess = [];
var picks;
var input;

var reset = function () {
    userguess = [];
    tries = 9;
    triesT.innerHTML = tries;
    userPicks.innerHTML = userguess;
    computerPick = options[Math.floor(Math.random() * options.length)];
}
console.log(reset);

//--user picks a letter 
document.onkeyup = function (event) {
    input = event.key;
    picks = input.toLowerCase();

    console.log(picks);


    if (!userguess.includes(input)) {
        userguess.push(picks);
        userPicks.innerHTML = userguess;


        if (picks !== computerPick) {
            tries--;
            triesT.innerHTML = tries;

        }
        if (tries === 0 && picks !== computerPick) {
            loss++;
            losses.innerHTML = loss;

            reset();
        }
        if (picks === computerPick) {
            wins++;
            winsT.innerHTML = wins;

            reset();
        }
    }
}