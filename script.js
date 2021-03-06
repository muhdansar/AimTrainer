"use strict";

//Max width/height of window and spawn position
const body = document.querySelector("body");
body.width = window.innerWidth;
body.height = window.innerHeight;
console.log(body.width);
console.log(body.height);
const mathPositionWidth = (window.innerWidth - 200)
const mathPositionHeight = (window.innerHeight - 400) 

//array for appending high score//
const highScoreArray = [];

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
    restartButton.addEventListener("mouseover", function (e) {
        restartButton.style.backgroundColor = "greenyellow";
    })
    restartButton.addEventListener("mouseout", function (e) {
        restartButton.style.backgroundColor = "red";
    })
    restartButton.addEventListener("click", function (e) {
        const menuSound = new Audio("menuHover.wav");
        menuSound.play();
        const cleanScore = document.getElementById("finalScore");
        cleanScore.remove();
        restartButton.remove();
        const scoreReset = document.getElementById("score");
        scoreReset.innerText = "Score: 0";
        const timeReset = document.getElementById("time");
        timeReset.innerText = "Time: 60 seconds";
        doAll(); //i stopped here on 6 June 2022(updated);
    });
};


//start on click start//
start.addEventListener("click", function (e) {
    start.remove();
    const menuSound = new Audio("menuHover.wav");
    menuSound.play();
    doAll();
})

function doAll() {
    //countdown//
        setTimeout(counter, 1000);
        setTimeout(counter2, 2000);
        setTimeout(counter3, 3000);
    
        const countdown = document.createElement("h1")
        function counter() {
            countdown.innerText = "Click the circles in 3..";
            body.append(countdown);
            const countDown = new Audio("countdownBeep.mp3")
            countDown.play();
        }
    
        function counter2() {
            countdown.innerText = "Click the circles in 2..";
            const countDown = new Audio("countdownBeep.mp3")
            countDown.play();
        }
      
        function counter3() {
            countdown.innerText = "Click the circles in 1..";
            const countDown = new Audio("countdownBeep.mp3")
            countDown.play(); 
        }
    //countdown ends//
    
    //allow for game to start after countdown; runs gameStart fn//
        setTimeout(gameStart, 4000);
    
    //game code as a function// 
        function gameStart() {
        
        const countDown = new Audio("countdownBeepFinal.mp3")
        countDown.play();

        const timerPrompt = document.querySelector("h1");
        timerPrompt.remove();
        
        function postScore() {
            const yourScore = document.createElement("h2");
            yourScore.id = "finalScore"
            yourScore.style.backgroundColor = "lightgray"
            yourScore.innerText = ("You clicked " + clickArray.length + " circles in 1 minute.")
            body.append(yourScore);
        };  
        //function to update highest score//
        function setHighScore() {
            let newHighScore;
            newHighScore = clickArray.length 
            highScoreArray.push(newHighScore);
            console.log(highScoreArray);
            let printThis = Math.max(...highScoreArray);
            console.log(printThis);
            const highest = document.getElementById("newScore");
            highest.innerText = ("High Score: " + printThis);
            clickArray.splice(0, clickArray.length);
        }//works; need logic for finding the highest number(done)

        //invoke timer function//
        let seconds = 60; //change time later
        function timerDelay() {
        const clockTimer = document.getElementById("time");
        let startIt = setInterval(clockStart, 1000);
        function clockStart() {
        seconds -= 1;
        clockTimer.innerText = ("Time: " + seconds + " seconds");
        //what happens after timer runs out//
        if (seconds === 0) {
            clearInterval(startIt);
            makeCircle.remove();
            clearInterval(setting);
            postScore();
            restartGame();
            setHighScore();
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
    
            
        let setting = setInterval(circleRemake, 1400);
    
        //remove old circle, create new circle//
        makeCircle.addEventListener("click", function (e) {
            const laser = new Audio("laser5.wav");
            laser.play();
            clearInterval(setting);
            clickArray.push("i");
            makeCircle.remove();
            const sameContain = document.querySelector("container");
            sameContain.append(makeCircle);
            //redefining margins, else will use previous margins and no change in position//
            makeCircle.style.marginLeft = (Math.floor((Math.random() * mathPositionWidth))) + "px";
            makeCircle.style.marginTop = (Math.floor((Math.random() * mathPositionHeight))) + "px";
    
            //score editor
            let scoring = document.querySelector("#score");
            scoring.innerText = "Score: " + clickArray.length;
            
        //every 10 score level up sound//
        if (clickArray.length % 10 === 0) {
            const getFaster = new Audio("gotFast.wav")
            getFaster.play();
        }

            //restart intervals
            setting = setInterval(circleRemake, 1400);

            //circles despawn faster and shrink faster//
            if (clickArray.length > 10) {
                clearInterval(setting);
                setting = setInterval(circleRemake, 1300);
                const smaller = document.querySelector(".circle");
                smaller.style.animationDuration = "1.9s";
            };

            if (clickArray.length > 20) {
                clearInterval(setting);
                setting = setInterval(circleRemake, 1200);
                const smaller = document.querySelector(".circle");
                smaller.style.animationDuration = "1.8s";
            };

            if (clickArray.length > 30) {
                clearInterval(setting);
                setting = setInterval(circleRemake, 1100);
                const smaller = document.querySelector(".circle");
                smaller.style.animationDuration = "1.7s";
            };
            
            if (clickArray.length > 40) {
                clearInterval(setting);
                setting = setInterval(circleRemake, 1000);
                const smaller = document.querySelector(".circle");
                smaller.style.animationDuration = "1.6s";
            };

            if (clickArray.length > 50) {
                clearInterval(setting);
                setting = setInterval(circleRemake, 900);
                const smaller = document.querySelector(".circle");
                smaller.style.animationDuration = "1.5s";
            };

            if (clickArray.length > 60) {
                clearInterval(setting);
                setting = setInterval(circleRemake, 800);
                const smaller = document.querySelector(".circle");
                smaller.style.animationDuration = "1.4s";
            }
                    }
                )
            }
        }




















  