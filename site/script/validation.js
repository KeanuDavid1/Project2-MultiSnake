'use strict';

let typedInput;
let names = {};
let startButton;

const isEmpty = function(fieldValue) {
  return !fieldValue || !fieldValue.length;
};

// class error
// adds or removes the class error-message
const addErrors = function(field) {
  field.classList.add('has-error');
};
const removeErrors = function(field) {
  field.classList.remove('has-error');
};

// getDom
// gets all the dom elements
const getDOM = function() {
  names.field = document.querySelector('.js-inputs');
  startButton = document.querySelector('.settings-nextbutton');
};

const enableInteraction = function() {
  // adds and event listener on the button
  // checked of de velden ingevuld zijn als je op de sign in button klikt
  for (let z = 0; z < gameSettings['players']; z++) {
    let y = document.getElementById(`speler${z + 1}`);
    if (isEmpty(y.value)) {
      addErrors(document.querySelector(`.js-names-error-message${z+1}`));
      invalidSettings++;
    }
  }
};

const init = function() {
  getDOM();
  enableInteraction();
};

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  init();
});
