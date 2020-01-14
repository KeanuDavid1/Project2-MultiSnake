const displayScore = function(scoreAmount) {
  const score = document.querySelector('.js-score');
  score.innerHTML = scoreAmount;
};

const displayLives = function(livesAmount) {
  const lives = document.querySelector('.js-lives');
  if (livesAmount == 3) {
    lives.innerHTML = `<img src="assets/img/favorite-24px.png"> <img src="assets/img/favorite-24px.png"> <img src="assets/img/favorite-24px.png">`;
  }
  else if (livesAmount == 2) {
    lives.innerHTML = `<img src="assets/img/favorite-24px.png"> <img src="assets/img/favorite-24px.png">`;
  }
  else if (livesAmount == 1) {
    lives.innerHTML = `<img src="assets/img/favorite-24px.png">`;
  }
  else if (livesAmount == 0) {
    lives.innerHTML = ``;
  }
};
