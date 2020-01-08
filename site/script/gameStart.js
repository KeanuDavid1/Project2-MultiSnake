document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  DOMCanvas = document.querySelector('.js-game-canvas');
  initGameArea(DOMCanvas);

  // timer voor het spel start
  setTimer()

  // een timeout zodat het spel niet start voor de timer
  setTimeout(function(){
    //Hier creer ik de start condities van de game mode, simple game mode is gwn voor te testen.
  //Functie zit in simpleSnakeGameMode.js
  timer.innerHTML = 'Start';
  simpleGameMode();

  //Hier roep ik de methode aan die het voedsel laat spawnen (generateFood.js)
  setInterval(generateFood, Math.floor(randomInterval));
});
