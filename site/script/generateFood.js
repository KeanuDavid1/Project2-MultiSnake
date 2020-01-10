// Deze functie kiest welk soort voedsel er zal spawnen en voegt deze toe aan de voedsel arrey in gameVariables.js
const generateFood = function() {
  generateHealthy();
  generateUnhealthy();
};

const generateHealthy = function() {
  let healthyFood;
  let whichHealthy = Math.round(Math.random() * 3);
  if (whichHealthy == 0) {
    healthyFood = 'Apple';
    healthy = true;
  } else if (whichHealthy == 1) {
    healthyFood = 'Pear';
    healthy = true;
  } else if (whichHealthy == 2) {
    healthyFood = 'Carrot';
    healthy = true;
  }
  pushFoodToArray(healthyFood, healthy);
};

const generateUnhealthy = function() {
  let unhealthyFood
  let whichUnhealthy = Math.round(Math.random());
  if (whichUnhealthy == 0) {
    unhealthyFood = 'Burger';
    healthy = false;
  } else if (whichUnhealthy == 1) {
    unhealthyFood = 'Pizza';
    healthy = false;
  }
  pushFoodToArray(unhealthyFood, healthy);
};

const pushFoodToArray = function(food, healthy) {
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
