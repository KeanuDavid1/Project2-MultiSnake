function updateGameArea() {
  frames++;
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
    if (snake.snakePieces[0].isOutOfBounds() || snake.collidesWithOwnTail()) {
      //Om de tekst te maken als je het spel verliest.
      ctx = gameArea.context;
      ctx.font = '30px Arial';
      ctx.fillStyle = 'red';
      ctx.fillText('Get rekt', 200, 150);

      //Stopt de refresh functie en dus heel het spel.
      //Zie gameArea.js
      gameArea.stop();
    }

    // bekijkt de food array en checked of de slang het eten aanraakt
    let i = 0;
    for (food of foodArray) {
      food.update();
      if (food.eatFood(snake.snakePieces[0]) && food.healthy == true) {
        foodArray.splice(i, 1);
        snakeArray[0].addNewPiece();
      } else if (food.eatFood(snake.snakePieces[0]) && food.healthy == false) {
        foodArray.splice(i, 1);
        textArray.push(new showText(snake.snakePieces[0].x, snake.snakePieces[0].y -30, "twee", frames + 120))
      }
    }
    i++;
  }

  let x = 0;
  for(text of textArray){
    textArray[x].update();
    if (!textArray[x].update()){
      textArray.splice(x, 1);
    }
    x++;
  }

  // for(i=0; i<foodArray.length; i++){
  //   foodArray[i].update();
  //   if (foodArray[i].eatFood(snake.snakePieces[0])) {
  //     foodArray.pop(i)
  //     snakeArray[0].addNewPiece();
  // }}
}
