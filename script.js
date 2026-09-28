// ----------------------------------------------------------- //
// WELCOME POP-UP //

// Get the welcome pop-up
let welcomePopup = document.getElementById("welcomePopup");

// Get the Enter button
let enterButton = document.getElementById("enterButton");

// When the user clicks Enter
enterButton.addEventListener("click", function() {

    // Hide the welcome pop-up
    welcomePopup.style.display = "none";

});

// ----------------------------------------------------------- //
// MEMORY 1 - MULTIPLICATION WORKSHEET //

// Get the worksheets
let worksheets = document.querySelectorAll(".worksheet-card");

// Get the math questions
let mathQuestions = document.querySelectorAll(".math-question");

// Get the hidden Memory 1 text
let memory1Reveal = document.getElementById("memory1Reveal");

// Create the countdown sound
let countdownSound = new Audio("Assets/Sound/countdown.wav");

// Keeps track of whether the countdown has started
let timerStarted = false;

// When the user clicks a worksheet
for (let i = 0; i < worksheets.length; i++) {

    worksheets[i].addEventListener("click", function() {

        // Only start the timer once
        if (timerStarted == false) {

            timerStarted = true;

            // Stop the worksheet animation
            for (let i = 0; i < worksheets.length; i++) {
                worksheets[i].querySelector("img").style.animation = "none";
            }

            // Play the countdown sound
            countdownSound.play();

            // Wait 10 seconds
            setTimeout(function() {

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
recorderImage.addEventListener("click", function() {

    // Shake the recorder
    recorderImage.style.animation = "recorderShake 0.6s";

    // Play the recorder sound
    recorderSound.play();

    // Show the memory text
    memory2Reveal.style.display = "block";

});

// ----------------------------------------------------------- //
// MEMORY 3 - GYM CLASS //

// Get the parachute image
let parachuteImage = document.getElementById("parachuteImage");

// Get the hidden Memory 3 text
let memory3Reveal = document.getElementById("memory3Reveal");

// When the user clicks the parachute
parachuteImage.addEventListener("click", function() {

    // Shake the parachute
    parachuteImage.style.animation = "parachuteShake 0.6s";

    // Show the memory text
    memory3Reveal.style.display = "block";

});

// ----------------------------------------------------------- //
// MEMORY 4 - AFTER SCHOOL //

// Get the bike image
let bikeImage = document.getElementById("bikeImage");

// Get the hidden Memory 4 text
let memory4Reveal = document.getElementById("memory4Reveal");


bikeImage.addEventListener("click", function() {

    bikeImage.style.animation = "bikeRide 1s ease forwards";

    memory4Reveal.style.display = "block";

});