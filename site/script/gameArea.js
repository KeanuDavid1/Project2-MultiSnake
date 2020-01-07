const initGameArea = function(DomCanvas) {
  gameArea = {
    canvas: DomCanvas,
    start: function() {
      this.canvas.width = canvasWidth;
      this.canvas.height = canvasHeight;
      this.context = this.canvas.getContext('2d');
      this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  };
  gameArea.start();
};
