const init = function() {
  // handleData(
  //   socketIP + '/api/snakedata/data/global/game_length',
  //   showMostPlayedDiffData
  // );
  // handleData(
  //   socketIP + '/api/snakedata/data/global/max_heartrate',
  //   showGlobalHeartrateData
  // );
  console.log(socketIP);
  handleData(
    socketIP + '/api/snakedata/data/global/scorebord',
    showGlobalScoreData
  );
};

// const showMostPlayedDiffData = function(mostPlayedDiff) {
//   const diff = document.querySelector('.js-most-played-diff');
//   // const intLength = parseInt(gameLength[0]['MAX(Tijd)']);
//   // const lengthInMinutes = intLength / 1000;
//   // length.innerHTML = lengthInMinutes.toFixed(1);
//   diff.innerHTML = mostPlayedDiff;
// };

// const showGlobalHeartrateData = function(maxHeartrate) {
//   console.log(maxHeartrate[0]['MAX(Hartslag)']);
//   const globalHeart = document.querySelector('.js-global-heartbeat');
//   globalHeart.innerHTML = parseInt(maxHeartrate[0]['MAX(Hartslag)']);
// };

const showGlobalScoreData = function(data) {
  // console.log(data)
  const scorebord = document.querySelector('.js-global-scoreboard');
  let i = 1;
  let n = 0;
  for (let player in data) {
    let seconden = Math.floor((data[n].Tijd / 1000) % 60);
    if (seconden < 10){
      seconden = `0${seconden}`;
    }
    let tijd = `${Math.floor((data[n].Tijd / 1000) / 60)}` + `:${seconden}`;
    scorebord.innerHTML += `
  <div class="c-row">
  <p class="u-span-column-1">${i}</p>
  <p class="u-span-column-2">
  ${data[n].SpelerNaam}
  </p>
  <p class="u-span-column-5">${tijd}</p>
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
