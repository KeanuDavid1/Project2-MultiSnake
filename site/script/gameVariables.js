//Necessary variables
let DOMCanvas;
let gameArea;
let ctx;
let snakeArray = [];
let randomInterval = Math.random() * 20000;
let frames = 0;
console.log(randomInterval)
let foodArray = [];

// SETTINGS
const snakeBlockSize = 20;
const movementSpeed = 1;
const canvasWidth = 480;
const canvasHeight = 270;
const snakePieceDistance = snakeBlockSize + 0;
const foodSize = 30;
