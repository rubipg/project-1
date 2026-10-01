// ----------------------------------------------------------- //
// WELCOME POP-UP //

// Get the welcome pop-up
let welcomePopup = document.getElementById("welcomePopup");

// Get the Enter button
let enterButton = document.getElementById("enterButton");

// When the user clicks Enter, run this funtion
enterButton.addEventListener("click", function () {

    // Chnages the pop-up's display to none so it disappears
    welcomePopup.style.display = "none";
    // Removes the popup-class from the body
    // This allows the user to interact with and scroll through the page
    document.getElementById("body").classList.remove("popup-open")

});

// ----------------------------------------------------------- //
// MEMORY 1 - MULTIPLICATION WORKSHEET //

// Get ALL the worksheets with querySeLectorAll
let worksheets = document.querySelectorAll(".worksheet-card");

// Get ALL the math questions querySeLectorAll
let mathQuestions = document.querySelectorAll(".math-question");

// Get the hidden Memory 1 text
let memory1Reveal = document.getElementById("memory1Reveal");

// Create a new Audio object and connect it to my countdown sound file
let countdownSound = new Audio("Assets/Sound/countdown.wav");

// Keeps track of whether the countdown has started
// It starts as false because the user has not clicked on a worksheet yet
let timerStarted = false;

// When the user clicks a worksheet
// I starts at 0 because arrays/collections use index numbers starting at 0.
// i++ increases i by 1 each time the loop runs.
for (let i = 0; i < worksheets.length; i++) {

    // Add a click event to each worksheet so the user has options to click whichever worksheet.
    // The function will run when the user clicks that worksheet.
    worksheets[i].addEventListener("click", function () {

        // Only start the timer once
        // Check if the timer has NOT started yet.
        // == compares the value of timerStarted to false.
        if (timerStarted == false) {

            // Change timerStarted to true so the timer cannot start again.
            timerStarted = true;

            // Stop the worksheet animation using the loop on every worksheet after the user makes their first click
            for (let i = 0; i < worksheets.length; i++) {
                worksheets[i].querySelector("img").style.animation = "none";
            }

            // Play the countdown sound
            countdownSound.play();

            // setTimeout waits for a specific amount of time before running the code inside the function.
            // 10000 milliseconds = 10 seconds.
            setTimeout(function () {

                // Hide the math questions
                for (let i = 0; i < mathQuestions.length; i++) {
                    mathQuestions[i].style.display = "none";
                }

                // Show the memory text
                memory1Reveal.style.display = "block";

            }, 10000);

        }

    });

}

// ----------------------------------------------------------- //
// MEMORY 2 - MUSIC CLASS //

// Get the recorder image
let recorderImage = document.getElementById("recorderImage");

// Get the hidden Memory 2 text
let memory2Reveal = document.getElementById("memory2Reveal");

// Create the recorder sound
let recorderSound = new Audio("Assets/Sound/Hot_Cross_Buns.mp3");

// When the user clicks the recorder
recorderImage.addEventListener("click", function () {

    // Shake the recorder
    recorderImage.style.animation = "recorderShake 0.9s infinite";

    // Play the recorder sound
    recorderSound.play();

    // Stop shaking when the music ends
    recorderSound.onended = function () {

        // Remove the animation by setting it to none
        recorderImage.style.animation = "none";
    };

    // Show the memory text
    memory2Reveal.classList.add("show");

});

// ----------------------------------------------------------- //
// MEMORY 3 - GYM CLASS //

// Get the parachute image
let parachuteImage = document.getElementById("parachuteImage");

// Get the hidden Memory 3 text
let memory3Reveal = document.getElementById("memory3Reveal");

// When the user clicks the parachute
parachuteImage.addEventListener("click", function () {

    // Rotate and scale the parachute
    parachuteImage.style.animation = "rotateScaleUp 1s ease";

    // Show the memory text
    memory3Reveal.style.display = "block";

});

// ----------------------------------------------------------- //
// MEMORY 4 - AFTER SCHOOL //

// Get the bike image
let bikeImage = document.getElementById("bikeImage");

// Get the hidden Memory 4 text
let memory4Reveal = document.getElementById("memory4Reveal");

bikeImage.addEventListener("click", function () {

    // Shoot the bike image off the screen
    // The "forwards" part keeps the bike at its final position after the animation finishes.
    bikeImage.style.animation = "bikeRide 1s ease forwards";

    // Show the memory text
    memory4Reveal.style.display = "block";

    // Fade in the memory text
    memory4Reveal.style.animation = "memory4Fade 1.2s ease forwards";

});

// ----------------------------------------------------------- //
// RESTART //

// Get the restart button
let restartButton = document.getElementById("restartButton");

// When the user clicks restart
restartButton.addEventListener("click", function () {

    // Scroll the page back to the very top.
    window.scrollTo(0, 0);

    // Reload the page and start the time capsule again
    location.reload();

});