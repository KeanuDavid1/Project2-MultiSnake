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
    Math.random() * canvasWidth,
    Math.random() * canvasHeight,
    'image'
  );
};

const generateUnhealtyFood = function() {
  burger = new component(
    foodSize,
    foodSize,
    'img/Burger.svg',
    Math.random() * canvasWidth,
    Math.random() * canvasHeight,
    'image'
  );
};
