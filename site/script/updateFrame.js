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
    //toon score & levens wanneer het spel start
    displayScore(snake.score);
    displayLives(snake.health);
    //Checkt of de snake-head out of bounds is.
    //SnakePieces[0] verwijst naar de Snake head (de eerste part van snake)
    //isOutOfBounds functie zit in headComponent.js
    if (snake.snakePieces[0].isOutOfBounds() || snake.collidesWithOwnTail()) {
      //Om de tekst te maken als je het spel verliest.
      ctx = gameArea.context;
      ctx.font = '30px Arial';
      ctx.fillStyle = 'red';
      ctx.fillText('Game over', canvasWidth / 2 - 100, canvasHeight / 2);

      //Stopt de refresh functie en dus heel het spel.
      //Zie gameArea.js
      gameArea.stop();
    }

    // bekijkt de food array en checked of de slang het eten aanraakt
    let i = 0;
    for (item of itemArray) {
      item.update(i);

      // als het goed eten is
      if (item.hitObj(snake.snakePieces[0]) && item.type == 0) {
        itemArray.splice(i, 1);
        snakeArray[0].addNewPiece();
        snake.score += addPoints;
        displayScore(snake.score);
        console.log('De item type');
        console.log(item.type);
        console.log(itemArray);

        // als het slecht eten is
      } else if (item.hitObj(snake.snakePieces[0]) && item.type == 1) {
        itemArray.splice(i, 1);
        snake.score -= subtractPoints;
        displayScore(snake.score);
        console.log('De item type');
        console.log(item.type);
        console.log(itemArray);
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

        // voor obstakels
      } else if (item.hitObj(snake.snakePieces[0]) && item.type == 2){
        itemArray.splice(i, 1)
        console.log('De item type')
        console.log(item.type);
        console.log(itemArray);
        // - hp awu
      };
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
  }
}
