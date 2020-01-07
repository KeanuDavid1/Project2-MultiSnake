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
            ctx.font = "30px Arial";
            ctx.fillStyle = "red"
            ctx.fillText("Get rekt", 200, 150);

            //Stopt de refresh functie en dus heel het spel.
            //Zie gameArea.js
            gameArea.stop();
        }

    }
  }
  if (foodstate == 0) {
    apple.update();
  } else if (foodstate == 1) {
    pear.update();
  } else if (foodstate == 2) {
    carrot.update();
  } else if (foodstate == 3) {
    burger.update();
  } else if (foodstate == 4) {
    pizza.update();
  }
}
