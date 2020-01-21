const startGame = function() {
  //canvas DOM element
  DOMCanvas = document.querySelector('.js-game-canvas');

  // verander de variables hiet met de gegeven settings van de game settings pagina

  //De init voor de canvas object, start het drawing process van canvas.
  //Functie zit in gameArea.js
  initGameArea(DOMCanvas);
  
  // timer voor het spel start
  setTimer();
  generatePlayerCard();
  displayGameInfo();

  // een timeout zodat het spel niet start voor de timer
  setTimeout(function() {
    //Hier creer ik de start condities van de game mode, simple game mode is gwn voor te testen.
    //Functie zit in simpleSnakeGameMode.js
    timer.innerHTML = 'Start';
    //verandert de variabelen voor verschillend moeilijkheidsgraden binnen simpleGameMode
    if (gameSettings['difficulty'] == 0) {
      snakeBlockSize = 40;
      maxAmountRocks = maxAmountRocks * 0.5;
      movementSpeed = 2;
      subtractPoints = 25;
      snakePieceDistance = snakeBlockSize + 0;
    } else if (gameSettings['difficulty'] == 2) {
      snakeBlockSize = 32;
      maxAmountRocks = maxAmountRocks * 2.5;
      subtractPoints = 50;
      itemSize = 48;
      movementSpeed = 4;
      snakePieceDistance = snakeBlockSize + 0;
    }
    simpleGameMode();
    gameStartTime = Date.now();
    //Hier roep ik de methode aan die het voedsel laat spawnen (generateFood.js)
  }, 3000);
};