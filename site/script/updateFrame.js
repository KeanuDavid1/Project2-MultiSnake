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
  }
  // Zorgt dat enkel het stuk fruit die random gekozen werd in generateFood.js geupdate wordt en verwijst door naar de funtie die kijkt wanneer de slang in aanraking komt met het eten
  // if (foodstate == 0) {
  //   apple.update();
  //   checkIfEaten(apple);
  // } else if (foodstate == 1) {
  //   pear.update();
  //   checkIfEaten(pear);
  // } else if (foodstate == 2) {
  //   carrot.update();
  //   checkIfEaten(carrot);
  // } else if (foodstate == 3) {
  //   burger.update();
  //   checkIfEaten(burger);
  // } else if (foodstate == 4) {
  //   pizza.update();
  //   checkIfEaten(pizza);
  // }
}

// Kijkt wanneer de slang in aanraking komt met eten en verlengt de slang wanneer het voedsel gezond is, wanneer het voedsel ongezond is toont hij: "-5ptn"
// const checkIfEaten = function (foodType) {
//   if (foodType.eatFood(snake.snakePieces[0])) {
//     if (foodType == pear || foodType == apple || foodType == carrot) {
//       snakeArray[0].addNewPiece();
//     } else {
//       ctx = gameArea.context;
//       ctx.font = '20px Arial';
//       ctx.fillStyle = 'red';
//       ctx.fillText('-5pts', 200, 150);
//     }
//   }
// };
