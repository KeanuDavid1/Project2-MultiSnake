let headDirection;
let newdirection;

//Het snake body object, er wordt een onderscheid gemaakt met head en body component

function bodyComponent(x, y, orderNumber, playerNumber) {
    this.width = snakeBlockSize;
    this.height = snakeBlockSize;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.player = playerNumber
    this.direction;

    //Hier worden de coordinaten opgeslagen waar het component moet veranderen van richting.
    this.arrayPositions = [];

    //Het positie van de body element binnen snakeObject
    this.order = orderNumber;

    //Tekent het body component op canvas
    this.update = function () {
        ctx = gameArea.context;
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    //Verandert de x en y positie
    this.newPos = function () {

        //Zorgt dat de body componenten altijd de component die voor hen is volgen.
        this.movementControl()
        
        //Verandert de positie met de speed waarde.
        this.x += this.speedX;
        this.y += this.speedY;
    }

    this.movementControl = function () {
        //Ales er iets is in de arrayPositions, dan moet het component de richting behouden tot die deze positie bereikt
        if (this.arrayPositions.length != 0) {
            //Als de richting op none staat wordt het op dezelfde richting als het blokje daarvoor gezet.
            if (this.arrayPositions[0][2] == "none") {
                this.arrayPositions[0][2] = this.arrayPositions[0][3];
            }

            //newdirection = De direction dat het component moet in bewegen om het positie te bereiken van het vorige blokje.
            newdirection = this.arrayPositions[0][2];

            //Als die coordinaten niet bereikt zijn, blijf bewegen in de richting dat de vorige blokje heeft meegegeven.
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

            //Verstuur de coordinaten die bereikt zijn naar de volgende blokje, als die bestaat.
            else {
                console.log(snakeArray[playerNumber].snakePieces.length)
                if (snakeArray[playerNumber].snakePieces.length - 1 > this.order) {
                    snakeArray[playerNumber].snakePieces[this.order + 1].arrayPositions.push(this.arrayPositions[0]);
                }
                //Verwijder de coordinaten uit de array.
                this.arrayPositions.shift();
                //Voer deze functie nog een keer uit om een nieuwe direction te krijgen.
                this.movementControl();
            }
        }

        //Als de arrayPositions leeg is, beweeg in dezelfde richting als het blokje voor dit.
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


    //Verandert de richting van de component
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