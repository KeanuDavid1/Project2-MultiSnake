//Deze functie maakt een food object aan met extra property "healthy" om een verschillende actie te kunnen uitvoeren wanneer de slang bv. een appel of een hamburger eet.
//Deze functie heeft ook de methode eatFood om te detecteren wanneer het hoofd van de slang het voedsel raakt.
function component(width, height, color, x, y, ImageType, type) {
  this.image = ImageType;
  if (this.image == 'image') {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.type = type;
  this.startFrames = frames;
  this.update = function(i) {
    ctx = gameArea.context;
    if (ImageType == 'image') {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    if (this.type == 1) {
      if (frames == this.startFrames + 500) {
        itemArray.splice(i, 1);
      }
    }
  };
  this.hitObj = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = otherobj.x;
    var otherright = otherobj.x + otherobj.width;
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + otherobj.height;
    var crash = true;
    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    return crash;
  };
}
