const spawnSnake = function(amount) {
  for (i = 0; i < amount; i++) {
    snakeArray.push(
      new snakeObject(
        100 * (i + 1),
        100 * (i + 1),
        [i],
        headColors[i],
        bodyColors[i],
        3,
        0
      )
    );
    snakeArray[i].addNewPiece();
    snakeArray[i].addNewPiece();
    snakeArray[i].snakePieces[0].movedown();
  }
};
