//We can directly convert the input to an integer within the prompt() function, so we don’t need a separate parseInt() statement:
//This ensures that guess is already an integer when it is stored.
//If the guess matches secret, we display "Correct Guess!".

let secret = Math.floor(Math.random() * 100) + 1;
let guess = parseInt(prompt("Please guess the secret number (1-100)"));

//We add an if statement to compare the user's guess with the secret number.
//If the guess matches secret, we display "Correct Guess!".
//Otherwise, we display "Sorry, incorrect Guess!".
if (guess === secret) {
    alert("Correct Guess!");
} else {
    alert("Sorry, incorrect Guess!");
}


while (guess !== secret){
    if (guess < secret){
        alert("Incorrect, too low.");
    }else {
        alert("Incorrect, too high.")
    }
    guess = parseInt(prompt("Try again: [Please guess the secret number (1-100)"));
}

alert("Correct Guess!");
