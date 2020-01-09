// Deze functie kiest welk soort voedsel er zal spawnen en voegt deze toe aan de voedsel arrey in gameVariables.js
const generateFood = function() {
  let food
  let whichFood = Math.floor(Math.random() * 4);
  if (whichFood == 0) {
    food = "Apple"
  }
  else if(whichFood == 1){
    food = "Pear"
  }
  else if(whichFood == 2){
    food = "Carrot"
  }
  else if(whichFood == 3){
    food = "Burger"
  }
  else if(whichFood == 4){
    food = "Pizza"
  }
  foodArray.push(new component(
    foodSize,
    foodSize,
    `img/${food}.svg`,
    Math.random() * canvasWidth,
    Math.random() * canvasHeight,
    'image'
  ));

};