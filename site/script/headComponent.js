function headComponent(x, y, playerNumber) {
    this.width = snakeBlockSize;
    this.height = snakeBlockSize;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.player = playerNumber
    this.direction = "up";
    this.update = function () {
        ctx = gameArea.context;
        ctx.fillStyle = "lightgreen";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.moveup = function () {
        this.speedY = -movementSpeed;
        this.speedX = 0;
        snakeArray[playerNumber].snakePieces[1].arrayPositions.push([this.x, this.y, this.direction, "up"])
        this.direction = "up";

    };
    this.movedown = function () {
        this.speedY = movementSpeed;
        this.speedX = 0;
        snakeArray[playerNumber].snakePieces[1].arrayPositions.push([this.x, this.y, this.direction, "down"])
        this.direction = "down";

    };
    this.moveleft = function () {
        this.speedY = 0;
        this.speedX = -movementSpeed;
        snakeArray[playerNumber].snakePieces[1].arrayPositions.push([this.x, this.y, this.direction, "left"])
        this.direction = "left";

    };
    this.moveright = function () {
        this.speedY = 0;
        this.speedX = movementSpeed;
        snakeArray[playerNumber].snakePieces[1].arrayPositions.push([this.x, this.y, this.direction, "right"])
        this.direction = "right";

    };
    this.isOutOfBounds = function () {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        var otherleft = 20;
        var otherright = 480 - 20;
        var othertop = 20;
        var otherbottom = 270 - 20;
        let crash = false;
        if ((mybottom < othertop) ||
            (mytop > otherbottom) ||
            (myright < otherleft) ||
            (myleft > otherright)) {
            crash = true;
        }
        return crash;
    }
}
