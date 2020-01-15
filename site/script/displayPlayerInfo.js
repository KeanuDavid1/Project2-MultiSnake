const displayScore = function (scoreAmount, player) {
  let score = document.querySelector(`.js-player${player} .js-score`);
  score.innerHTML = scoreAmount;
};

const displayLives = function (livesAmount, player) {
  const lives = document.querySelector(`.js-player${player} .js-lives`);
  const flair = document.getElementById(`js-flair__${player}`)
  const card = document.getElementById(`js-card__${player}`)
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
    flair.style.backgroundColor = "grey"
    card.style.backgroundColor = "darkgrey"
  }
};
