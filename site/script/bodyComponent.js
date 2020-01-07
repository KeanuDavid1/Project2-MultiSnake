function bodyComponent(x, y, orderNumber) {
    this.width = snakeBlockSize;
    this.height = snakeBlockSize;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.direction;
    this.order = orderNumber;
    this.update = function () {
        ctx = gameArea.context;
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}