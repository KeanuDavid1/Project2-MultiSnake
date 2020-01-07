const simpleGameMode = function () {
    snakeArray.push(new snakeObject(100, 100));
    document.addEventListener('keydown', keypressed);
    // testMovement();
}


const testMovement = function () {
    snakePieces.push(new bodyComponent(125, 100))
}