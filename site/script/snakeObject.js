let lastDirection;
let lastPositionX;
let lastPositionY;

function snakeObject(x, y) {
    this.snakePieces = [];
    this.snakePieces.push(new headComponent(x, y));
    this.moveup = function () {
        this.snakePieces[0].speedY = -movementSpeed;
        this.snakePieces[0].speedX = 0;
        this.snakePieces[0].direction = "up";
    };
    this.movedown = function () {
        this.snakePieces[0].speedY = movementSpeed;
        this.snakePieces[0].speedX = 0;
        this.snakePieces[0].direction = "down";
    };
    this.moveleft = function () {
        this.snakePieces[0].speedY = 0;
        this.snakePieces[0].speedX = -movementSpeed;
        this.snakePieces[0].direction = "left";
    };
    this.moveright = function () {
        this.snakePieces[0].speedY = 0;
        this.snakePieces[0].speedX = movementSpeed;
        this.snakePieces[0].direction = "right";
    };
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
            this.snakePieces.push(new bodyComponent(lastPositionX + 25, lastPositionY, posLast + 1));
        }
        else if (lastDirection == "right") {
            this.snakePieces.push(new bodyComponent(lastPositionX - 25, lastPositionY, posLast + 1));
        }
        else if (lastDirection == "up") {
            this.snakePieces.push(new bodyComponent(lastPositionX, lastPositionY + 25, posLast + 1));
        }
        else if (lastDirection == "down") {
            this.snakePieces.push(new bodyComponent(lastPositionX, lastPositionY - 25, posLast + 1));
        }
    }
}