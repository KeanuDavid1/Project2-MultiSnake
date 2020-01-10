//Necessary variables
let DOMCanvas;
let gameArea;
let ctx;
let snakeArray = [];
let randomInterval = Math.random() * 20000;
let frames = 0;
console.log(randomInterval);
let foodArray = [];
let textArray = [];

// SETTINGS
const snakeBlockSize = 36;
const movementSpeed = 3;
const canvasWidth = 1366;
const canvasHeight = 960;
const snakePieceDistance = snakeBlockSize + 0;
const foodSize = snakeBlockSize+10;
