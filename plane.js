//all thanks to God for making me code another game
//thanks for playing my game feel free to edit the code to your taste afterall we are programmers :);
//let's get coding
//initialize the api variable
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//get all variables from the dom
var backMusic = document.getElementById("backMusic");
var coinMusic = document.getElementById("coinMusic");
var endGameMusic = document.getElementById("endGameSound");
var jetLoop = document.getElementById("jetLoop");
var powerUpSound = document.getElementById("powerUpSound");
var gunshotSound = document.getElementById("gunShot");
var msgBox = document.getElementById("container");
var bigScore = document.getElementById("biggerScore");
var btn = document.getElementById("restart");
var msgContainer = document.getElementById("msg");
var scoreBox = document.getElementById("scoreBox");
var playerScore = document.getElementById("pScore");
var levelContainer = document.getElementById("levelsContainer");
var gameName = document.getElementById("gameName");
var logoAnimation = document.getElementById("logoAnimation");
var animationContainer = document.getElementById("animationContainer");
var levelOne = document.getElementById("levelOne");
var levelTwo = document.getElementById("levelTwo");
var levelThree = document.getElementById("levelThree");
var levelFour = document.getElementById("levelFour");
var levelFive = document.getElementById("levelFive");
var levelSix = document.getElementById("levelSix");
var levelSeven = document.getElementById("levelSeven");
var levelEight = document.getElementById("levelEight");
var levelNine = document.getElementById("levelNine");
var levelTen = document.getElementById("levelTen");
var levelEleven = document.getElementById("levelEleven");
var levelTwelve = document.getElementById("levelTwelve");
var footer = document.getElementById("footer");
var highScore = document.getElementById("highScore");
var moreLevels = document.getElementById("moreLevels");
var emmySoft = document.getElementById("emmySoft");

//eventListeners

addEventListener("load", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})
addEventListener("resize", () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    })
    //utility functions


//create a function to setup the game environment
function gameSetUp() {
    document.documentElement.requestFullscreen();
    canvas.style.display = "block";
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    document.body.style.overflow = "hidden";
    document.body.style.margin = "0" + "px";
    document.body.style.padding = "0" + "px";
}



//create variables to check if the player is interacting with the game or not and also control the game while play
var playingGame = false;
var playerSpeed = {
    dx: 5,
    dy: 5
};
var enemySpeed = 15;
var enemySpeedRetardation = 8;
var coinSpeed = 12;
var powerUpSpeed = 5;
var bulletSpeed = 25;
var score = 0;
var coinNumber = 1;
var enemyNumber = 1;
var enemySpawnTime1 = 6000;
var enemySpawnTime2 = 5000;
var enemySpawnTime;

var playingLevelOneGame = false;

var playingLevelTwoGame = false;
var playingLevelThreeGame = false;
var playingLevelFourGame = false;
var playingLevelFiveGame = false;
var playingLevelSixGame = false;
var playingLevelSevenGame = false;
var playingLevelEightGame = false;
var playingLevelNineGame = false;
var playingLevelTenGame = false;
var playingLevelElevenGame = false;
var playingLevelTwelveGame = false;


//create a callback function for each levels when the user clicks them

function levelOneGame() {
    if (!playingGame && !playingLevelOneGame) {
        return;
    } else {

        playerSpeed.dx = 5;
        playerSpeed.dy = 5;
        enemySpeed = 7;
        enemySpeedRetardation = 5;
        enemyNumber = 1;
        enemySpawnTime1 = 6000;
        enemySpawnTime2 = 5000;
        gameSetUp();
        init();
        animate();

    }
}

levelOne.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex";
    msgContainer.innerHTML = "Are You Ready To Play Level One Game??"
    btn.innerHTML = "play".toUpperCase();

    /* setTimeout(() => {
        window.addEventListener("click", (e) => {
            if (e.target != msgBox) {
                location.reload();
            }
        })
    }, 20); */

    //if the user clicks the play button
    btn.addEventListener("click", () => {
        playingGame = true;
        playingLevelOne = true;
        msgBox.style.display = "none";
        levelOneGame();
    });

    addEventListener("keypress", (e) => {
        switch (e.keyCode) {
            //if the user presses the x button;
            case 120:
                msgBox.style.display = "none";
                levelContainer.style.display = "block";
                break;

            default:
                return;
        }
    })
})


