function showText(x, y, message, endFrame) {
  this.x = x;
  this.y = y;
  this.message = message;
  this.endFrame = endFrame;

  this.update = function() {
    if (frames <= this.endFrame) {
      ctx = gameArea.context;
      ctx.font = '30px Arial';
      ctx.fillStyle = 'red';
      ctx.fillText(this.message, this.x, this.y);
      return true;
    }
  };
}
