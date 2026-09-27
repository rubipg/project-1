// Get the welcome pop-up
let welcomePopup = document.getElementById("welcomePopup");

// Get the Enter button
let enterButton = document.getElementById("enterButton");

// Get the math question
let mathQuestion = document.getElementById("mathQuestion");

// Get the hidden memory text
let memory1Reveal = document.getElementById("memory1Reveal");

// Get the recorder image
let recorderImage = document.getElementById("recorderImage");

// Get the hidden Memory 2 text
let memory2Reveal = document.getElementById("memory2Reveal");

// Create the recorder sound
let recorderSound = new Audio("Assets/Sound/Hot_Cross_Buns.mp3");

// Get the parachute image
let parachuteImage = document.getElementById("parachuteImage");

// Get the hidden Memory 3 text
let memory3Reveal = document.getElementById("memory3Reveal");

// Get the bike image
let bikeImage = document.getElementById("bikeImage");

// Get the hidden Memory 4 text
let memory4Reveal = document.getElementById("memory4Reveal");

// When the user clicks Enter
enterButton.addEventListener("click", function() {

    // Hide the welcome pop-up
    welcomePopup.style.display = "none";

});

// When the math question is clicked
mathQuestion.addEventListener("click", function() {

    // Change the question into the answer
    mathQuestion.innerText = "6 × 6 = 36";

    // Stop the flickering
    mathQuestion.style.animation = "none";

    // Show the memory text
    memory1Reveal.style.display = "block";

});

// When the user clicks the recorder
recorderImage.addEventListener("click", function() {

    // Play the recorder sound
    recorderSound.play();

    // Show the memory text
    memory2Reveal.style.display = "block";

});

// When the user clicks the parachute
parachuteImage.addEventListener("click", function() {

    // Make the parachute bigger
    parachuteImage.style.transform = "scale(1.15)";

    // Show the memory text
    memory3Reveal.style.display = "block";

});

bikeImage.addEventListener("click", function (){
      // Move the bikes to the side
    bikeImage.style.transform = "translateX(150px)";

      // Show the memory text
    memory4Reveal.style.display = "block";
})