let lastDirection;
let lastPositionX;
let lastPositionY;
let newComponent;
let collideCounter;

function snakeObject(x, y, playerNumber) {
    //Hier houden wij bij de snake onderdelen.
    this.snakePieces = [];
    //Snake heeft altijd een hoofd dus voegen wij dit direct toe aan de snakePieces
    this.snakePieces.push(new headComponent(x, y, playerNumber));

    //Verandert de x en y positie van iedere onderdeel en voert de update uit die het onderdelen tekent op canvas.
    this.update = function () {
        for (piece of this.snakePieces) {
            piece.newPos();
            piece.update();
        }
    };

    //Spawnt een nieuwe snake body part in het tegengestelde beweeg richting van de laatste snake piece.
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

    this.collidesWithOwnTail = function () {
        collideCounter = 0;
        for (let snakePiece of this.snakePieces) {
            if (collideCounter != 0 && collideCounter != 1) {
                if (this.snakePieces[0].collidesWith(snakePiece)) {
                    return true;
                }
            }
            collideCounter++;
        }
        return false;
    }
}