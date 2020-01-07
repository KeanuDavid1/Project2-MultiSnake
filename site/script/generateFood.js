let apple;
let pear;
let carrot;
let burger;
let pizza;
let foodstate;

const generateFood = function() {
  let healtyOrNot = Math.round(Math.random());
  console.log(healtyOrNot);
  if (healtyOrNot == 0) {
    generateHealtyFood();
  } else {
    generateUnhealtyFood();
  }
};

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
