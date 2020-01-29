const setAttackGameMode = function() {
  setInterval(checkHighestHeartRates, 5000);
};

const checkHighestHeartRates = function() {
  // decide the highest heartrate
  // decide the predator player number
  let highestRate = 0;
  let currentPredatorNumber = -1;
  for (let snake of snakeArray) {
    if (snake.heartrate > highestRate && !snake.isDead) {
      highestRate = snake.heartrate;
      currentPredatorNumber = snake.player;
    }
  }

  // set the current predator
  for (let snakePredator of snakeArray) {
    if (snakePredator.player == currentPredatorNumber) {
      snakePredator.predator = true;
      snakePredator.bodyColor = 'Black';
      snakePredator.switchColor();
    }
    snakePredator.startImmunity = false;
  }
};
