const islandAnimation = function() {
  const container = document.getElementById('js-instructions');
  const button = document.getElementById('back');
  container.style.display = 'none';
  button.style.display = 'none';
  setTimeout(function() {
    container.style.display = 'block';
    button.style.display = 'block';
  }, 500);
};

const listenToVidButtons = function() {
  const buttonLeft = document.querySelector('.js-button-left');
  const buttonRight = document.querySelector('.js-button-right');
  const video = document.querySelector('.c-vid-container');
  const title = document.querySelector('.js-title');
  const description = document.querySelector('.js-description');

  buttonLeft.addEventListener('click', function() {
    videoIndex = videoIndex - 1;
    if (videoIndex > 7) {
      videoIndex = 0;
    } else if (videoIndex < 0) {
      videoIndex = 7;
    }
    video.innerHTML = `<video src="${videoPaths[videoIndex]}" autoplay loop></video>`;
    title.innerHTML = tutorialTitles[videoIndex];
    description.innerHTML = tutorialText[videoIndex];
    displayItems(videoIndex);
  });

  buttonRight.addEventListener('click', function() {
    videoIndex = videoIndex + 1;
    if (videoIndex > 7) {
      videoIndex = 0;
    } else if (videoIndex < 0) {
      videoIndex = 7;
    }
    video.innerHTML = `<video src="${videoPaths[videoIndex]}" autoplay loop></video>`;
    title.innerHTML = tutorialTitles[videoIndex];
    description.innerHTML = tutorialText[videoIndex];
    displayItems(videoIndex);
  });
};

const displayItems = function(index) {
  const itemContainer = document.querySelector('.js-items');
  itemContainer.classList.remove('display-no-items');
  console.log(itemContainer.classList)
  console.log("Current index:")
  console.log(index)
  if (index == 0) {
    itemContainer.innerHTML = `<h5>Voedsel soorten:</h5>
    <div class="c-item-images">
    <img class="c-item" src="assets/img/Apple.svg" alt="Appel">
    <img class="c-item" src="assets/img/Pear.svg" alt="Peer">
    <img class="c-item" src="assets/img/Carrot.svg" alt="Wortel">`;
  } else if (index == 1) {
    itemContainer.innerHTML = `<h5>Voedsel soorten:</h5>
    <div class="c-item-images">
    <img class="c-item" src="assets/img/Burger.svg" alt="Hamburger">
    <img class="c-item" src="assets/img/Pizza.svg" alt="Pizza">`;
  } else if (index == 2) {
    itemContainer.innerHTML = `<h5>Obstakel soorten:</h5>
    <div class="c-item-images">
    <img class="c-item" src="assets/img/Stone1.svg" alt="Steen 1">
    <img class="c-item" src="assets/img/Stone2.svg" alt="Steen 2">`;
  } else {
    itemContainer.classList.add('display-no-items') ;
    console.log(itemContainer.classList)
  }
};

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  islandAnimation();
  listenToVidButtons();
});
