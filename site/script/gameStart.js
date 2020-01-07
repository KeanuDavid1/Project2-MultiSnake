document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');

  //canvas DOM element
  DOMCanvas = document.querySelector('.js-game-canvas');

  //De init voor de canvas object, start het drawing process van canvas.
  //Functie zit in gameArea.js
  initGameArea(DOMCanvas);

  //Hier creer ik de start condities van de game mode, simple game mode is gwn voor te testen.
  //Functie zit in simpleSnakeGameMode.js
  simpleGameMode();

  generateFood();
});
