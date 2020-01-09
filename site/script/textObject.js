
// dit object laat toe teksten te verschijnen in het canvas
function showText(x, y, message, endFrame, style, color) {
  this.x = x;
  this.y = y;
  this.message = message;
  this.endFrame = endFrame;
  this.style = style;
  this.color = color;

  // dit controleert of de message nog getoond moet worden
  this.update = function() {
    if (frames <= this.endFrame) {
      ctx = gameArea.context;
      ctx.font = style;
      ctx.fillStyle = color;
      ctx.fillText(this.message, this.x, this.y);
      return true;
    }
  };
}
