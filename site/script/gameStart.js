document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');

  //canvas DOM element
  DOMCanvas = document.querySelector('.js-game-canvas');

  //De init voor de canvas object, start het drawing process van canvas.
  //Functie zit in gameArea.js
  initGameArea(DOMCanvas);

  // timer voor het spel start
  setTimer()

  // een timeout zodat het spel niet start voor de timer
  setTimeout(function(){
    //Hier creer ik de start condities van de game mode, simple game mode is gwn voor te testen.
  //Functie zit in simpleSnakeGameMode.js
  simpleGameMode();

  //Hier roep ik de methode aan die het voedsel laat spawnen (generateFood.js)
  }, 3000)
  
  // dit moet uit de setTimeout anders spawned er geen eten
  setInterval(generateFood, Math.floor(randomInterval));

});
