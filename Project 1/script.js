"use strict";

//Max width/height of window and spawn position
const body = document.querySelector("body");
body.width = window.innerWidth;
body.height = window.innerHeight;
console.log(body.width);
console.log(body.height);
const mathPositionWidth = (window.innerWidth - 200)
const mathPositionHeight = (window.innerHeight - 400) 

//array for clicks length
const clickArray = [];

const start = document.querySelector("button");

start.addEventListener("mouseover", function (e) {
    start.style.backgroundColor = "greenyellow";
})
start.addEventListener("mouseout", function (e) {
    start.style.backgroundColor = "red";
})

 //restart function//
 function restartGame() {
    const restartButton = document.createElement("button");
    restartButton.innerText = "Go again?";
    body.append(restartButton);
    restartButton.addEventListener("click", function (e) {
        const cleanScore = document.getElementById("finalScore");
        cleanScore.remove();
        restartButton.remove();
        doAll(); //i stopped here;
    });
};

//start on click start//
start.addEventListener("click", function (e) {
    start.remove();
    doAll();
    function doAll() {
//countdown//
    setTimeout(counter, 1000);
    setTimeout(counter2, 2000);
    setTimeout(counter3, 3000);

    const countdown = document.createElement("h1")
    function counter() {
        countdown.innerText = "Circles coming in 3.."
        body.append(countdown);
    }

    function counter2() {
        countdown.innerText = "Circles coming in 2.."
    }
  
    function counter3() {
        countdown.innerText = "Circles coming in 1.." 
    }
//countdown ends//

//allow for game to start after countdown//
    setTimeout(gameStart, 4000);

//game code// 
    function gameStart() {

    const timerPrompt = document.querySelector("h1");
    timerPrompt.remove();
    
    function postScore() {
        const yourScore = document.createElement("h2");
        yourScore.id = "finalScore"
        yourScore.style.backgroundColor = "lightgray"
        yourScore.innerText = ("You clicked " + clickArray.length + " circles in 1 minute.")
        body.append(yourScore);
    };

    //invoke timer function
    let seconds = 5; //change time later
    function timerDelay() {
    const clockTimer = document.getElementById("time");
    let startIt = setInterval(clockStart, 1000);
    function clockStart() {
    seconds -= 1;
    clockTimer.innerText = ("Time: " + seconds + " seconds");
    //what happens after 0//
    if (seconds === 0) {
        clearInterval(startIt);
        makeCircle.remove();
        clearInterval(setting);
        postScore();
        restartGame();
        }
    }
};
    timerDelay();

    //create new circle on start press//
    const makeCircle = document.createElement("div");
    makeCircle.className = "circle";
    makeCircle.style.marginLeft = (Math.floor((Math.random() * mathPositionWidth))) + "px";
    makeCircle.style.marginTop = (Math.floor((Math.random() * mathPositionHeight))) + "px";

    const containIt = document.querySelector("container");
    containIt.append(makeCircle);
    
   
    //colour changer//
    makeCircle.addEventListener("mouseover", function (e) {
        makeCircle.style.backgroundColor = "green";
    });
    makeCircle.addEventListener("mouseout", function (e) {
        makeCircle.style.backgroundColor = "red";
    });

    //spawn circle if not clicked//
        function circleRemake() {
            makeCircle.remove();
            const sameContain = document.querySelector("container");
            sameContain.append(makeCircle);
            makeCircle.style.marginLeft = (Math.floor((Math.random() * mathPositionWidth))) + "px";
            makeCircle.style.marginTop = (Math.floor((Math.random() * mathPositionHeight))) + "px"; 
            };

        
    let setting = setInterval(circleRemake, 1000);

    //remove old circle, create new circle//
    makeCircle.addEventListener("click", function (e) {
        clearInterval(setting);
        clickArray.push("i");
        makeCircle.remove();
        const sameContain = document.querySelector("container");
        sameContain.append(makeCircle);
        makeCircle.style.marginLeft = (Math.floor((Math.random() * mathPositionWidth))) + "px";
        makeCircle.style.marginTop = (Math.floor((Math.random() * mathPositionHeight))) + "px";

        //score editor
        let scoring = document.querySelector("#score");
        scoring.innerText = "Score: " + clickArray.length;
        
        //restart intervals
        setting = setInterval(circleRemake, 1000);

                }
            )
        }
    }
})




















  