function levelTwoGame() {
    if (!playingGame && !playingLevelOneGame) {
        return;
    } else {
        playerSpeed.dx = 7;
        playerSpeed.dy = 7;
        enemySpeed = 10;
        enemySpeedRetardation = 7;
        enemyNumber = 1;
        enemySpawnTime1 = 5500;
        enemySpawnTime2 = 5000;
        gameSetUp();
        animate();
    }
}
levelTwo.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex";
    msgContainer.innerHTML = "Are You Ready To Play Level Two Game??"
    btn.innerHTML = "play".toUpperCase();


    //if the user clicks the play button
    btn.addEventListener("click", () => {
        playingGame = true;
        msgBox.style.display = "none";
        levelTwoGame();
    });

    addEventListener("keypress", (e) => {
        switch (e.keyCode) {
            //if the user presses the x button;
            case 120:
                msgBox.style.display = "none";
                levelContainer.style.display = "block";
                break;

            default:
                return;
        }
    })
})


function levelThreeGame() {
    if (!playingGame && !playingLevelThreeGame) {
        return;
    } else {
        playerSpeed.dx = 10;
        playerSpeed.dy = 10;
        enemySpeed = 13;
        enemySpeedRetardation = 10;
        enemyNumber = 1;
        enemySpawnTime1 = 5000;
        enemySpawnTime2 = 4500;
        gameSetUp();
        animate();
    }
}


levelThree.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex"
    msgContainer.innerHTML = "Are You Ready To Play Level Three Game??";
    btn.innerHTML = "play".toUpperCase();


    //if the user clicks the play button
    btn.addEventListener("click", () => {
        playingGame = true;
        msgBox.style.display = "none";
        levelThreeGame();
    })
})



function levelFourGame() {
    if (!playingGame && !playingLevelFourGame) {
        return;
    } else {
        playerSpeed.dx = 12;
        playerSpeed.dy = 12;
        enemySpeed = 15;
        enemySpeedRetardation = 13;
        enemyNumber = 1;
        enemySpawnTime1 = 4500;
        enemySpawnTime2 = 4000;
        gameSetUp();
        animate();
    }
}



levelFour.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex";
    msgContainer.innerHTML = "Are You Ready To Play Level Four Game??";
    btn.innerHTML = "play".toUpperCase();

    //if the user clicks the play button 
    btn.addEventListener("click", () => {
        playingGame = true;
        msgBox.style.display = "none";
        levelFourGame();
    })
})





function levelFiveGame() {
    if (!playingGame && !playingLevelFiveGame) {
        return;
    } else {
        playerSpeed.dx = 15;
        playerSpeed.dy = 15;
        enemySpeed = 17;
        enemySpeedRetardation = 15;
        enemyNumber = 1;
        enemySpawnTime1 = 4000;
        enemySpawnTime2 = 3500;
        gameSetUp();
        animate();
    }
}




levelFive.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex";
    msgContainer.innerHTML = "Are You Ready To Play Level Five Game??";
    btn.innerHTML = "play".toUpperCase();


    //if the user clicks the play button
    btn.addEventListener("click", () => {
        msgBox.style.display = "none";
        playingGame = true;
        levelFiveGame();
    })

})



function levelSixGame() {
    if (!playingGame && !playingLevelSixGame) {
        return;
    } else {
        playerSpeed.dx = 17;
        playerSpeed.dy = 17;
        enemySpeed = 18;
        enemySpeedRetardation = 16;
        enemyNumber = 1;
        enemySpawnTime1 = 3500;
        enemySpawnTime2 = 3000;
        gameSetUp();
        animate();
    }
}


levelSix.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex";
    msgContainer.innerHTML = "Are You Ready To Play Level Six Game??";
    btn.innerHTML = "play".toUpperCase();


    //if the user clicks the play button
    btn.addEventListener("click", () => {
        msgBox.style.display = "none";
        playingGame = true;
        levelSixGame();
    })
})


function levelSevenGame() {
    if (!playingGame && !playingLevelSevenGame) {
        return;
    } else {
        playerSpeed.dx = 18;
        playerSpeed.dy = 18;
        enemySpeed = 19;
        enemySpeedRetardation = 17;
        enemyNumber = 1;
        enemySpawnTime1 = 3300;
        enemySpawnTime2 = 3200;
        gameSetUp();
        animate();
    }
}


