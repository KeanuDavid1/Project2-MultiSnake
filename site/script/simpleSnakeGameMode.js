//Hier komen alle condities voor deze gamemode in, spawnen van 1 snake, start direction, en keydown event listener.

const simpleGameMode = function() {
  //Doe de timer weg wanneer het spel start
  const timer = document.getElementById('js-timer__container');
  timer.style.display = 'none';
  //Spawn aantal snakes die ingesteld is in gameSettings.js
  spawnSnake(gameSettings['players']);
  //Spawnt 1 voedsel stukjes
  generateItem();
  //Luistert naar de key presses
  document.addEventListener('keydown', keypressed);
  socket = io.connect(socketIP);
  socket.addEventListener('gameInput', socketInput);
  socket.addEventListener('hr', handleHR);
  spelers = gameSettings['players'];
  socket.emit('startHR', spelers);

  setInterval(generateItem, (10 - gameSettings['players']) * 700);

  // spawn a set amount before the game starts
  for (r = 0; r < 5; r++) {
    generateRock();
    rockCounter++;
  }

  // geeft alle slangen immunity bij de start

  if (gameSettings['mode'] == 1) {
    console.log('Detected "Attack" game mode');
    setAttackGameMode();
  }

  setInterval(function() {
    for (snake of snakeArray) {
      if (!snake.isDead) {
        snake.score += timeScore;
      }
    }
  }, 5000);

  setInterval(generateRock, 10000);

  for (snake of snakeArray) {
    displayLives(snake.health, snake.player);
  }
  frames = 0;
};
