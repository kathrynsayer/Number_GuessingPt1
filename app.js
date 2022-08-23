let num = Math.floor(Math.random() * 100) + 1;
for(let i = 1; i <= 100; i++) {
}

function guesscheck () {
    let guess = window.prompt("What is my favorite number?");
    if  (parseInt(guess) === num) {
        console.log ('You are right!');
        else if (guess < num)
        console.log ('Too low! Try again!')
        else ('Too high! Try again!')
    }
}
