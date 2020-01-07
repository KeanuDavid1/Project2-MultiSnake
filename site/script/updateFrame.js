function updateGameArea() {
  gameArea.clear();

  for (snake of snakeArray) {
    snake.update();
    if (snake.snakePieces[0].isOutOfBounds()) {
      ctx = gameArea.context;
      ctx.font = '30px Arial';
      ctx.fillStyle = 'red';
      ctx.fillText('Get rekt', 200, 150);
      gameArea.stop();
    }
  }
  if (foodstate == 0) {
    apple.update();
  } else if (foodstate == 1) {
    burger.update();
  }
}
