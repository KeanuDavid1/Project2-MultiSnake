//Necessary variables
let DOMCanvas;
let gameArea;
let ctx;
let snakeArray = [];
let randomInterval = Math.random() * 20000;
let frames = 0;
let showMessage = false;
let currentFrame;
console.log(randomInterval)
let foodArray = [];
let textArray = [];

// SETTINGS
const snakeBlockSize = 30;
const movementSpeed = 2.5;
const canvasWidth = 1366;
const canvasHeight = 925;
const snakePieceDistance = snakeBlockSize + 0;
const foodSize = snakeBlockSize *1.5;
