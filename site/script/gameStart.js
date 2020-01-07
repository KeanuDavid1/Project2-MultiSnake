document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  DOMCanvas = document.querySelector('.js-game-canvas');
  initGameArea(DOMCanvas);
  simpleGameMode();

  //Hier roep ik de methode aan die het voedsel laat spawnen (generateFood.js)
  setInterval(generateFood, Math.floor(randomInterval));
});
