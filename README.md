# Project-1: Aim-Trainer

## About The Game
The idea behind this game is that it is meant to be a replica of a tool that is used to practice your "aim" in first-person shooter games. The training is meant to improve your reaction time as well as streamline your mouse movements. This is done by clicking on random circles that pop up at incrementally faster rates. I decided to gameify this process by having "scores" as a point of competitiveness with yourself and others. 

## Approach
Upon conceptualization and approval of the game, the approach towards building the game started with the basic building blocks of the game, which was the circles. The code for having the circles spawn and despawn when clicked were coded first. This was followed up with having another circle spawn in a random location when the previous circle was clicked and despawned. Then came the code for how long the circle exists (a single default value) before it is automatically despawned if it is not clicked. Once the logic and code for this was handled, the basic framework of a working game was created (with a start button), to have a rudimentary feel for how the final product would be like. The visual feedback via colour changes was then added to make the game more interesting. The score for the current game was created after, to keep track of the number of successful clicks. After this came the integration of the timer, in order to have a definitive endpoint for the game. If conditionals were also introduced at this point to modify the circle spawn speeds. The "shrinking circle" CSS animations were added once the game was tested to be functional. Finally, the "High Score" readout was added to wrap up the creation of the game. CSS and HTML design parameters were continually worked on throughout the process. 

## Technologies Used

### If {}
If conditions were mainly set to trigger events in the game, such as the end-game functions when the timer hits 0 seconds. If conditionals were also used to increment the speed of the circles spawning and shrinking, measured against the current score of the player. The intended function of the increment was to allow for "training" to happen, as the player would have to push themselves to react and click faster the more circles they can click. Thus an increasing high score means that the player is getting better at the game. 

### Functions() {}
A copious amount of functions were used for almost all events in the game, from triggering the start of the game, to the logic behind the clicking of the circles as well as when the circles were not clicked in time. This came in handy when figuring out what to do after the game itself had "ended", as it was simply a matter of triggering a "restart" function that contained all the necessary functions (in order) to play the game again.

### Arrays[]
Arrays were used as storage. For every circle click, the string "i" would be pushed to an array. To take the score of the player, the array.length would be assigned as a variable. I found this easier than using something like ++ or adding increasing numbers to the array as I would just have to call the array.length to get my score. The value of this score at the end of each game is also pushed to a new array, where Math.max() was used to find the highest value in the array, thus allowing me to "store" and show a "high score". Array.splice() was also used to reset the score when the "restart" function was triggered. 

### eventListeners
Event listeners were highly useful as a way to make the game feel more "alive" as well as to register player interactions. Mouseover and mouseout eventListeners were used to change the colours of buttons as well as the circles when the player's cursor was placed within those elements. This provided a reactive element as well as visual feedback to the player for when they could click the circles. Click listeners were also necessary to allow for player input of starting the game and clicking on the circles.

### Audio
Audio was used to augment the visual feedback that players received upon clicking the circles and buttons. There are audio cues for when a circle is clicked, as well as for when the speed of the circle despawn gets faster so that the players get a cue while they are focused on clicking the circles. There are also audio cues on click for the prototype menu (the "start" button and the "restart" button). Finally, audio cues were also added for the "countdown" at the start of the game to make it feel like the countdown to a race. 

### setInterval and setTimeout
setInterval was used to enable the circles to spawn at increasingly faster rates, as well as to set the timer (one of the most important functions for the game to run as intended). setTimeout was used to enhance the gameplay experience, by having a "countdown" before the game starts in order for the player to prepare themselves. 

### Math
A simple Math.floor(Math.random()) was used to randomize the spawn location of the circles, and Math.max was used to find the highest score in an array to append to the "High Score" section. 

### CSS Animations
@keyframes in the CSS file were used to achieve one of the stretch goals, which was to shrink the size of the circles while they appeared on the screen. Along with the despawn speeds getting faster, the shrinking speed also got faster the more circles the player clicked on. This gave the game a more dynamic feel with an added level of difficulty for replayability. The parameters for the animation speed were modified using If conditionals in the JS file. 

## The Most Interesting Thing

## The Most Difficult Thing 