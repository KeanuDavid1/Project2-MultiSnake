const keypressed = function () {
    console.log(event.code);
    if (event.code == "ArrowUp") {
        snakeArray[0].moveup();
    }
    else if (event.code == "ArrowDown") {
        snakeArray[0].movedown();
    }
    else if (event.code == "ArrowLeft") {
        snakeArray[0].moveleft();
    }
    else if (event.code == "ArrowRight") {
        snakeArray[0].moveright();
    }
    else if (event.code == "Space") {
        snakeArray[0].addNewPiece();
    }
}