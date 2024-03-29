//Snake-head, De eerste component in de snakeObject, er wordt onderscheid gemaakt tussen dit en de body elementen.

function headComponent(x, y, playerNumber, color) {
    this.width = snakeBlockSize;
    this.height = snakeBlockSize;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.player = playerNumber
    this.direction = "down";
    this.color = color;
    this.originalColor = color;
    // this.health = health;

    //Tekent het component op de canvas
    this.update = function () {
        ctx = gameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }

    //Verandert de x en y positie met de speed waarde
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    //Verandert de richting van de head
    this.moveup = function () {
        this.speedY = -movementSpeed;
        this.speedX = 0;
        //Verstuurt de coordinaten naar het eerste body component bij het verandering van richting.
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

    //Checkt of de head element out of bounds is.
    this.isOutOfBounds = function () {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        var otherleft = snakeBlockSize;
        var otherright = canvasWidth - snakeBlockSize;
        var othertop = snakeBlockSize;
        var otherbottom = canvasHeight - snakeBlockSize;
        let crash = false;
        if ((mybottom < othertop) ||
            (mytop > otherbottom) ||
            (myright < otherleft) ||
            (myleft > otherright)) {
            crash = true;
        }
        return crash;
    }

    this.collidesWith = function (otherObject) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherObject.x + 2;
        var otherright = otherObject.x + (otherObject.width) - 2;
        var othertop = otherObject.y + 2;
        var otherbottom = otherObject.y + (otherObject.height) - 2;
        let crash = true;
        if ((mybottom < othertop) ||
            (mytop > otherbottom) ||
            (myright < otherleft) ||
            (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}
