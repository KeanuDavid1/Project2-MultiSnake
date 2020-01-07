document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  DOMCanvas = document.querySelector('.js-game-canvas');
  initGameArea(DOMCanvas);
  simpleGameMode();
  setInterval(generateFood, Math.floor(randomInterval));
});
