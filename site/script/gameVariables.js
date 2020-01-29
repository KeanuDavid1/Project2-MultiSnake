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
// die meegegeven worden vanuit de settings
let gameSettings = { mode: 0, difficulty: 1, players: 1 };
let minPlayers = 1;
let maxPlayers = 4;
let arrDiffs = ['Makkelijk', 'Normaal', 'Moeilijk'];
let arrModes = ['Classic', 'Attack', 'Bonus'];
let playerName1
let playerName2
let playername3
let playerName4

// canvas & snake variables
let snakeBlockSize = 36;
let movementSpeed = 3;
let canvasWidth = 1366;
let canvasHeight = 1024;
let snakePieceDistance = snakeBlockSize + 0;
let itemSize = snakeBlockSize + 10;
let subtractPoints = 50;
let addPoints = 10;

const socketIP = 'http://172.30.248.130' + ':5000';
let socket;
