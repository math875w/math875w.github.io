 //game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/music.mp3");
      music.loop = true;
      music.volume = 0.5;
const debugModeIsOn = false;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover
let highscoresingle = "0";


// bird variables
const birdImage = new Image(120,120);
      birdImage.src = "../assets/images/bird.png";
const birdStartYPosition = 187.5;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.525;
const birdXPosition = 187.5;
const birdHitboxRadius = 22.5;
const birdFlapForce = -9;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let birdCanFlap = false;

// Lazer variables
const LazerImage = new Image(1350, 375);
      LazerImage.src = "../assets/images/Lazer.png";
const LazerHitboxRadius = 3.75;
const LazerKey = "l";
const LazerDespawnTimer = 5;
var LazerDespawn = 0;
const LazerXPosition = 900;
let LazerCanShoot = false;
let ShootLazer = false;
let Lazers=[];
const LazerSound = new Audio("../assets/sounds/Lazer.wav");



// score variables
const scoreImage = new Image(45, 45);
      scoreImage.src = "../assets/images/coin.png";
const scoreImageXPosition = 52.5;
const scoreImageYPosition = 52.5;
const scoreTextXPosition = 75;
const scoreTextYPosition = 67.5;
const scoreTextSize = 37.5;
const scoreTextColor = "black";
let scoreValue = 0;

// cloud variables
const cloudImage = new Image(280, 187.5);
      cloudImage.src = "../assets/images/cloud.png";
const cloudSpawnInterval = 10000; // milliseconds
const cloudXSpeed = -.4;
let cloudTimeSinceLastSpawn = 0; // milliseconds
let clouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -375,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-750,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

// fireball variables
const fireballImage = new Image(187.5, 187.5);
      fireballImage.src = "../assets/images/fireball.png";
let fireballXSpeed = randomBetween(-4,-25);
const fireballHitboxRadius = 33.75;
const fireballSpawnInterval = 500;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];
const FireballDeathSound = new Audio("../assets/sounds/FireballDeath.wav");

// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreImage;
const coinHitboxRadius = 22.5;
const coinXSpeed = -6;
const coinSpawnInterval = 800;
const coinValue = 1;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];


// menu text variables
const menuFirstText = "Press " + startKey + " to start your game";
const menuTextXPosition = 225;
const menuTextYPosition = 300; 
const menuSecondText = "Press space to begin";
const menuTextSize = 45;
const menuTextColor = "black";
const gameOverText = "Press " + restartKey + " to retry";




// background variables
const backgroundImage = new Image(1365,750);
backgroundImage.src = "../assets/images/background.png";
const backgroundYPosition = 375;
const backgroundXPosition = 600;

