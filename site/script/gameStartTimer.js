let timer;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// copy pasta, een async funtion om de 'sleep' functie aan te spreken
// deze functie zorgt voor de timer voordat het spel start
async function setTimer() {
  for (i = 4; i > 1; i--) {
    timer = document.querySelector('.js-timer');
    timer.innerHTML = i - 1;
    await sleep(1000);
  }
}
