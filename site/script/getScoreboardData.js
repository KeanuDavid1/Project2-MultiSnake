const init = function() {
  handleData(socketIP + '/api/snakedata/data/scorebord', showScoreData);
  handleData(socketIP + '/api/snakedata/data/max_heartrate', showHeartData);
  handleData(socketIP + '/api/snakedata/data/game_length', showLengthData);
};

const showScoreData = function(data) {
  const scorebord = document.querySelector('.js-scorebord');
  let i = 1;
  let n = 0;
  scorebord.innerHTML = '<h4 class="c-score-header"></h4><h4 class="c-score-header">Naam</h4><h4 class="c-score-header">Score</h4>';
  for (let player in data) {
    scorebord.innerHTML += `<h4>${i}.</h4>
  <h4>${data[n].SpelerNaam}</h4>
  <h4>${data[n].Score}</h4>`;
    i++;
    n++;
  }
};

const showHeartData = function(maxHeartrate) {
  const heart = document.querySelector('.js-heartbeat');
  heart.innerHTML = maxHeartrate[0]['MAX(Hartslag)'];
};

const showLengthData = function(data) {
  const length = document.querySelector('.js-length');
  let seconden = Math.floor((data[0]["MAX(Tijd)"]  / 1000) % 60);
    if (seconden < 10){
      seconden = `0${seconden}`;
    }
  length.innerHTML = `${Math.floor((data[0]["MAX(Tijd)"] / 1000) / 60)}` + `:${seconden}`;
};

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  init();
});
