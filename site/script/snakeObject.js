let lastDirection;
let lastPositionX;
let lastPositionY;
let newComponent;

function snakeObject(x, y, playerNumber) {
    this.snakePieces = [];
    this.snakePieces.push(new headComponent(x, y, playerNumber));
    this.update = function () {
        for (piece of this.snakePieces) {
            piece.newPos();
            piece.update();
        }
    };
    this.addNewPiece = function () {
        let posLast = this.snakePieces.length - 1;

        lastDirection = this.snakePieces[posLast].direction;
        lastPositionX = this.snakePieces[posLast].x;
        lastPositionY = this.snakePieces[posLast].y;
        console.log(lastPositionX);
        console.log(lastPositionY);
        if (lastDirection == "left") {
            this.snakePieces.push(new bodyComponent(lastPositionX + snakePieceDistance, lastPositionY, posLast + 1, playerNumber));
            this.snakePieces[posLast + 1].moveleft();
        }
        else if (lastDirection == "right") {
            this.snakePieces.push(new bodyComponent(lastPositionX - snakePieceDistance, lastPositionY, posLast + 1, playerNumber));
            this.snakePieces[posLast + 1].moveright();
        }
        else if (lastDirection == "up") {
            this.snakePieces.push(new bodyComponent(lastPositionX, lastPositionY + snakePieceDistance, posLast + 1, playerNumber));
            this.snakePieces[posLast + 1].moveup();
        }
        else if (lastDirection == "down") {
            this.snakePieces.push(new bodyComponent(lastPositionX, lastPositionY - snakePieceDistance, posLast + 1, playerNumber));
            this.snakePieces[posLast + 1].movedown();
        }
        else {
            this.snakePieces.push(new bodyComponent(lastPositionX + snakePieceDistance, lastPositionY, posLast + 1, playerNumber));
        }
    }
}