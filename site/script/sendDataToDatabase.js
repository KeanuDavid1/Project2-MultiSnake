// posts data to the database
// it uses the backend running op a RPI

const gatherPlayerData = function() {
    // gather the player data with a for loop
    // and pushes it to the playerDataArray
    for (let i = 0; i < snakeArray.length; i++) {
        let body = {
          Naam: 'Peepo',
          Hartslag: 180,
          Score: snakeArray[i].score,
          Tijd: (snakeArray[i].deathTime - gameStartTime)
        };
        playerDataArray.push(body);
      }
};


// redirect to the scoreboard after
// the handledata sends data to the database
const redirectToScoreboard = function() {
    setTimeout(function() {
      window.location.href = 'scoreboard.html';
    }, 3000);
  };

const logger = function(jsonData){
      // sends the player data from the PlayerDataArray
      // it sends a list to the API
      handleData(
        `${socketIP}/api/snakedata/save/player`,
        redirectToScoreboard,
        'POST',
        JSON.stringify(playerDataArray)
      );
      // ends here
      // then redirect to scoreBoard with the handleData callback
}

const sendData = function(){
    // make the body with the game data
    // contains most of the game info
    let GameBody = {
        Tijd: (gameEndTime - gameStartTime),
        Hartslag: 180,
        Mode: modes[gameSettings['mode']],
        AantalSpelers: gameSettings['players'],
        Moeilijkheid: difficulties[gameSettings['difficulty']]
      };

      // send the game data to the API
      // it sends an object
      handleData(
        `${socketIP}/api/snakedata/save/game`,
        logger,
        'POST',
        JSON.stringify(GameBody)
      );
}