levelSeven.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex";
    msgContainer.innerHTML = "Are You Ready To Play Level Seven Game??";
    btn.innerHTML = "play".toUpperCase();


    //if the user clicks the play button
    btn.addEventListener("click", () => {
        msgBox.style.display = "none";
        playingGame = true;
        levelSevenGame();
    })
})







function levelEightGame() {
    if (!playingGame && !playingLevelEightGame) {
        return;
    } else {
        playerSpeed.dx = 19;
        playerSpeed.dy = 19;
        enemySpeed = 20;
        enemySpeedRetardation = 18;
        enemyNumber = 1;
        enemySpawnTime1 = 3100;
        enemySpawnTime2 = 3000;
        gameSetUp();
        animate();
    }
}


levelEight.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex";
    msgContainer.innerHTML = "Are You Ready To Play Level Eight Game??";

    btn.innerHTML = "play".toUpperCase();


    //if the user clicks the play button
    btn.addEventListener("click", () => {
        msgBox.style.display = "none";
        playingGame = true;
        levelEightGame();
    })
})



function levelNineGame() {
    if (!playingGame && !playingLevelNineGame) {
        return;
    } else {
        playerSpeed.dx = 20;
        playerSpeed.dy = 20;
        enemySpeed = 23;
        enemySpeedRetardation = 19;
        enemyNumber = 1;
        enemySpawnTime1 = 3000;
        enemySpawnTime2 = 2900;
        gameSetUp();
        animate();
    }
}


levelNine.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex";
    msgContainer.innerHTML = "Are You Ready To Play Level Nine Game??";

    btn.innerHTML = "play".toUpperCase();


    //if the user clicks the play button
    btn.addEventListener("click", () => {
        msgBox.style.display = "none";
        playingGame = true;
        levelNineGame();
    })
})




function levelTenGame() {
    if (!playingGame && !playingLevelTenGame) {
        return;
    } else {
        playerSpeed.dx = 22;
        playerSpeed.dy = 22;
        enemySpeed = 25;
        enemySpeedRetardation = 20;
        enemyNumber = 1;
        enemySpawnTime1 = 2800;
        enemySpawnTime2 = 2600;
        gameSetUp();
        animate();
    }
}


levelTen.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex";
    msgContainer.innerHTML = "Are You Ready To Play Level Ten Game??";

    btn.innerHTML = "play".toUpperCase();


    //if the user clicks the play button
    btn.addEventListener("click", () => {
        msgBox.style.display = "none";
        playingGame = true;
        levelTenGame();
    })
})


function levelElevenGame() {
    if (!playingGame && !playingLevelElevenGame) {
        return;
    } else {
        playerSpeed.dx = 24;
        playerSpeed.dy = 24;
        enemySpeed = 27;
        enemySpeedRetardation = 23;
        enemyNumber = 1;
        enemySpawnTime1 = 2500;
        enemySpawnTime2 = 2300;
        gameSetUp();
        animate();
    }
}


levelEleven.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex";
    msgContainer.innerHTML = "Are You Ready To Play Level Eleven Game??";

    btn.innerHTML = "play".toUpperCase();


    //if the user clicks the play button
    btn.addEventListener("click", () => {
        msgBox.style.display = "none";
        playingGame = true;
        levelTenGame();
    })
})


function levelTwelveGame() {
    if (!playingGame && !playingLevelTwelveGame) {
        return;
    } else {
        playerSpeed.dx = 25;
        playerSpeed.dy = 25;
        enemySpeed = 28;
        enemySpeedRetardation = 25;
        enemyNumber = 1;
        enemySpawnTime1 = 2300;
        enemySpawnTime2 = 2000;
        gameSetUp();
        animate();
    }
}


levelTwelve.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex";
    msgContainer.innerHTML = "Are You Ready To Play Level Twelve Game??";

    btn.innerHTML = "play".toUpperCase();


    //if the user clicks the play button
    btn.addEventListener("click", () => {
        msgBox.style.display = "none";
        playingGame = true;
        levelTwelveGame();
    })
})


moreLevels.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex"
    msgContainer.innerHTML = "Opps There Are No Levels For Now But You Can Read On How Better To Play This Game.....";

    btn.innerHTML = "Read More...".toUpperCase();
    //if the user clicks the button 
    btn.addEventListener("click", () => {
        location.href = "www.DoyinTech.com";
    })

})



