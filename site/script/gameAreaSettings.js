const getScreenResolution = function() {
  const ratio = window.screen.availHeight / window.screen.availWidth;

  // hard coded instellingen voor deze resoluties,
  // moet nog uitgebreid worden voor meer support

  if (window.screen.availHeight >= 1000 && window.screen.availWidth >= 1680) {
    console.log('Detected 16:9 resolution; >= 1920x1080');
    document.querySelector('.c-canvas').style.backgroundImage =
      "url('assets/images/gamescreenplatform16-9.svg')";
  } else if (
    window.screen.availHeight > 768 &&
    window.screen.availWidth > 1366
  ) {
    console.log('Detected 16:9 resolution; > 1366x768');
    canvasWidth = 1024;
    canvasHeight = 768;
    document.querySelector('.c-canvas').style.backgroundImage =
      "url('assets/images/gamescreenplatform16-9.svg')";
  } else if (
    window.screen.availHeight <= 768 &&
    window.screen.availWidth <= 1366
  ) {
    console.log('Detected 16:9 resolution; <= 1366x768');
    canvasWidth = 1024;
    canvasHeight = 768;
    document.querySelector('.c-canvas').style.backgroundImage =
      "url('assets/images/gamescreenplatform16-9.svg')";
  } else if (
    window.screen.availHeight <= 1024 &&
    window.screen.availWidth <= 1366
  ) {
    console.log('Detected 4:3 resolution; <= 1366x1024');
    canvasWidth = 1024;
    canvasHeight = 1024;
    document.querySelector('.c-canvas').style.backgroundImage =
      'url(assets/images/gamescreenplatform1-1.svg)';
  }
};
