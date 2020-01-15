const settings = function() {
  bodyContent = document.querySelector('body');

  // dit start het spel en geeft de settings mee
  // als je op de start knop klikt wordt de body gecleared
  // dan wordt er nieuwe html geinjecteerd
  document
    .querySelector('#settings-startbutton')
    .addEventListener('click', function() {
      bodyContent.innerHTML = '';
      // bodyContentGameArea variabele zit in de gameContent.js file
      bodyContent.innerHTML = bodyContentGameArea;
      console.log(gameSettings);
      console.log('Starting...');
      startGame();
    });
};

document.addEventListener('DOMContentLoaded', function() {
  document
    .querySelector('#settings-backbutton')
    .addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  settings();
});
