
// Rewrite your game functionality (you know it at this point, right??)
// In your HTML file, create at least:
// An input for user guesses
// An element for feedback
// An element displaying number of guesses
// An element displaying a clock with the duration of their game
// A button to guess again
// A button to reset / quit playing
// Style it up. It should work. Then it should look good. 
// Bonus:
// Only give the user a finite number of attempts
// The feedback should dynamically generate current probabilities for their guessing, depending on the attempt number they are on
// Display their previous guesses, with color coordination of too high vs too low
// Bonus x 2:
// Allow the user to choose the range (within reason)
// Your number of guesses should dynamically generate based on the range
// So should the probability
window.onload = function () {
    console.log("Welcome to My Game");


let num = Math.floor(Math.random() * 100) + 1;
let isPlaying = true;

  let history = [];
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
const input = document.getElementById("guess");
const feedbackP = document.getElementById("feedback");
const btn = document.getElementById("guess-btn");
const quitBtn = document.getElementById("quit-btn");
const time = document.getElementById("time");
const historyP = document.getElementById("history");


btn.addEventListener("click", startGame);
quitBtn.addEventListener("click", resetGame);


function startGame() {
    let num = Math.floor(Math.random() * 100) + 1;
    playing= true;
    btn.textContent = "Guess";
    input.disabled = false; 

    btn.removeEventListener("click", startGame);
    btn.addEventListener("click", guess);
}

// }
// while (isPlaying) {
//     guess()
// }



//seconds and minutes stopwatch
//starts at 0:00
//correct guess stops time count

time.textContent = `${minutes}m : ${seconds}s`

const duration = setInterval(clock, 1000);

function countUp() {
    if (playing) {
      seconds++;
    }
    if (seconds > 59) {
      seconds = 0;
      minutes++;
    } else if (minutes > 59) {
      seconds = 0;
      minutes = 0;
      hours++;
    } else if (hours > 24 || !playing) {
      clearInterval(duration);
    }


}
    



function guess() {
            if (playing) {
              playing = false;
              btn.addEventListener("click", startGame);
        
              btn.textContent = "Start";
              input.disabled = true;
              feedbackP.textContent = "Guess a whole number between 1 and 100";
              historyP.textContent = "-";
              timeP.textContent = "00:00:00";
              seconds = 0;
              minutes = 0;
              hours = 0;
              giveFeedback(input.value);
            }
          

            // function guess() {
            //     let input = Number.parseInt(prompt("Guess a number between 1 and 100"));
            //     if (input < num) {
            //         alert ('Too low! Try again!');
            //     } else if (input > num) {
            //         alert ('Too high! Try again!');
            //     } else if (input == num) {
            //         alert ('Congratulations!');
            //         isPlaying = false;
            //     } else { 
            //         alert ("Not a valid number");
            //         }
            //     }
            


    let p = document.createElement("p");
p.textContent = "This node was created using the createElement() method";

        }