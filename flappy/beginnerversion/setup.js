console.log("hello from setup.js");
 //game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/spaceunicorn.mp3");
      music.loop = true;
      music.volume = 0.5;
const debugModeIsOn = false;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover

//background
const backgroundImage = new Image(canvas.width,canvas.height);
      backgroundImage.src = "../assets/images/back5.png";
const backgroundYPosition = canvas.height/2;
const backgroundXPosition = canvas.width/2;

// bird variables
var birdImage = new Image(160, 160);
      birdImage.src = "../assets/images/cookie.png";
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.7;
const birdXPosition = 250;
const birdHitboxRadius = 30;
const birdFlapSound = new Audio("../assets/sounds/flap.wav");
const birdFlapForce = -12;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let birdCanFlap = false;
const birdTimerInterval = 100
var birdTimer = 0;



// score variables
const scoreImage = new Image(60, 60);
      scoreImage.src = "../assets/images/chokobar.png";
const scoreImageXPosition = 70;
const scoreImageYPosition = 70;
const scoreTextXPosition = 100;
const scoreTextYPosition = 90;
const scoreTextSize = 50;
const scoreTextColor = "yellow";
let scoreValue = 0;

// cloud variables
const cloudImage = new Image(200, 200);
      cloudImage.src = "../assets/images/cloud.png";
const cloudSpawnInterval = 10000; // milliseconds
const cloudXSpeed = -.7;
let cloudTimeSinceLastSpawn = 0; // milliseconds
let clouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

// house variables
const houseImage = new Image(250, 250);
      houseImage.src = "../assets/images/houseglaze.png";
const houseSpawnInterval = 10000; // milliseconds
const houseXSpeed = -.7;
let houseTimeSinceLastSpawn = 0; // milliseconds
let houses = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(750, 750), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(750, 750),
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(750, 750), 
    },
];

//rainbow trail
const ranImage = new Image(20, 40);
      ranImage.src = "../assets/images/rainbowtrail.png";
// rainbow variables
const rainbowImage = ranImage
const rainbowXSpeed = -5;
const rainbowSpawnInterval = 10;
let rainbowTimeSinceLastSpawn = rainbowSpawnInterval
let rainbows = [];


// fireball variables
const fireballImage = new Image(500, 350);
      fireballImage.src = "../assets/images/unicorn.png";
const fireballXSpeed = -20.5;
const fireballHitboxRadius = 100;
const fireballSpawnInterval = 1100;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreImage;
const coinHitboxRadius = 30;
const coinXSpeed = -5;
const coinSpawnInterval = 1000;
const coinValue = 1;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];


// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuTextXPosition = 300;
const menuTextYPosition = 400; 
const menuSecondText = "Press space to flap wings";
const menuTextSize = 60;
const menuTextColor = "yellow";
const gameOverText = "Press " + restartKey + " to restart";
