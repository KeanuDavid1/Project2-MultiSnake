//Hier komen alle condities voor deze gamemode in, spawnen van 1 snake, start direction, en keydown event listener.

const simpleGameMode = function() {
  //Doe de timer weg wanneer het spel start
  const timer = document.getElementById('js-timer__container');
  timer.style.display = 'none';
  //Spawn snake head
  snakeArray.push(new snakeObject(100, 100, 0, 3, 0));
  //Voegt 2 body parts toe
  snakeArray[0].addNewPiece();
  snakeArray[0].addNewPiece();
  //Spawnt 1 voedsel stukjes
  generateItem();
  //Bepaalt de start direction
  // snakeArray[0].snakePieces[0].direction = "up";
  snakeArray[0].snakePieces[0].movedown();
  //Luistert naar de key presses
  document.addEventListener('keydown', keypressed);
  setInterval(generateItem, 5000);
  setInterval(generateRock, 10000);
};
