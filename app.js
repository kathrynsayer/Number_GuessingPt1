let num = Math.floor(Math.random() * 100) + 1;
let isPlaying = true;

while (isPlaying) {
    guess()
}

function guess() {
    let input = Number.parseInt(prompt("What is my favorite number?"));
    if (input < num) {
        alert ('Too low! Try again!');
    } else if (input > num) {
        alert ('Too high! Try again!');
    } else if (input == num) {
        alert ('Congratulations!');
        isPlaying = false;
    } else { 
        alert ("Not a valid number");
        }
    }
