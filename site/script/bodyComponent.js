let headDirection;
let newdirection;

function bodyComponent(x, y, orderNumber, playerNumber) {
    this.width = snakeBlockSize;
    this.height = snakeBlockSize;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.player = playerNumber
    this.direction;
    this.arrayPositions = [];
    this.order = orderNumber;
    this.update = function () {
        ctx = gameArea.context;
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
        this.movementControl()
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.movementControl = function () {
        console.log(this.arrayPositions)
        if (this.arrayPositions.length != 0) {
            if (this.arrayPositions[0][2] == "none") {
                this.arrayPositions[0][2] = this.arrayPositions[0][3];
            }
            newdirection = this.arrayPositions[0][2];

            if (this.x != this.arrayPositions[0][0] || this.y != this.arrayPositions[0][1]) {
                if (newdirection == "left") {
                    this.moveleft();
                }
                else if (newdirection == "up") {
                    this.moveup();
                }
                else if (newdirection == "down") {
                    this.movedown();
                }
                else if (newdirection == "right") {
                    this.moveright();
                }
            }
            else {
                console.log(snakeArray[playerNumber].snakePieces.length)
                if (snakeArray[playerNumber].snakePieces.length - 1 > this.order) {
                    snakeArray[playerNumber].snakePieces[this.order + 1].arrayPositions.push(this.arrayPositions[0]);
                }
                this.arrayPositions.shift();
                this.movementControl();
            }
        }
        else {
            headDirection = snakeArray[playerNumber].snakePieces[this.order - 1].direction;
            if (headDirection == "left") {
                this.moveleft();
            }
            else if (headDirection == "up") {
                this.moveup();
            }
            else if (headDirection == "right") {
                this.moveright();
            }
            else if (headDirection == "down") {
                this.movedown();
            }
        }
    }
    this.moveup = function () {
        this.speedY = -movementSpeed;
        this.speedX = 0;
        this.direction = "up";
        snakeArray[playerNumber].snakePieces[1]
    };
    this.movedown = function () {
        this.speedY = movementSpeed;
        this.speedX = 0;
        this.direction = "down";
    };
    this.moveleft = function () {
        this.speedY = 0;
        this.speedX = -movementSpeed;
        this.direction = "left";
    };
    this.moveright = function () {
        this.speedY = 0;
        this.speedX = movementSpeed;
        this.direction = "right";
    };
}