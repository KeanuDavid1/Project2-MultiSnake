function showText(width, height, x, y, message, startFrame, endFrame) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.message = message;
  this.startFrame = startFrame;
  this.endFrame = endFrame;

  this.update = function() {
    if (currentFrame <= frames + 2 && showMessage == true) {
      showMessage = true;
      ctx = gameArea.context;
      ctx.font = '30px Arial';
      ctx.fillStyle = 'red';
      ctx.fillText(this.message, this.x, this.y);
    }
  };
}
