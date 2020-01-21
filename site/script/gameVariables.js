//Necessary variables
let DOMCanvas;
let gameArea;
let ctx;
let snakeArray = [];
let randomInterval = Math.random() * 20000;
let frames = 0;
let firstItem = true;
let maxAmountRocks = 10;
let rockCounter = 0;
let itemArray = [];
let textArray = [];
let gameStartTime;
let gameEndTime;
let headColors = ['lightgreen', 'orange', 'yellow', 'lightblue'];
let bodyColors = ['green', 'red', '#C8A51A', 'blue'];
let playerDataArray = []

// SETTINGS

// dit houd de game settings bij
// die meegegeven worden vanuit de settings page
let gameSettings = { mode: 0, difficulty: 1, players: 1 };
let players = 0;
let maxPlayers = 4;
let difficulties = ['Makkelijk', 'Normaal', 'Moeilijk'];
let modes = ['Classic', 'Attack', 'Bonus'];

let snakeBlockSize = 36;
let movementSpeed = 3;
const canvasWidth = 1366;
const canvasHeight = 960;
let snakePieceDistance = snakeBlockSize + 0;
let itemSize = snakeBlockSize + 10;
let subtractPoints = 50;
let addPoints = 10;

const socketIP = '172.30.248.127' + ':5000';
const socket = io.connect(socketIP);
