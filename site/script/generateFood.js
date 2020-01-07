let apple;
let pear;
let carrot;
let burger;
let pizza;
let foodstate;

// Deze functie kiest aan de hand van een random nummer als het een gezond of ongezond stuk voedsel wordt
const generateFood = function() {
  let healtyOrNot = Math.round(Math.random());
  console.log(healtyOrNot);
  if (healtyOrNot == 0) {
    generateHealtyFood();
  } else {
    generateUnhealtyFood();
  }
};

// Deze functie maakt de gezonde stukken voedsel aan de hand van de functie component in foodObjects.js
const generateHealtyFood = function() {
  let whichHealty = Math.floor(Math.random() * 3);
  if (whichHealty == 0) {
    foodstate = 0;
    apple = new component(
      foodSize,
      foodSize,
      'img/Apple.svg',
      Math.random() * canvasWidth,
      Math.random() * canvasHeight,
      'image'
    );
  } else if (whichHealty == 1) {
    foodstate = 1;
    pear = new component(
      foodSize,
      foodSize,
      'img/Pear.svg',
      Math.random() * canvasWidth,
      Math.random() * canvasHeight,
      'image'
    );
  } else if (whichHealty == 2) {
    foodstate = 2;
    carrot = new component(
      foodSize,
      foodSize,
      'img/Carrot.svg',
      Math.random() * canvasWidth,
      Math.random() * canvasHeight,
      'image'
    );
  }
};

// Deze functie maakt de ongezonde stukken voedsel aan de hand van de functie component in foodObjects.js
const generateUnhealtyFood = function() {
  let whichUnhealty = Math.floor(Math.random() * 2);
  if (whichUnhealty == 0) {
    foodstate = 3;
    burger = new component(
      foodSize,
      foodSize,
      'img/Burger.svg',
      Math.random() * canvasWidth,
      Math.random() * canvasHeight,
      'image'
    );
  }
  if (whichUnhealty == 1) {
    foodstate = 4;
    pizza = new component(
      foodSize,
      foodSize,
      'img/Pizza.svg',
      Math.random() * canvasWidth,
      Math.random() * canvasHeight,
      'image'
    );
  }
};
