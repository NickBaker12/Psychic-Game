var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
for(var i=0; i < 9; i++){
    var aiNumber = 1 + Math.floor(Math.random()*27);
    var aiLetter = alphabet[aiNumber];
    var input = prompt("Letter:");
    if(input.toLowerCase()==aiLetter){
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        guessesLeft=9;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        guesses = [];
        break;
    }
    else if (i==8){
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        guesses.push(input);
        document.getElementById("guesses").innerHTML = guesses.toString();
        guessesLeft=9;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }
    else{
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        guesses.push(input);
        document.getElementById("guesses").innerHTML = guesses.toString();
    }
}  

