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
      changeIndex(Object.keys(gameSettings)[0], false, arrModes);
    });
  document
    .querySelector('.js-mode .c-options #right-mode')
    .addEventListener('click', function() {
      changeIndex(Object.keys(gameSettings)[0], true, arrModes);
    });

  // om de moeilijkheid aan te passen
  document
    .querySelector('.js-difficulty .c-options #left-diff')
    .addEventListener('click', function() {
      changeIndex(Object.keys(gameSettings)[1], false, arrDiffs);
    });
  document
    .querySelector('.js-difficulty .c-options #right-diff')
    .addEventListener('click', function() {
      changeIndex(Object.keys(gameSettings)[1], true, arrDiffs);
    });

  // voor de spelers aan te passen
  document
    .querySelector('.js-players .c-options #left-player')
    .addEventListener('click', function() {
      changeIndex(Object.keys(gameSettings)[2], false, 0);
    });
  document
    .querySelector('.js-players .c-options #right-player')
    .addEventListener('click', function() {
      changeIndex(Object.keys(gameSettings)[2], true, 0);
    });
};

const changeIndex = function(settingName, change, array) {
  if (array != 0) {
    if (!change && gameSettings[settingName] > 0) {
      gameSettings[settingName]--;
    } else if (change && gameSettings[settingName] < array.length - 1) {
      gameSettings[settingName]++;
    }
  } else {
    if (change && gameSettings[settingName] < maxPlayers) {
      gameSettings[settingName]++;
    } else if (!change && gameSettings[settingName] > minPlayers) {
      gameSettings[settingName]--;
    }
    displayNameInput();
  }
  setValues();
};

const displayNameInput = function() {
  const inputContainer = document.querySelector('.js-inputs');
  const colors = document.querySelector('.js-input-colors')
  inputContainer.innerHTML = '';
  colors.innerHTML = "";

  for (let playerCount = 0; playerCount < gameSettings['players']; playerCount++) {
    inputContainer.innerHTML += `
    <label for="speler${playerCount+1}" class="c-names">
    <input type="text" name="speler${playerCount+1}" id="speler${playerCount+1}" class="c-name__input" value="Speler ${playerCount+1}">
  </label>`;
  colors.innerHTML += `<div class="c-name-color color${playerCount+1}"></div>`
  }

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
  modeValue.innerHTML = arrModes[gameSettings['mode']];
  diffValue.innerHTML = arrDiffs[gameSettings['difficulty']];
  playerValue.innerHTML = gameSettings['players'];
};

const settings = function() {
  bodyContent = document.querySelector('body');

  // dit start het spel en geeft de settings mee
  // als je op de start knop klikt wordt de body gecleared
  // dan wordt er nieuwe html geinjecteerd
  document.querySelector('#settings-nextbutton').addEventListener('click', function() {
    for(let z = 0; z < gameSettings['players']; z++){
      y = document.getElementById(`speler${z+1}`);
      playerNames.push(y.value);
    };
      bodyContent.innerHTML = '';
      // bodyContentGameArea variabele zit in de gameContent.js file
      bodyContent.innerHTML = bodyContentGameArea;
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
