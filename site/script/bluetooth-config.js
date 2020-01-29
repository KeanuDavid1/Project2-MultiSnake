const laadData = function() {
  fetch(`${socketIP}/api/snakedata/bluetooth/getDevices`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(`Probleem bij de fetch().Status Code: ${response.status}`);
      } else {
        console.info('Er is een response teruggekomen van de server');
        return response.json();
      }
    })
    .then(function(jsonObject) {
      console.info('json object is aangemaakt');
      console.info('verwerken data');
      verwerkData(jsonObject);
    })
    .catch(function(error) {
      document.querySelector('.c-devices').innerHTML =
        'Fout bij het ophalen van devices.';
      console.error(`fout bij verwerken json ${error}`);
    });
};

const verwerkData = function(data) {
  if (data.length == 0) {
    document.querySelector('.c-devices').innerHTML = 'Geen devices gevonden';
  } else {
    document.querySelector('.c-devices').innerHTML = '';
    for (let dev of data) {
      console.log(dev);
      document.querySelector(
        '.c-devices'
      ).innerHTML += `<li class="c-devices__item" MAC="${dev['mac']}">
            <div>
                ${dev['name']}
            </div>
            <div class="c-player-select">
            <select required name="speler" id="speler">
                <option value="" disabled selected hidden>Speler</option>
                <option value="0">Groen</option>
                <option value="1">Rood</option>
                <option value="2">Geel</option>
                <option value="3">Blauw</option>
            </select>
            </div>
            <input disabled type="button" value="Connect" class="js-connect c-button-connect">
        </li>`;
    }
    for (let child of document.querySelector('.c-devices').children) {
      child.querySelector('.js-connect').addEventListener('click', sendAddress);
      child.addEventListener('input', makeConnectValid);
    }
  }
};

const makeConnectValid = function(e) {
  e.target.parentElement.querySelector('input').disabled = false;
};

const sendAddress = function(e) {
  const back = document.getElementById('settings-backbutton');
  back.value = 'Opslaan';
  item = e.target.parentElement;
  let data = `{ "player": ${
    item.querySelector('select').value
  }, "mac": "${item.getAttribute('MAC')}" }`;
  console.log(data);
  handleData(
    `${socketIP}/api/snakedata/bluetooth/getDevices`,
    function(data) {
      confirmAddress(data, (item = e.target.parentElement));
    },
    'POST',
    data
  );
};

const confirmAddress = function(data, domElement) {
  domElement.querySelector('input').value = 'Connected!';
  domElement.querySelector('input').disabled = true;
  domElement.querySelector('select').disabled = true;
};

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  laadData();
});
