const pushItemToArray = function(obstacleType, type) {
  itemArray.push(
    new component(
      itemSize,
      itemSize,
      `assets/img/${obstacleType}.svg`,
      getRndInteger(itemSize + 20, canvasWidth - itemSize * 2 - 20),
      getRndInteger(itemSize + 20, canvasHeight - itemSize * 2 - 20),
      'image',
      type
    )
  );
};

let unhealthyFood;
let healthyFood;
let obstacleType;
let itemPicker;

// Deze functie kiest welk soort voedsel er zal spawnen en voegt deze toe aan de voedsel arrey in gameVariables.js
const generateItem = function() {
  itemPicker = Math.round(Math.random() * 3);
  generateUnhealthyFood();
  generateHealthyFood();
};

// genereert gezond eten
const generateHealthyFood = function() {
  if (itemPicker == 0) {
    healthyFood = 'Apple';
  } else if (itemPicker == 1) {
    healthyFood = 'Pear';
  } else {
    healthyFood = 'Carrot';
  }
  pushItemToArray(healthyFood, 0);
};

// genereert ongezond eten
const generateUnhealthyFood = function() {
  if (itemPicker <= 1) {
    unhealthyFood = 'Burger';
  } else if (itemPicker > 1) {
    unhealthyFood = 'Pizza';
  }
  pushItemToArray(unhealthyFood, 1);
};

// genereert stenen
const generateRock = function() {
  if (rockCounter <= maxAmountRocks) {
    if (itemPicker <= 1) {
      obstacleType = 'Stone1';
    } else if (itemPicker > 1) {
      obstacleType = 'Stone2';
    }
    rockCounter++;
    pushItemToArray(obstacleType, 2);
  } else {
  }
};
