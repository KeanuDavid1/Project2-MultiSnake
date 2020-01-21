function updateGameArea() {
  let gameOver;
  frames++;
  //Verwijdert alles dat op canvas getekend is.
  //Zit in gameArea.js
  gameArea.clear();

  if (snakeArray.length > 0) {
    gameOver = true;
  }

  //Overloopt alle snakes
  for (snake of snakeArray) {
    if (!snake.isDead) {
      //Tekent de snake onderdelen opnieuw
      //Functie zit in snakeObject.js

      //toon score & levens wanneer het spel start
      displayScore(snake.score, snake.player);

      // kijkt of de slang een andere slang aanraakt
      // WIP
      if (snake.collidesWithOtherSnake() && !snake.isImmune) {
        snake.health -= 1;
        snake.setImmunity();
        displayLives(snake.health, snake.player);
      }

      //Checkt of de snake-head out of bounds is.
      //SnakePieces[0] verwijst naar de Snake head (de eerste part van snake)
      //isOutOfBounds functie zit in headComponent.js
      if (
        (snake.snakePieces[0].isOutOfBounds() || snake.collidesWithOwnTail()) &&
        !snake.isImmune
      ) {
        snake.setImmunity();
        //Om de tekst te maken als je het spel verliest.
        snake.health -= 1;
        snake.changeDirectionOnOutOfBounds();
        displayLives(snake.health, snake.player);
        //Stopt de refresh functie en dus heel het spel.
        //Zie gameArea.js
      } else if (snake.snakePieces[0].isOutOfBounds()) {
        snake.changeDirectionOnOutOfBounds();
      }

      // bekijkt de food array en checked of de slang het eten aanraakt
      let i = 0;
      // overloop de itemArray voor food
      for (item of itemArray) {
        item.update(i);

        // als het goed eten is
        if (item.hitObj(snake.snakePieces[0]) && item.type == 0) {
          itemArray.splice(i, 1);
          snake.addNewPiece();
          snake.score += addPoints;
          snake.healthyFoodCount++;
          displayScore(snake.score, snake.player);

          // als het slecht eten is
        } else if (item.hitObj(snake.snakePieces[0]) && item.type == 1) {
          itemArray.splice(i, 1);
          snake.score -= subtractPoints;
          snake.unhealthyFoodCount++;
          console.log(snake.unhealthyFoodCount);
          displayScore(snake.score, snake.player);

          // steekt een nieuwe text in textArray
          textArray.push(
            new showText(
              snake.snakePieces[0].x,
              snake.snakePieces[0].y - 30,
              `-${subtractPoints}pt`,
              frames + 120,
              '30px Arial',
              'red'
            )
          );
        } 
        // voor obstakels
        else if (
          item.hitObj(snake.snakePieces[0]) &&
          item.type == 2 &&
          !snake.isImmune
        ) {
          itemArray.splice(i, 1);
          snake.health -= 1;
          rockCounter--;
          displayLives(snake.health, snake.player);
          // veranderd de kleur bij het aanraken van een rots
          snake.setImmunity();
        }

        // counter van snake array
        i++;
      }

      // dit overloopt textarray en houd bij wat er moet getoond worden
      // moet het niet meer getoond worden wordt het verwijdered
      let x = 0;
      for (text of textArray) {
        textArray[x].update();
        if (!textArray[x].update()) {
          textArray.splice(x, 1);
        }
        x++;
      }
      snake.update();
      if (snake.isDead == false) {
        gameOver = false;
      }
    }
  }

  if (gameOver == true) {
    console.log('Game over');
    gameArea.clear();
    let gameOverText = new showText(
      canvasWidth / 3,
      canvasHeight / 2,
      'Game Over',
      frames + 120,
      'bold 90px Arial',
      'red'
    );

    gameOverText.update();
    gameEndTime = Date.now();
    // WIP - testing
    gatherPlayerData();
    sendData();
    gameArea.stop();
  }
}
