const startGame = function() {
  //canvas DOM element
  DOMCanvas = document.querySelector('.js-game-canvas');

 // verander de variables hiet met de gegeven settings van de game settings pagina


  //De init voor de canvas object, start het drawing process van canvas.
  //Functie zit in gameArea.js
  initGameArea(DOMCanvas);

  // timer voor het spel start
  setTimer();

  // een timeout zodat het spel niet start voor de timer
  setTimeout(function() {
    //Hier creer ik de start condities van de game mode, simple game mode is gwn voor te testen.
    //Functie zit in simpleSnakeGameMode.js
    timer.innerHTML = 'Start';
    simpleGameMode();

    //Hier roep ik de methode aan die het voedsel laat spawnen (generateFood.js)
  }, 3000);
};
