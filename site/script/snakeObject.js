let lastDirection;
let lastPositionX;
let lastPositionY;
let newComponent;
let collideCounter;

function snakeObject(x, y, playerNumber, headColor, bodyColor, health, score) {
  //Hier houden wij bij de snake onderdelen.
  this.snakePieces = [];
  this.headColor = headColor;
  this.bodyColor = bodyColor;
  this.stunColor = "white";
  this.health = health;
  this.score = score;
  this.isImmune = false;
  this.startImmunityFrame;
  this.player = playerNumber;
  this.isDead = false;
  this.deathTime;
  //Snake heeft altijd een hoofd dus voegen wij dit direct toe aan de snakePieces
  this.snakePieces.push(new headComponent(x, y, playerNumber, this.headColor));
  //Verandert de x en y positie van iedere onderdeel en voert de update uit die het onderdelen tekent op canvas.
  this.update = function () {
    if (this.health != 0) {
      for (piece of this.snakePieces) {
        piece.newPos();
        piece.update(this.bodyColor);
      }
      this.checkImmunity();
    }
    else {
      if (!this.isDead)
        for (let piece of snakeArray) {
          piece.x = null;
          piece.y = null;
        }
      this.isDead = true;
      this.deathTime = Date.now();
    }
  };

  this.updateColor = function () {
    for (piece of this.snakePieces) {
      piece.update(this.bodyColor);
    }

  };

  //Spawnt een nieuwe snake body part in het tegengestelde beweeg richting van de laatste snake piece.
  this.addNewPiece = function () {
    let posLast = this.snakePieces.length - 1;
    lastDirection = this.snakePieces[posLast].direction;
    lastPositionX = this.snakePieces[posLast].x;
    lastPositionY = this.snakePieces[posLast].y;
    // console.log(lastPositionX);
    // console.log(lastPositionY);
    if (lastDirection == 'left') {
      this.snakePieces.push(
        new bodyComponent(
          lastPositionX + snakePieceDistance,
          lastPositionY,
          posLast + 1,
          playerNumber,
          this.bodyColor
        )
      );
      this.snakePieces[posLast + 1].moveleft();
    } else if (lastDirection == 'right') {
      this.snakePieces.push(
        new bodyComponent(
          lastPositionX - snakePieceDistance,
          lastPositionY,
          posLast + 1,
          playerNumber,
          this.bodyColor
        )
      );
      this.snakePieces[posLast + 1].moveright();
    } else if (lastDirection == 'up') {
      this.snakePieces.push(
        new bodyComponent(
          lastPositionX,
          lastPositionY + snakePieceDistance,
          posLast + 1,
          playerNumber,
          this.bodyColor
        )
      );
      this.snakePieces[posLast + 1].moveup();
    } else if (lastDirection == 'down') {
      this.snakePieces.push(
        new bodyComponent(
          lastPositionX,
          lastPositionY - snakePieceDistance,
          posLast + 1,
          playerNumber,
          this.bodyColor
        )
      );
      this.snakePieces[posLast + 1].movedown();
    } else {
      this.snakePieces.push(
        new bodyComponent(
          lastPositionX + snakePieceDistance,
          lastPositionY,
          posLast + 1,
          playerNumber,
          this.bodyColor
        )
      );
    }
  };

  this.collidesWithOwnTail = function () {
    collideCounter = 0;
    for (let snakePiece of this.snakePieces) {
      if (collideCounter != 0 && collideCounter != 1) {
        if (this.snakePieces[0].collidesWith(snakePiece)) {

          return true;
        }
      }
      collideCounter++;
    }
    return false;
  };

  this.changeDirectionOnOutOfBounds = function () {

    if (this.snakePieces[0].y <= 0) {
      for (let piece of this.snakePieces) {
        piece.y += movementSpeed * 2;
      }
      for (let piece of this.snakePieces.slice(1))
        for (let position of piece.arrayPositions) {
          position[1] += movementSpeed * 2;
        }

      if (this.snakePieces[0].x >= canvasWidth / 2) {
        this.snakePieces[0].moveleft();
      }
      else {
        this.snakePieces[0].moveright();
      }
    }

    else if (this.snakePieces[0].y + snakeBlockSize >= canvasHeight) {
      for (let piece of this.snakePieces) {
        piece.y -= movementSpeed * 2;
      }
      for (let piece of this.snakePieces.slice(1))
        for (let position of piece.arrayPositions) {
          position[1] -= movementSpeed * 2;
        }
      if (this.snakePieces[0].x >= canvasWidth / 2) {
        this.snakePieces[0].moveleft();
      }
      else {
        this.snakePieces[0].moveright();
      }
    }

    else if (this.snakePieces[0].x <= 0) {
      for (let piece of this.snakePieces) {
        piece.x += movementSpeed * 2;
      }
      for (let piece of this.snakePieces.slice(1))
        for (let position of piece.arrayPositions) {
          position[0] += movementSpeed * 2;
        }
      if (this.snakePieces[0].y >= canvasHeight / 2) {
        this.snakePieces[0].moveup();
      }
      else {
        this.snakePieces[0].movedown();
      }
    }

    else if (this.snakePieces[0].x + snakeBlockSize >= canvasWidth) {
      for (let piece of this.snakePieces) {
        piece.x -= movementSpeed * 2;
      }
      for (let piece of this.snakePieces.slice(1))
        for (let position of piece.arrayPositions) {
          position[0] -= movementSpeed * 2;
        }
      if (this.snakePieces[0].y >= canvasHeight / 2) {
        this.snakePieces[0].moveup();
      }
      else {
        this.snakePieces[0].movedown();
      }
    }
  }

  this.setImmunity = function () {
    this.switchColor();
    this.isImmune = true;
    this.startImmunityFrame = frames;

  }

  this.checkImmunity = function () {
    // console.log(this.isImmune)
    if (this.isImmune) {

      if (((frames - this.startImmunityFrame) % 10) == 0) {
        this.switchColor();
      }
      if (frames == this.startImmunityFrame + 100) {
        this.isImmune = false;
        this.revertColor();

      }
    }
  }

  this.switchColor = function () {
    if (this.snakePieces[0].color == this.headColor) {
      this.snakePieces[0].color = this.stunColor;
    }
    else {
      this.snakePieces[0].color = this.headColor
    }

    for (let piece of this.snakePieces.slice(1)) {
      if (piece.color == this.bodyColor) {
        piece.color = this.stunColor;
      }
      else {
        piece.color = this.bodyColor;
      }
    }
  }

  this.revertColor = function () {
    this.snakePieces[0].color = this.headColor;
    for (let piece of this.snakePieces.slice(1)) {
      piece.color = this.bodyColor;
    }
  }


}
