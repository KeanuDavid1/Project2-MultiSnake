const init = function() {
  handleData(
    socketIP + '/api/snakedata/data/global/game_length',
    showGlobalLengthData
  );
  handleData(
    socketIP + '/api/snakedata/data/global/max_heartrate',
    showGlobalHeartrateData
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

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  init();
});
