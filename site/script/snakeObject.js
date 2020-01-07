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
        let lastDirection = this.snak
    }
}