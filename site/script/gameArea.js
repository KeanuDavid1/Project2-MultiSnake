const initGameArea = function(DomCanvas) {
  //Game area object, wordt anders geschreven dan andere objecten, reden: idk werd zo geschreven op de tutorial.
  gameArea = {
    canvas: DomCanvas,
    //start functie
    start: function() {
      this.canvas.width = canvasWidth;
      this.canvas.height = canvasHeight;
      this.context = this.canvas.getContext('2d');
      //Om de 20ms wordt alles gewist en opnieuw getekend met een nieuwe positie/vorm
      //UpdateGameArea is een functie die zit in updateFrame.js
      this.interval = setInterval(updateGameArea, 20);
    },
    //Verwijdert alle tekeningen op canvas, wordt altijd uitgevoerd om de 20ms zie updateFrame.js
    clear: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    //Stopt de interval
    stop: function() {
      clearInterval(this.interval);
    }
  };

  //Voert de start functie hierboven uit.
  gameArea.start();
};
