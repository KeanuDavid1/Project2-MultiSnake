let timer;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// copy pasta, een async funtion om de 'sleep' functie aan te spreken
// deze functie zorgt voor de timer voordat het spel start
async function setTimer() {
  for (f = 4; f > 1; f--) {
    timer = document.querySelector('.js-timer');
    timer.innerHTML = f - 1;
    await sleep(1000);
  }
}
