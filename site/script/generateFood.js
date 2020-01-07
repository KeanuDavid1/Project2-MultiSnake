let apple;
let burger;

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
  apple = new component(
    foodSize,
    foodSize,
    'img/Apple.svg',
    Math.floor(Math.random()) * canvasWidth,
    Math.floor(Math.random()) * canvasHeight,
    'image'
  );
};

const generateUnhealtyFood = function() {
  burger = new component(
    foodSize,
    foodSize,
    'img/Burger.svg',
    Math.floor(Math.random()) * canvasWidth,
    Math.floor(Math.random()) * canvasHeight,
    'image'
  );
};
