let modes = ['Klassiek', 'Special'];
let modesIndexTracker;
let difficulties = ['Makkelijk', 'Normaal', 'Moeilijk'];
let diffIndexTracker;
let players;
let indexTracker = {players: 1, modesIndexTracker: 0, diffIndexTracker: 0}
let modeValue;
let diffValue;
let playerValue;

const buttons = function() {
  document.querySelector(
    '.js-mode .c-options #left-mode'
  ).addEventListener('click', function() {
    changeIndex(Object.keys(indexTracker)[1], false, modes);
  });
  document.querySelector(
    '.js-mode .c-options #right-mode'
  ).addEventListener('click', function(){
    changeIndex(Object.keys(indexTracker)[1], true, modes);
  });

  // om de moeilijkheid aan te passen
  document.querySelector(
    '.js-difficulty .c-options #left-diff'
  ).addEventListener('click', function(){
    changeIndex(Object.keys(indexTracker)[2], false, difficulties)
  });
  document.querySelector(
    '.js-difficulty .c-options #right-diff'
  ).addEventListener('click', function(){
    changeIndex(Object.keys(indexTracker)[2], true, difficulties)
  });
  // voor de spelers aan te passen
  document.querySelector(
    '.js-difficulty .c-options #right-diff'
  ).addEventListener('click', function(){
    changeIndex(Object.keys(indexTracker)[2], true, difficulties)
  });
};

const changeIndex = function(settingName, change, array){
  console.log('Changing index...')
  if (!change && indexTracker[settingName] > 0){
    indexTracker[settingName]--;
  } else if (change && indexTracker[settingName] < array.length - 1){
    indexTracker[settingName]++;
  }
  setValues();
}

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
  console.log('Setting Values...');
  modeValue.innerHTML = modes[indexTracker["modesIndexTracker"]];
  diffValue.innerHTML = difficulties[indexTracker["diffIndexTracker"]];
  playerValue.innerHTML = indexTracker["players"];
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
  console.log('DOM Content Loaded!');
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