highScore.addEventListener("click", (e) => {
        levelContainer.style.display = "none";
        msgBox.style.display = "flex";
    var highScoreMsg=localStorage.getItem("HighScore");
    if(highScoreMsg){
        biggerScore.innerHTML=highScoreMsg;
         msgContainer.innerHTML = "Your Present, Current Score Is: "+highScoreMsg;
    }else{
        biggerScore.innerHTML=highScoreMsg;
         msgContainer.innerHTML = "There Are No HighScores For Now!!!";
    }
       
        btn.innerHTML = "Confirm".toUpperCase();
        setTimeout(() => {
            window.addEventListener("click", (e) => {
                if (e.target != msgBox) {
                    msgBox.style.display = "none";
                    location.reload();
                }
            })
        }, 20);

        btn.addEventListener("click", () => {
            location.reload();
        })
    })
    //if the user clicks the moreLevels button
moreLevels.addEventListener("click", () => {
    levelContainer.style.display = "none";
    msgBox.style.display = "flex";
    msgContainer.innerHTML = "There Are No Levels Fo Now!!! Come Again Tomorrow..";
    btn.innerHTML = "Click To Cancel..";


    //if the user clicks the button 
    btn.addEventListener("click", () => {
        location.reload();
    })

})



//create utility functions to use during game development
function randomCoin(coinArr) {
    return coinArr[Math.floor(Math.random() * coinArr.length)];
}

function randomPlane(planes) {
    return planes[Math.floor(Math.random() * planes.length)];
}

function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPowerUp(powerUpArray) {
    return powerUpArray[Math.floor(Math.random() * (powerUpArray.length))];
}

