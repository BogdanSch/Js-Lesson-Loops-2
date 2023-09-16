"use strict"

let playButton = document.querySelector("button.start");
playButton.addEventListener("click", play);

function play() {
    let range = Math.floor(Math.random() * 100);
    let randomNumber = Math.floor(Math.random() * range);
    alert(`Guess the number in a range from 0 to ${range}`);

    while (true) {
        let input = prompt("Enter your number: ");
        let guessNumber = parseInt(input);

        if(!isNaN(guessNumber)){
            if (guessNumber === randomNumber) {
                alert("You guessed it, you win!");
                break;
            }
            else if(guessNumber > randomNumber){
                alert("Hmm, It's too big!");
            }
            else if(guessNumber < randomNumber){
                alert("Hmm, That's too small!");
            }
        }
        else{
            if(input.toLowerCase() === "exit"){
                alert("Game Over");
                break;
            }
            alert("Error, please consider entering a correct one!");
            continue;
        }
    }
}