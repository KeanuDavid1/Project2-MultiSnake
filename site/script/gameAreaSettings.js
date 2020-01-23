const getScreenResolution = function(){
    const ratio = window.screen.availHeight / window.screen.availWidth;

    // hard coded instellingen voor deze resoluties,
    // moet nog uitgebreid worden voor meer support

    if (Math.round(ratio * 100) / 100 == 0.67 && window.screen.availWidth > 1366){
        console.log("Detected 16:9 resolution; 1920x1080");
        document.querySelector(".c-canvas").style.backgroundImage = "url('assets/images/gamescreenplatform16-9.svg')";
    } else if(Math.round(ratio * 100) / 100 == 0.56 && window.screen.availWidth <= 1366){
        // dit is geen 16:9; het is meer 16:8.5
        console.log("Detected 16:9 resolution; 1366x768");
        canvasWidth = 1024;
        canvasHeight = 768;
        document.querySelector(".c-canvas").style.backgroundImage = "url('assets/images/gamescreenplatform16-9.svg')";
    } else if(Math.round(ratio * 100) / 100 == 0.75 && window.screen.availWidth <= 1366){
        console.log("Detected 4:3 resolution; 1366x1024");
        canvasWidth = 1024;
        canvasHeight = 1024;
        document.querySelector(".c-canvas").style.backgroundImage = "url(assets/images/gamescreenplatform1-1.svg)";
    }
}