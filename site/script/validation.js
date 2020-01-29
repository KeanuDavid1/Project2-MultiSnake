'use strict';

let typedInput;
let names = {};
let startButton;
let namesStatus = {};

const isEmpty = function(fieldValue) {
  return !fieldValue || !fieldValue.length;
};

// class error
// adds or removes the class error-message
const addErrors = function(field) {
  field.classList.add('has-error');
};

const addBorder = function(field){
  field.classList.add('has-error--border')
}

const removeBorders = function(field){
  field.classList.remove('has-error--border')
}

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

  // invalidsettings word hier weer op nul gezet
  // want de check begint opnieuw
  invalidSettings = 0;
  for (let z = 0; z < gameSettings['players']; z++) {

    // DOM elements
    let y = document.getElementById(`speler${z + 1}`);
    let message = document.querySelector(`.js-names-error-message${z+1}`)
    let inputField = document.querySelector(`#speler${z+1}`);

    if (isEmpty(y.value)) {
      // add errors on empty values
      addErrors(message);
      addBorder(inputField)
      message.innerHTML = "Vereist";
      namesStatus[`player${z+1}`] = false;
    } else if(y.value.length > 20){
      // add errors on too long values
      addErrors(message);
      addBorder(inputField)
      message.innerHTML = "Te lang";
      namesStatus[`player${z+1}`] = false;
    }
    
    else{
      removeErrors(document.querySelector(`.js-names-error-message${z+1}`));
      removeBorders(document.querySelector(`#speler${z+1}`))
      namesStatus[`player${z+1}`] = true;
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
