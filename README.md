# MEDP33100 - Project 1 Interactive Storytelling 

## Live Demo

https://rubipg.github.io/project-1/

## Project Overview

The purpose of this project is to go back in time and revisit childhood memories that we may have forgotten as we grew older and took on more responsibilities. The webpage creates a safe, nostalgic space where we can remember the joy, freedom, and simplicity we experienced as children. 

The webpage begins with a letter to your future self, introducing the idea that you are about to enter a childhood time capsule. The webpage then follows the flow of a typical childhood day, starting with school and ending with the freedom of playing outside after school. The first memory is math class, specifically the pressure of completing a multiplication worksheet within the first five minutes of class. Since I struggled with multiplication tables as a child, I added extra questions around the worksheet to recreate the feeling of being overwhelmed. When the worksheet is pressed, a 10-second timer sound plays, adding to the pressure and making the interaction feel more stressful. The second memory is music class, where we learned how to play the recorder. One of the first and most recognizable songs we learned was “Hot Cross Buns.” When the recorder is pressed, the image shakes and song plays, making the memory interactive through movement and sound. The third memory is gym class, where we played with a rainbow parachute. Everyone had to work together by moving the parachute up and down to create the “mushroom.” This memory represents the teamwork and fun we experienced as children. To make this memory interactive, I made the parachute rotate and scale larger when interacted with, recreating the movement and excitement of playing with it. The final memory represents the freedom we had after school, when we could go outside, play, and ride our bikes. I made the image move to the right and disappear off the screen to represent the feeling of being free to explore and go wherever we wanted. The webpage ends with another reminder that even though these childhood memories may become dusty or distant over time, they will always remain a part of us.

## Features
- **Animations**: 
    - Scroll down arrow that moves up and down to indicate scrolling
    - All the images have a gentle pulse to indicate that they can be clicked
    - Floating music notes that move up and down above the recorder
    - Recorder shakes and plays "Hot Cross Buns" when it is clicked
    - Parachute rotates and scales bigger and then returns to its normal size when clicked
    - Bike image moves to the right and out of the screen when clicked
    - Multiple text reveal by fading in or sliding in

- **Sound Effects**: 
    - In the math class section it plays a countdown timer to recreate the pressure of having a limited amount of itme to complete the worksheet.
    - In the music class section it plas the song "Hot Cross Buns" on a recorder because it was a song that everyone was taught when learning this instrument especially since its made up of only 3 notes. 

- **User-triggered Events**: 
    - The main trigger events are clicking, scrolling and hovering.
    - Scrolling allows the user to move through the different childhood memories
    - Clicking the Open button closes the welcome message and begins the experience
    - Clicking a worksheet starts the countdown and eventually reveals the memory text
    - Clicking the recorder makes it shake and plays the song and reveals the memory text
    - Clicking the parachute triggers its rotation and scale animation and reveals the memory text
    - Clicking the bike image makes it move to the right and off the screen and reveals the memory text
    - Clicking the Restart button reloads the time capsule from the beginning
    - Hovering over images and changing the cursor to pointer to indicate it can be clicked

- **Responsive Design**:
    - I added a media query in my CSS whcih changes the layout and sizing of elements on smaller screens. On mobile devices, the worksheets stack vertically instead of appearing side by side, images become smaller, headings and paragraphs are resized, borders are reduced and buttons and the welcome popup are adjusted to fit the screen. The interactive images also remain large enough to see while staying within the width of the phone screen.

## Technologies Used

- **Languages**
    - HTML
    - CSS
    - JavaScript
- **Other**: 
    - GitHub Pages for hosting the live version of the project
    - Coolor used to find the color palette for the project
    - Animista used as a reference/tool for CSS animation ideas

## Credits

- Images 
    - Math worksheet: https://www.learningprintable.com/multiplication-worksheet-for-grade-school/
    - Recorder: https://www.musicarts.com/yamaha-yrs-24b-soprano-recorder-with-baroque-fingering-main0022311?variantid=0009220&pr_rd_page=2&srsltid=AU7gw4UNNUwM83bvXOmuhhtYA7O1RQzNhldBkCI4MRsHwd7tXuL7mZUm
    - Parachute: https://www.reddit.com/r/nostalgia/comments/u73774/parachute_day_in_gym_class/#lightbox
    - Bikes: https://stock.adobe.com/search/images?k=teenager+rideing+bikes&search_type=usertyped&asset_id=200664270

- Sound Effects 
    - Countdown timer: https://freesound.org/people/davidbain/sounds/259705/
    - Recorder: https://freesound.org/people/Popcorn382/sounds/758898/?

- Apple emojis
- Return emoji: https://emojidb.org/restart-emojis

- References 
    - Class slides/notes
    - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/z-index
    - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-sizing
    - https://www.w3schools.com/cssref/sel_nth-child.php
    - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:first-child
    - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:last-child
    - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@keyframes
    - https://coolors.co/c7eae4-a7e8bd-fcbcb8-efa7a7-ffd972
    - https://animista.net/
    - https://freesound.org/

## Future Enhancements

If I had more time I would include the following: 

- Include more memories from different parts of childhood to make the time capsule feel more complete.
- Improve the bike memory by having the text appear behind the image of the bikes so the reveal feels more connnected to the animation
- Include more sound effects such as classroom sounds, kids laughing and playing to really make each memeory more immersive
- Experiment with GSAP animations to create more dynamic aniamtions
- Have a feeback section where users can tell me their own memeories and I can add it to the webpage