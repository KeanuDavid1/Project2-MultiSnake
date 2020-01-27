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
let playerDataArray = [];

// SETTINGS
// die meegegeven worden vanuit de settings
let gameSettings = { mode: 0, difficulty: 1, players: 1 };
let minPlayers = 1;
let maxPlayers = 4;
let arrDiffs = ['Makkelijk', 'Normaal', 'Moeilijk'];
let arrModes = ['Classic', 'Attack'];
let playerNames = [];

// canvas & snake variables
let snakeBlockSize = 36;
let movementSpeed = 3;
let canvasWidth = 1366;
let canvasHeight = 1024;
let snakePieceDistance = snakeBlockSize + 0;
let itemSize = snakeBlockSize + 10;
let subtractPoints = 50;
let addPoints = 10;

// tutorial variables
let videoPaths = [
  'assets/vid/Snake_tutorial_Healty.mp4',
  'assets/vid/Snake_tutorial_unhealty.mp4',
  'assets/vid/Snake_Tutorial_obstacle.mp4',
  'assets/vid/Snake_tutorial_outofbounds.mp4',
  'assets/vid/Snake_tutorial_2snakes.mp4',
  'assets/vid/Snake_tutorial_2snakes2.mp4',
  'assets/vid/Snake_tutorial_death.mp4'
];
let videoIndex = 0;
let tutorialTitles = [
  'Gezond voedsel',
  'Ongezond voedsel',
  'Obstakels',
  'Buiten het speelveld',
  '2 Slangen hoofd tegen hoofd',
  '2 Slangen hoofd tegen staart',
  'Slang gaat dood'
];
let tutorialText = [
  'Wanneer je een gezond stukje voedsel eet krijg je 10 punten, deze punten bepalen hoe hoof je aan het einde van het spel op het scorebord komt te staan. Naast de 10 punten die je krijgt zal je slang ook 1 blokje langer worden.',
  'Wanneer je een ongezond stukje voedsel eet zullen er 50 punten worden afgetrokken van je huidige score, ook wanneer je minder dan 50 punten hebt! Let dus goed op en probeer enkel gezond voedsel te eten.',
  'Wanneer je slang met een obstakel op het speelveld botst verlies je een leven, hierna word je voor een aantal seconden imuun voor obstakels, andere slangen & de randen van het speelveld zodat je je slang naar een veilige plaats op het speelveld kunt navigeren. Let op, je bent niet lang imuun!',
  'Wanneer je tegen de randen van het speelveld botst verlies je een leven en zal je slang in een willekeurige richting verder bewegen.',
  'Wanneer 2 slangen met elkaar botsen hoofd tegen hoofd dan verliezen beide slangen een leven.',
  'Wanneer een slang tegen een andere slang zijn staart bots zal er een leven afgetrokken worden van de slang die botste.',
  'Wanneer je geen levens meer hebt verdwijnt je slang van het speelveld en wordt het vakje met je naam en punten grijs gekleurd. Wanneer je als eerste dood was kan je nog altijd winnen als je de meeste punten had.'
];

const socketIP = 'http://172.30.248.144' + ':5000';
let socket;
