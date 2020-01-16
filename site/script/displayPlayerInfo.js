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

const displayGameInfo = function(){
  document.querySelector('.js-level').innerHTML = modes[gameSettings['mode']];
  document.querySelector('.js-diff').innerHTML = difficulties[gameSettings['difficulty']];
  document.querySelector('#stop-button').addEventListener('click', function(){
    window.location.href = "index.html";
  })
}

const generatePlayerCard = function(){
  for(i=0;i<gameSettings['players'];i++){
    console.log(document.querySelector('.c-player-cards'));
    document.querySelector('.c-playerframe__cards').innerHTML += `
    <div class="c-playercard"  id="js-card__${i}">
    <div class="c-playercard__flair c-flair__${i}" id="js-flair__${i}"></div>
    <div class="c-container__info"><h3>Speler ${i+1}</h3>
    <div class="c-playercard__info js-player${i}">
      <div class="c-lives js-lives"></div>
      <p class="c-score js-score"></p>
    </div>
    </div>
  </div>`
  }

}
