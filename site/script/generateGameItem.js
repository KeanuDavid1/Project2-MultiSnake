const pushItemToArray = function(item, type) {
  itemArray.push(
    new component(
      itemSize,
      itemSize,
      `img/${item}.svg`,
      Math.random() * (canvasWidth - itemSize + 1) + itemSize,
      Math.random() * (canvasHeight - itemSize + 1) + itemSize,
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
  generateHealthyFood()
};

// genereert gezond eten
const generateHealthyFood = function() {
  console.log('Spawning healthy food...');
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
  console.log('Spawning unhealthy food...');
    if (itemPicker <= 1) {
    unhealthyFood = 'Burger';
  } else if (itemPicker > 1) {
    unhealthyFood = 'Pizza';
  }
  pushItemToArray(unhealthyFood, 1);
};

// genereert stenen
const generateRock = function() {
  console.log('Spawning rock...');
  if (itemPicker <= 1) {
    obstacleType = 'Stone1';
  } else if (itemPicker > 1) {
    obstacleType = 'Stone2';
  }
  pushItemToArray(obstacleType, 2);
};
