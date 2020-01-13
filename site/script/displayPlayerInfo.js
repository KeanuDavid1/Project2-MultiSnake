const displayScore = function(scoreAmount) {
  const score = document.querySelector('.js-score');
  score.innerHTML = 'Score: ' + scoreAmount;
};

const displayLives = function(livesAmount) {
  const lives = document.querySelector('.js-lives');
  lives.innerHTML = 'Lives: ' + livesAmount;
};
