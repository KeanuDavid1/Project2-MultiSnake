function headComponent(x, y) {
  this.width = snakeBlockSize;
  this.height = snakeBlockSize;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.direction = 'none';
  this.update = function() {
    ctx = gameArea.context;
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}
