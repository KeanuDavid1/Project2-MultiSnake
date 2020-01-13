//Necessary variables
let DOMCanvas;
let gameArea;
let ctx;
let snakeArray = [];
let randomInterval = Math.random() * 20000;
let frames = 0;
let firstItem = true;
let itemArray = [];
let textArray = [];

// SETTINGS
const snakeBlockSize = 36;
const movementSpeed = 3;
const canvasWidth = 1366;
const canvasHeight = 960;
const snakePieceDistance = snakeBlockSize + 0;
const itemSize = snakeBlockSize + 10;
const subtractPoints = 50;
const addPoints = 10;
