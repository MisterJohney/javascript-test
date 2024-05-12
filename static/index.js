class Player {
    constructor(timeAlive, isDead) {
        this.timeAlive = timeAlive;
        this.isDead = isDead;
    }
    aboutInfo() {
        console.log("Player is", this.timeAlive, "old and dead state is", this.isDead);
    }
}

const player1 = new Player(34, false);
player1.aboutInfo();


// This is highter, lower game

function checkGuess(computerGuess, guess) {
    if (computerGuess == guess) {
        console.log("Yess bro");
        //break;
    } else if (computerGuess > guess) {
        console.log("Higher");
    } else {
        console.log("Lower");
    }
}

function numberGuessingGame() {
console.log("Enter a number between 1 and 10.");
let computerGuess = Math.floor(Math.random() * 10) + 1;

    while (true) {
        let guess = prompt();
        // console.log(guess);
        // console.log(computerGuess);
        checkGuess(computerGuess, guess);
    }
}
// numberGuessingGame();


// Button and input box test

const input = document.getElementById("input");

function submit() {
    var eulaBox = document.getElementById("EULA");

    if (eulaBox.checked == true) {
        console.log("You submited");
    } else {
        console.log("You have not submited");
    }
}

function printToConsole() {
    console.log("The text box has", input.value);
}



function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
