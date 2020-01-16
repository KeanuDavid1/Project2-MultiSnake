let modesIndexTracker;
let diffIndexTracker;
let modeValue;
let diffValue;
let playerValue;


const buttons = function() {
  // om de mode aan te passen
  document
    .querySelector('.js-mode .c-options #left-mode')
    .addEventListener('click', function() {
      changeIndex(Object.keys(gameSettings)[0], false, modes);
    });
  document
    .querySelector('.js-mode .c-options #right-mode')
    .addEventListener('click', function() {
      changeIndex(Object.keys(gameSettings)[0], true, modes);
    });

  // om de moeilijkheid aan te passen
  document
    .querySelector('.js-difficulty .c-options #left-diff')
    .addEventListener('click', function() {
      changeIndex(Object.keys(gameSettings)[1], false, difficulties);
    });
  document
    .querySelector('.js-difficulty .c-options #right-diff')
    .addEventListener('click', function() {
      changeIndex(Object.keys(gameSettings)[1], true, difficulties);
    });

  // voor de spelers aan te passen
  document
    .querySelector('.js-players .c-options #left-player')
    .addEventListener('click', function() {
      changeIndex(Object.keys(gameSettings)[2], false, players);
    });
  document
    .querySelector('.js-players .c-options #right-player')
    .addEventListener('click', function() {
      changeIndex(Object.keys(gameSettings)[2], true, players);
    });
};

const changeIndex = function(settingName, change, array) {
  if (!change && gameSettings[settingName] > 0) {
    gameSettings[settingName]--;
  } else if (change && gameSettings[settingName] < array.length - 1) {
    gameSettings[settingName]++;
    // extra voor spelers omdat het geen array is
  } else if (change && array == players && gameSettings[settingName] < maxPlayers) {
    gameSettings[settingName]++;
  }
  setValues();
};

// get the inner HTML of the settings
const getDOMContent = function() {
  modeValue = document.querySelector(
    '.js-mode .c-options .c-options__selected'
  );
  diffValue = document.querySelector(
    '.js-difficulty .c-options .c-options__selected'
  );
  playerValue = document.querySelector(
    '.js-players .c-options .c-options__selected'
  );
};

// set the values of the settings
const setValues = function() {
  modeValue.innerHTML = modes[gameSettings['mode']];
  diffValue.innerHTML = difficulties[gameSettings['difficulty']];
  playerValue.innerHTML = gameSettings['players'];
};

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
  getDOMContent();
  setValues();
  buttons();
});
