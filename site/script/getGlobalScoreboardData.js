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
  for (let player in data) {
    let tijd = data[n].Tijd / 1000;
    scorebord.innerHTML += `<div class="c-row">
  <p class="u-span-column-1">${i}</p>
  <p class="u-span-column-2">
  ${data[n].SpelerNaam}
  </p>
  <p class="u-span-column-5">${tijd.toFixed(1)}</p>
  <p class="u-span-column-1">${data[n].Score}</p>
</div>`;
    i++;
    n++;
  }
};

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  init();
});
