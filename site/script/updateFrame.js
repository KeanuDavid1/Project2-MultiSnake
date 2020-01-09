function updateGameArea() {
  //Verwijdert alles dat op canvas getekend is.
  //Zit in gameArea.js
  gameArea.clear();

  //Overloopt alle snakes
  for (snake of snakeArray) {
    //Tekent de snake onderdelen opnieuw
    //Functie zit in snakeObject.js
    snake.update();
    //Checkt of de snake-head out of bounds is.
    //SnakePieces[0] verwijst naar de Snake head (de eerste part van snake)
    //isOutOfBounds functie zit in headComponent.js
    if (snake.snakePieces[0].isOutOfBounds()) {
      //Om de tekst te maken als je het spel verliest.
      ctx = gameArea.context;
      ctx.font = '30px Arial';
      ctx.fillStyle = 'red';
      ctx.fillText('Get rekt', 200, 150);

      //Stopt de refresh functie en dus heel het spel.
      //Zie gameArea.js
      gameArea.stop();
    }
  }

  // for(i=0; i<foodArray.length; i++){
  //   foodArray[i].update();
  //   if (foodArray[i].eatFood(snake.snakePieces[0])) {
  //     foodArray.pop(i)
  //     snakeArray[0].addNewPiece();
  // }}

  let i = 0;
  for (food of foodArray) {
    food.update();
    if (food.eatFood(snake.snakePieces[0])) {
      foodArray.pop(i)
      snakeArray[0].addNewPiece();
    }
    i++
  }
}
