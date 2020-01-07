const simpleGameMode = function () {
    snakeArray.push(new snakeObject(100, 100, 0));
    snakeArray[0].addNewPiece();
    snakeArray[0].snakePieces[0].moveup();
    document.addEventListener('keydown', keypressed);
}

