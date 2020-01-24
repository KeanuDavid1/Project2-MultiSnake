const init = function() {
  handleData(
    socketIP + '/api/snakedata/data/global/game_length',
    showGlobalLengthData
  );
  handleData(
    socketIP + '/api/snakedata/data/global/max_heartrate',
    showGlobalHeartrateData
  );
  handleData(
    socketIP + '/api/snakedata/data/global/scorebord',
    showGlobalScoreData
  );
};

const showGlobalLengthData = function(gameLength) {
  const length = document.querySelector('.js-global-length');
  const intLength = parseInt(gameLength[0]['MAX(Tijd)']);
  const lengthInMinutes = intLength / 1000;
  length.innerHTML = lengthInMinutes.toFixed(1);
};

const showGlobalHeartrateData = function(maxHeartrate) {
  console.log(maxHeartrate[0]['MAX(Hartslag)']);
  const globalHeart = document.querySelector('.js-global-heartbeat');
  globalHeart.innerHTML = parseInt(maxHeartrate[0]['MAX(Hartslag)']);
};

const showGlobalScoreData = function(data) {
  const scorebord = document.querySelector('.js-global-scoreboard');
  let i = 1;
  let n = 0;
  scorebord.innerHTML = '<h4>No.</h4><h4>Naam</h4><h4>Tijd</h4><h4>Score</h4>';
  for (let player in data) {
    let tijd = data[n].Tijd /1000
    scorebord.innerHTML += `<h4>${i}</h4>
  <h4>${data[n].SpelerNaam}</h4>
  <h4>${tijd.toFixed(1)}</h4>
  <h4>${data[n].Score}</h4>`;
    i++;
    n++;
  }
};

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  init();
});
