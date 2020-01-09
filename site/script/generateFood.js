// Deze functie kiest welk soort voedsel er zal spawnen en voegt deze toe aan de voedsel arrey in gameVariables.js
const generateFood = function () {
  let food;
  let healthy;
  let whichFood = Math.round(Math.random() * 4);
  if (whichFood == 0) {
    food = 'Apple';
    healthy = true;
  } else if (whichFood == 1) {
    food = 'Pear';
    healthy = true;
  } else if (whichFood == 2) {
    food = 'Carrot';
    healthy = true;
  } else if (whichFood == 3) {
    food = 'Burger';
    healthy = false;
  } else if (whichFood == 4) {
    food = 'Pizza';
    healthy = false;
  }
  foodArray.push(
    new component(
      foodSize,
      foodSize,
      `img/${food}.svg`,
      Math.random() * (canvasWidth - foodSize + 1) + foodSize,
      Math.random() * (canvasHeight - foodSize + 1) + foodSize,
      'image',
      healthy
    )
  );
};
