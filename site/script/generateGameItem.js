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


// Deze functie kiest welk soort voedsel er zal spawnen en voegt deze toe aan de voedsel arrey in gameVariables.js
const generateItem = function() {
  let itemTypePicker = Math.round(Math.random() * 3);
  let itemPicker = Math.round(Math.random() * 3);
  let unhealthyFood;
  let healthyFood;
  let obstacleType;

  // spawned 100% een gezond stuk eten in het begin
  if (firstItem){
    console.log("Spawning first item...")
    itemTypePicker = 0;
    firstItem = false;
  }

  console.log(itemTypePicker);

  // genereert gezond eten
  if (itemTypePicker == 0){
    console.log("Spawning healthy food...")
    type = itemTypePicker;
    if (itemPicker == 0){
      healthyFood = 'Apple';
    } else if (itemPicker == 1){
      healthyFood = "Pear";
    } else {
      healthyFood = "Carrot";
    }
    pushItemToArray(healthyFood, type);
  }

// genereert ongezond eten
else if (itemTypePicker == 1){
  console.log("Spawning unhealthy food...")
  type = itemTypePicker;
  if (itemPicker <= 1) {
    unhealthyFood = 'Burger';
  } 
  else if (itemPicker > 1) {
    unhealthyFood = 'Pizza';
}
pushItemToArray(unhealthyFood, type);
}
// genereert stenen
else if (itemTypePicker == 2){
  console.log("Spawning rock...")
  type = itemTypePicker;
 if (itemPicker <=1){
    obstacleType = "Stone1";
 } else if(itemPicker > 1){
   obstacleType = "Stone2";
 }
 pushItemToArray(obstacleType, type);
}
};