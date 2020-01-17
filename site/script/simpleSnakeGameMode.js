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
  setInterval(generateItem, 7000);
  setInterval(generateRock, 10000);

  for (snake of snakeArray) {
    displayLives(snake.health, snake.player);
  }
};
