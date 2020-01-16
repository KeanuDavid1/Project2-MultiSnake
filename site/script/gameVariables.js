//Necessary variables
let DOMCanvas;
let gameArea;
let ctx;
let snakeArray = [];
let randomInterval = Math.random() * 20000;
let frames = 0;
let firstItem = true;
let rockCounter = 0;
let itemArray = [];
let textArray = [];

// SETTINGS

// dit houd de game settings bij
// die meegegeven worden vanuit de settings page
let gameSettings = {mode: 0, difficulty: 0, players: 1};
let players = 0;
let maxPlayers = 4;
let difficulties = ['Makkelijk', 'Normaal', 'Moeilijk'];
let modes = ['Classic', 'Attack', 'Bonus'];


const snakeBlockSize = 36;
const movementSpeed = 3;
const canvasWidth = 1366;
const canvasHeight = 960;
const snakePieceDistance = snakeBlockSize + 0;
const itemSize = snakeBlockSize + 10;
const subtractPoints = 50;
const addPoints = 10;