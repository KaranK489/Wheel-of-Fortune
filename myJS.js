/**
 * Created by rcortez on 9/11/2018.
 */


var array = ["DRIVE", "CAT", "SHOE", "HOLIDAY", "OATMEAL", "CONDENSATION", "LAMPPOST", "AUTOMOBILE"];
var match;
var puzzle;
var guessedLetters = [];
var display = "";
var moneyValues = [100,200,300,400,500,600,700,800,900,1000];
var guessLetter;
var playerTurn;
var rNum;
var rNum2;
var moneyValue;
var player1Money;
var player2Money;
var player3Money;

function startGame() {

    player1Money=0;
    player2Money=0;
    player3Money=0;

    document.getElementById("p1m").innerHTML = "Player 1 Money: $" + player1Money;
    document.getElementById("p2m").innerHTML = "Player 2 Money: $" + player2Money;
    document.getElementById("p3m").innerHTML = "Player 3 Money: $" + player3Money;

    display = "";
    guessedLetters = [];

    alert ("Welcome to Wheel of Fortune! Click the spin wheel button to spin the wheel. " +
        "If you want to restart the game in order to choose a different puzzle, click this button again. Also, please turn your Caps Lock on and please keep it on while the game is in play. Good luck!");
    playerTurn = 1;



    rNum = Math.floor(Math.random() * 8);



    puzzle = array[rNum];




    for (i = 0; i < puzzle.length; i++) {

        display = display + "_  ";

        document.getElementById("p1").innerHTML = display;

    }


}

function spinWheel(){

    alert ("It is player " + playerTurn + "'s turn");

    rNum2 = Math.floor(Math.random()*10);

    moneyValue = 0;
    moneyValue = moneyValues[rNum2];

    alert("This turn is worth " + moneyValue + " dollars.");
}






function guessLetters() {
    guessLetter = prompt("What letter would you like to guess?");
    guessLetter = guessLetter.toUpperCase();



    if (guessedLetters.includes(guessLetter, 0)) {
        alert("You've already guessed this letter! Choose something else!");

    } else {

        if (guessLetter === "A" || guessLetter === "E" || guessLetter === "I" || guessLetter === "O" || guessLetter === "U") {
            if (playerTurn === 1) {
                if (player1Money >= 250) {
                    alert("Buying vowel for $250");
                    player1Money = player1Money - 250;
                    document.getElementById("p1m").innerHTML = "Player 1 Money: $" + player1Money;
                }
            }

            if (playerTurn === 2) {
                if (player2Money >= 250) {
                    alert("Buying vowel for $250");
                    player2Money = player2Money - 250;
                    document.getElementById("p2m").innerHTML = "Player 2 Money: $" + player2Money;
                }
            }

            if (playerTurn === 3) {
                if (player3Money >= 250) {
                    alert("Buying vowel for $250");
                    player3Money = player3Money - 250;
                    document.getElementById("p3m").innerHTML = "Player 3 Money: $" + player3Money;
                }
            }
        }


        document.getElementById("p1").innerHTML = display;


            guessedLetters.push(guessLetter);


            display = "";


            for (i = 0; i < puzzle.length; i++) {
                match = false;


                for (k = 0; k < guessedLetters.length; k++) {
                    if (puzzle.charAt(i) === guessedLetters[k]) {
                        display = display + guessedLetters[k];
                        match = true;
                        moneyAdditions();


                    }

                }

                if (match === false) {
                    if (puzzle.charAt(i) === " ") {
                        display = display + "&nbsp" + "&nbsp" + "&nbsp";

                    } else {
                        display = display + "_ ";


                    }

                }

            }


            document.getElementById("p1").innerHTML = display;



    }
}






function moneyAdditions() {

    if (match === true) {
        alert("Your letter was found in the puzzle");
        if (playerTurn === 1) {
            player1Money = player1Money + moneyValue;
            document.getElementById("p1m").innerHTML = "Player 1 Money: $" + player1Money;

        }

        if (playerTurn === 2) {
            player2Money = player2Money + moneyValue;
            document.getElementById("p2m").innerHTML = "Player 2 Money: $" + player2Money;

        }

        if (playerTurn === 3) {
            player3Money = player3Money + moneyValue;
            document.getElementById("p3m").innerHTML = "Player 3 Money: $" + player3Money;

        }

    } else {
        alert("Your letter was not a match. Onto the next person...");
        playerTurn = playerTurn + 1;
        if (playerTurn > 3) {
            playerTurn = 1;
        }


    }

}

