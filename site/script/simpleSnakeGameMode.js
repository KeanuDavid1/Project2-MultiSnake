//Hier komen alle condities voor deze gamemode in, spawnen van 1 snake, start direction, en keydown event listener.

const simpleGameMode = function () {
    //Spawn snake head
    snakeArray.push(new snakeObject(100, 100, 0));
    //Voegt 1 body part toe
    snakeArray[0].addNewPiece();
    //Bepaalt de start direction
    // snakeArray[0].snakePieces[0].direction = "up";
    snakeArray[0].snakePieces[0].movedown();
    //Luistert naar de key presses
    document.addEventListener('keydown', keypressed);
    setInterval(generateFood, 6000);
}