function getDistance(x1, y1, x2, y2) {
    let x = x2 - x1;
    let y = y2 - y1;

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

function aboveScreenHeight(object) {
    if (typeof object == null || typeof object == undefined) {
        return;
    } else {
        //if the object is gone above or beyond the canvas or the screen of the user
        if (object.y + object.height > canvas.height || object.y + object.height < 0) {
            return true;
        }
    }
}

function aboveScreenWidth(object) {
    if (typeof object == null || typeof object == undefined) {
        return;
    } else {
        if (object.x + object.width + object.velocity.dx > canvas.width || object.x + object.width + object.velocity.dx < 0) {
            return true;
        }
    }
}

function gameObjectColliding(object1, object2) {
    if (typeof object1 == null || typeof object1 == undefined || typeof object2 == null || typeof object2 == undefined) {
        return;
    }
    if (getDistance(object1.x, object1.y, object2.x, object2.y) < object1.radius + object2.radius) {
        return true;
    }
}

function endGame() {
    endGameMusic.play()
    endGameMusic.volume=endGameMusicVolume;
    canvas.style.display="none";
    msgBox.style.display="flex";
    playingGame=false;
    biggerScore.style.display="block";
    //biggerScore.style.color="white";
    if(score>100){
    //.style.color="green";
    biggerScore.style.color="green";
    var msg="You Passed This Level Your Score Is Greater Than 100 "+"You Actual Score Is "+score;
        msgContainer.innerHTML=msg;
    }else{
        msg="You Failed This Level You Couldnt't Score Up To 100 "+"Your Actual Score Is "+score;
      //  score.style.color="red";
        biggerScore.style.color="red";
        msgContainer.innerHTML=msg;
        
    }
    localStorage.setItem("HighScore",score) || 0;
    if(localStorage.getItem("HighScore")<score){
        localStorage.setItem("HighScore",score);
    }
    btn.innerHTML="restart".toUpperCase();
   // msgContainer.innerHTML=msg;
    btn.addEventListener("click",()=>{
     
       // msgBox.style.display="none";
        location.reload(true);
    });
    
    
    setTimeout(()=>{
        location.reload();
    },30000);
}

function handleCoinCollision() {
    if (!playingGame) {
        return;
    } else {
        coins.forEach((coin, coinIndex) => {
            coinMusic.play();
            backMusic.volume=0.2;
            coinMusic.volume=powerUpMusicVolume;
            var coinImage = new Image();
            var coinImageXPos = player.x + 100;
            var coinImageYPos = player.y;
            var coinWidth = 40;
            var coinHeight = 40;
            coinImage.src = "gold_star.png";
            ctx.drawImage(coinImage, coinImageXPos, coinImageYPos, coinWidth, coinHeight);
            setTimeout(() => {
                coins.splice(coinIndex, 1);
            })
            //score += 10;

            setTimeout(() => {
                coinWidth--;
                coinHeight--;
                if (coinWidth || coinHeight) {
                    return;
                }
            }, 2000)
        })
    }
}

function handleBulletCollision() {
    if (!playingGame) {
        return;
    } else {

        bullets.forEach((bullet, bulletIndex) => {
            //loop through the enemies array 
            gunshotSound.play();
            gunshotSound.volume=1.0;
            var explosiveHeight;
            var explosiveWidth;
            enemies.forEach((enemy, enemyIndex) => {
                var explosive = new Image();
                explosive.src = "exp 5.png";
                var explosiveXPos = enemy.x;
                var explosiveYPos = enemy.y;
                explosiveWidth = 100;
                explosiveHeight = 100;
                ctx.drawImage(explosive, explosiveXPos, explosiveYPos, explosiveWidth, explosiveHeight);
                setTimeout(() => {
                    bullets.splice(bulletIndex, 1);
                }, 0);

                setTimeout(() => {
                        enemies.splice(enemyIndex, 1);
                    }) // && enemies.shift();
              //  score += 20;

            })


            setTimeout(() => {
                explosiveHeight--;
                explosiveWidth--;
                if (explosiveWidth === 0 && explosiveHeight === 0) {
                    return;
                }
            }, 2000);

        })

    }

}

function handlePowerUpCollision() {
    if (!playingGame) {
        return;
    } else {
        coinMusic.play();
        coinMusic.volume=powerUpMusicVolume;
        powerUps.forEach((powerUp, powerUpIndex) => {
            var powerUpExplosion = new Image();
            powerUpExplosion.src = "exp 8.png";
            var powerUpExplosionXPos = powerUp.x;
            var powerUpExplosionYPos = powerUp.y;
            var powerUpExplosionWidth = 80;
            var powerUpExplosionHeight = 80;

            ctx.drawImage(powerUpExplosion, powerUpExplosionXPos, powerUpExplosionYPos, powerUpExplosionWidth, powerUpExplosionHeight);
            coins.forEach((coin, coinIndex) => {
                coinNumber = 2;
                coinSpeed = 15;
               // score += 10;
                setTimeout(() => {
                    coinNumber = 1;
                    coinSpeed = 12;
                }, 5000);

                powerUps.splice(powerUpIndex, 1);
                setTimeout(() => {
                    powerUpExplosionWidth--;
                    powerUpExplosionHeight--;
                    if (powerUpExplosionWidth === 0 && powerUpExplosionHeight === 0) {
                        return;
                    }
                }, 2000);


            })


        })
    }

}

//utility variables 
var coinArray = [
    "silver_coin.png",
    "bronze_coin.png",
    "gold_coin.png"
];
var planesArray = [
    "rotatedplanered.png",
    "rotatedplaneblue.png",
    "rotatedplanegreen.png",
    "rotatedplaneyellow.png"
];

var powerUpArray = [
    "goldPowerUp.png",
    "bluePowerUp.png"
];
//create class for each object like powerups,enemies,players,coins,explosions,bullets etc


//create the player's class
class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = {
            dy: 0,
            dx: 0
        };
        this.radius = 50;



        this.image = new Image();
        this.image.src = "plane.png";


        this.newPos = () => {
            this.x = this.x + this.velocity.dx;
        }
        this.newpos2 = () => {
            this.y = this.y + this.velocity.dy;
        }


        this.update = () => {
            this.newpos2();
            this.newPos();
            this.draw();
        };


        addEventListener("keydown", (e) => {

            //space bar is 32
            //u is 85
            //d is 68
            //r is 82
            //l is 76
            //space bar moves the player forward
            //if the user pressed the down key
            if (e.keyCode == 40) {
                this.velocity.dy = playerSpeed.dy;
                //if the user pressed the up key
            } else if (e.keyCode == 38) {
                this.velocity.dy = -playerSpeed.dy;
                //if the user pressed the right key
            } else if (e.keyCode == 37) {
                //this.image.src=="rotatedPlane.png";
                this.velocity.dx = -playerSpeed.dx;

                this.image.src = "rotatedPlane.png";
                //if the user pressed the left key
            } else if (e.keyCode == 39) {
                if (this.image.src = "plane.png") {
                    this.velocity.dx = playerSpeed.dx;
                } else {
                    this.velocity.dx = -playerSpeed.dx;
                }

                this.image.src = "plane.png";
            }

        })



        this.draw = () => {

            ctx.drawImage(this.image, this.x - 80, this.y - 40, this.width, this.height);

        }

    }
}


