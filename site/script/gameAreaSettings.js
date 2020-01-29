const getScreenResolution = function() {
  const ratio = window.screen.availHeight / window.screen.availWidth;

  // hard coded instellingen voor deze resoluties,
  // moet nog uitgebreid worden voor meer support

  if (window.screen.availHeight >= 1000 && window.screen.availWidth >= 1680) {
    document.querySelector('.c-canvas').style.backgroundImage =
      "url('assets/images/gamescreenplatform16-9.svg')";
  } else if (
    window.screen.availHeight > 768 &&
    window.screen.availWidth > 1366
  ) {
    canvasWidth = 1024;
    canvasHeight = 768;
    document.querySelector('.c-canvas').style.backgroundImage =
      "url('assets/images/gamescreenplatform16-9.svg')";
  } else if (
    window.screen.availHeight <= 768 &&
    window.screen.availWidth <= 1366
  ) {
    canvasWidth = 1024;
    canvasHeight = 768;
    document.querySelector('.c-canvas').style.backgroundImage =
      "url('assets/images/gamescreenplatform16-9.svg')";
  } else if (
    window.screen.availHeight <= 1024 &&
    window.screen.availWidth <= 1366
  ) {
    canvasWidth = 1024;
    canvasHeight = 1024;
    document.querySelector('.c-canvas').style.backgroundImage =
      'url(assets/images/gamescreenplatform1-1.svg)';
  }
};
