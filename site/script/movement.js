const keypressed = function () {
    console.log(event.code);
    if (event.code == "ArrowUp") {
        if (snakeArray[0].snakePieces[0].direction != "down") {
            snakeArray[0].snakePieces[0].moveup();
        }
    }
    else if (event.code == "ArrowDown") {
        if (snakeArray[0].snakePieces[0].direction != "up") {
            snakeArray[0].snakePieces[0].movedown();
        }
    }
    else if (event.code == "ArrowLeft") {
        if (snakeArray[0].snakePieces[0].direction != "right") {
            snakeArray[0].snakePieces[0].moveleft();
        }
    }
    else if (event.code == "ArrowRight") {
        if (snakeArray[0].snakePieces[0].direction != "left") {
            snakeArray[0].snakePieces[0].moveright();
        }
    }
    else if (event.code == "Space") {
        snakeArray[0].addNewPiece();
    }
}