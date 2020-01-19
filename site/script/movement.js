//Dit is de callback bij een key press event, we kijken naar welk toets er op geklikt werd en binden acties eraan.

const keypressed = function () {
    console.log(event.key);
    if (event.key == "ArrowUp") {
        if (snakeArray[0].snakePieces[0].direction != "down") {
            snakeArray[0].snakePieces[0].moveup();
        }
    }
    else if (event.key == "ArrowDown") {
        if (snakeArray[0].snakePieces[0].direction != "up") {
            snakeArray[0].snakePieces[0].movedown();
        }
    }
    else if (event.key == "ArrowLeft") {
        if (snakeArray[0].snakePieces[0].direction != "right") {
            snakeArray[0].snakePieces[0].moveleft();
        }
    }
    else if (event.key == "ArrowRight") {
        if (snakeArray[0].snakePieces[0].direction != "left") {
            snakeArray[0].snakePieces[0].moveright();
        }
    }
    if (event.key == "w") {
        if (snakeArray[1].snakePieces[0].direction != "down") {
            snakeArray[1].snakePieces[0].moveup();
        }
    }
    else if (event.key == "s") {
        if (snakeArray[1].snakePieces[0].direction != "up") {
            snakeArray[1].snakePieces[0].movedown();
        }
    }
    else if (event.key == "a") {
        if (snakeArray[1].snakePieces[0].direction != "right") {
            snakeArray[1].snakePieces[0].moveleft();
        }
    }
    else if (event.key == "d") {
        if (snakeArray[1].snakePieces[0].direction != "left") {
            snakeArray[1].snakePieces[0].moveright();
        }
    }
    else if (event.key == "Space") {
        snakeArray[0].addNewPiece();
    }
}

const socketInput = function (data) {
    if (snakeArray.length >= data["player"] + 1) {
        if (data["direction"] == "up") {
            if (snakeArray[data["player"]].snakePieces[0].direction != "down") {
                snakeArray[data["player"]].snakePieces[0].moveup();
            }
        }
        else if (data["direction"] == "down") {
            if (snakeArray[data["player"]].snakePieces[0].direction != "up") {
                snakeArray[data["player"]].snakePieces[0].movedown();
            }
        }
        else if (data["direction"] == "left") {
            if (snakeArray[data["player"]].snakePieces[0].direction != "right") {
                snakeArray[data["player"]].snakePieces[0].moveleft();
            }
        }
        else if (data["direction"] == "right") {
            if (snakeArray[data["player"]].snakePieces[0].direction != "left") {
                snakeArray[data["player"]].snakePieces[0].moveright();
            }
        }
    }
}