//create the enemy class
class Enemy {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = 40;
        this.image = new Image();
        this.image.src = randomPlane(planesArray);
        this.velocity = {
            dx: undefined,
            dy: randomNumber(0, 15)
        };
        //create the enemy update function that calls the draw function
        this.update = () => {
            this.x += -this.velocity.dx;
            this.draw();
        }


        this.draw = () => {
            ctx.drawImage(this.image, this.x - 70, this.y - 40, this.width, this.height);
        };


    }
}

//create the class for the coin object
class Coin {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.timeToLeave = 1000;
        this.velocity = {
            dx: coinSpeed,
            dy: 5
        };

        this.radius = 25;

        this.image = new Image();
        this.image.src = randomCoin(coinArray);


        //create update function
        this.update = () => {
            this.x += -this.velocity.dx;
            this.draw();

        };

        this.draw = () => {
            ctx.drawImage(this.image, this.x - 25, this.y - 25, this.width, this.height);
        }

    }
}

//create a class for the bullet object
class Bullet {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = 10;
        this.image = new Image();
        this.image.src = "bullet.png";
        this.velocity = {
            dx: 0,
            dy: 5
        };

        this.update = () => {
            this.x += this.velocity.dx;
            this.draw();
        };



        this.draw = () => {

            ctx.drawImage(this.image, this.x - 70, this.y - 10, this.width, this.height);
        }
    }
}


//create a class for the explosion
class Explosion {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;


        this.image = new Image();
        this.image.src = undefined;
        this.update = () => {
            this.draw();
        };

        this.draw = () => {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        };
    }
}


//create the powerUp class
class PowerUp {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = 20;
        this.image = new Image();
        this.image.src = randomPowerUp(powerUpArray);
        this.velocity = {
            dx: powerUpSpeed,
            dy: 0
        };
        //create the update function that calls the draw function
        this.update = () => {
            this.x += -this.velocity.dx;
            this.draw();
        };

        this.draw = () => {

            ctx.drawImage(this.image, this.x - 30, this.y - 20, this.width, this.height);
        }
    }
}
//create initialization variables
var player;
var enemies;
var coins;
var bullets;
var explosions;
var powerUps;
var radius = 30;
var animateId;
var eSpeed;
var backgroundSpeed=12;
var backgroundImageWidth=1000;
var backgroundImage=new Image();
backgroundImage.src="background.png";
var backgroundX=0;
var backgroundX2=backgroundImageWidth;
var backMusicVolume=0.5;
var powerUpMusicVolume=1.0;
var jetLoopMusicVolume=0.5;
var endGameMusicVolume=1.0;

function init() {
    player = new Player(80, canvas.height / 2, 150, 70);
    enemies = [];
    coins = [];
    bullets = [];
    explosions = [];
    powerUps = [];



    for (let r = 0; r < 1; r++) {
        explosions.push(new Explosion(undefined, undefined, 70, 70));
    }
}


