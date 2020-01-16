//Hier komen alle condities voor deze gamemode in, spawnen van 1 snake, start direction, en keydown event listener.

const simpleGameMode = function() {
  //Doe de timer weg wanneer het spel start
  const timer = document.getElementById('js-timer__container');
  timer.style.display = 'none';
  //verandert de variabelen voor verschillend moeilijkheidsgraden binnen simpleGameMode
  if (gameSettings['difficulty'] == 0) {
    snakeBlockSize = 36;
    maxAmountRocks = maxAmountRocks * 0.5;
    movementSpeed = 3;
    subtractPoints = 25;
  } else if (gameSettings['difficulty'] == 2) {
    snakeBlockSize = snakeBlockSize * 0.8;
    maxAmountRocks = maxAmountRocks * 2.5;
    subtractPoints = 50;
    itemSize = snakeBlockSize;
    movementSpeed = movementSpeed * 1.2;
  }
  //Spawn aantal snakes die ingesteld is in gameSettings.js
  spawnSnake(gameSettings['players']);
  //Spawnt 1 voedsel stukjes
  generateItem();
  //Luistert naar de key presses
  document.addEventListener('keydown', keypressed);
  setInterval(generateItem, 7000);
  setInterval(generateRock, 10000);

  for (snake of snakeArray) {
    displayLives(snake.health, snake.player);
  }
};
