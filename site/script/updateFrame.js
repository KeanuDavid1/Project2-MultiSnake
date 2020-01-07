function updateGameArea() {

    gameArea.clear();

    for (snake of snakeArray) {
        snake.update();
    }

}