function animate() {
    animateId = requestAnimationFrame(animate);
   ctx.clearRect(0,0,canvas.width,canvas.height);
   backMusic.play();
   backMusic.volume=backMusicVolume;
   pScore.style.display="flex";
   pScore.innerHTML=score;
   biggerScore.innerHTML=score;
   ctx.drawImage(backgroundImage,backgroundX,0,innerWidth,innerHeight);
   ctx.drawImage(backgroundImage,backgroundX2,0,innerWidth,innerHeight);
     //  ctx.FillRect(0,0,innerWidth,innerHeight); 
 
    if(backgroundX<-backgroundImageWidth){
        backgroundX=backgroundImageWidth + backgroundX2-backgroundSpeed;
    }else{
        backgroundX-=backgroundSpeed;
    }
    ///test the condidtion for the second image
       if(backgroundX2<-backgroundImageWidth){
        backgroundX2=backgroundImageWidth + backgroundX-backgroundSpeed;
    }else{
        backgroundX2-=backgroundSpeed;
    }
 
    player.update();
    pScore.style.display="flex";
    scoreBox.style.display="flex";
    //scoreBox.style.display="flex";
    pScore.innnerHTML=score;
    if (aboveScreenHeight(player)) {
        return endGame();
    }
    if (aboveScreenWidth(player)) {
        return endGame();
    }
    enemies.forEach((enemy, enemyIndex) => {
        if (gameObjectColliding(player, enemy)) {
            return setInterval(()=>{
                endGame();
            },0);
        }

        /*  if (aboveScreenHeight(enemy) || aboveScreenWidth(enemy)) {
             enemies.splice(enemyIndex, 1);
         } */
        enemy.velocity.dx = eSpeed;
        enemy.update();
    });
    try {
        powerUps.forEach((powerUp, powerUpIndex) => {
            if (gameObjectColliding(player, powerUp)) {
                 handlePowerUpCollision();
                score+=10;

            }
            powerUp.update();
        })
    } catch (err) {
        console.log(err.msg);
    }

    bullets.forEach((bullet, bulletIndex) => {

        bullet.velocity.dx = bulletSpeed;
        bullet.update();
        /*   if (aboveScreenWidth(bullet) || aboveScreenHeight(bullet)) {
              bullets.splice(bulletIndex, 1);
          } */
        enemies.forEach((enemy, enemyIndex) => {
            if (gameObjectColliding(bullet, enemy)) {
                handleBulletCollision();
                score+=20;
            }
        })
    })


    coins.forEach((coin, coinIndex) => {
        coin.update();
        //coin.image.src = randomCoin(coinArray);
        pScore.innerHTML=score;
        //control page responsibility
        setInterval(() => {
            if (coin.length > 4) {
                coins.splice(coinIndex, 1);
            }
        }, 5000);
        /*    if (aboveScreenWidth(coin) || aboveScreenHeight(object)) {
               coins.splice(coinIndex, 1);
           } */
        if (gameObjectColliding(player, coin)) {
            handleCoinCollision();
            score+=10;
        }

    })


}

function spawnEnemies() {
    for (let c = 0; c < enemyNumber; c++) {
        let enemiesWidth = player.width;
        let enemiesHeight = player.height;
        let planeDifference = 50;
        enemiesX = innerWidth - planeDifference;
        let enemiesY = randomNumber(canvas.height - enemiesHeight, enemiesHeight);
        eSpeed = randomNumber(enemySpeed, enemySpeedRetardation);

        if(playingGame){
            jetLoop.play();
            jetLoop.volume=1.0;
            backMusic.volume=0.2;
        }
       

        if (c !== 0) {
            for (let j = 0; j < enemies.length; j++) {
                if (getDistance(enemiesX, enemiesY, enemies[j].x, enemies[j].y) - 55 * 2 < 0) {
                    let planeDifference = 50;
                    enemiesX = innerWidth - planeDifference;
                    enemiesY = randomNumber(canvas.height - enemiesHeight, enemiesHeight);

                    j = -1;
                }
            }

        }
        enemies.push(new Enemy(enemiesX, enemiesY, enemiesWidth, enemiesHeight));
    }

}

function spawnPowerUp() {
    for (let k = 0; k < 1; k++) {
        let powerUpDifference = 20;
        let px = innerWidth - powerUpDifference;
        let py = randomNumber(innerHeight - radius, radius);
        powerUps.push(new PowerUp(px, py, 50, 50));
    }
}

function spawnCoins() {
    for (let a = 0; a < coinNumber; a++) {

        let widthDifference = 20;
        let rx = innerWidth - widthDifference;
        let ry = randomNumber(innerHeight - radius, radius);
        coins.push(new Coin(rx, ry, 50, 50));

    }
}


addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 32:
            for (let b = 0; b < 1; b++) {
                bullets.push(new Bullet(player.x + 100, player.y, 80, 20));
                //console.log(bullets);
            }
            break;
        default:
            return;
    }
})

setInterval(() => {
    spawnEnemies();
}, randomNumber(enemySpawnTime1, enemySpawnTime2))
setInterval(() => {
    spawnCoins();
}, 2000);
setInterval(() => {
    spawnPowerUp();
}, 10000);


//game development made by Adedoyin Emmanuel Ss2 Science 
//fourth game dev with javascript 
//this game is a open source code game you are free to modify it to your taste
                                  
//                                 ####################################
//#############          ##        #                                   #
//#                     #  #        #     #########   ##   ##         #
//#                    #    #         #       #       #  #  #        #
//#                   #      #          #     #       #     #      #
//#############      ##########           #   #       #     #    #
//#                                         #                   #
//#                 #          #              # # # # # # # # #
//#                #            #
//#               #              #
//#############  #                #