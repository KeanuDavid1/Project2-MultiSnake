const getScreenResolution = function(){
    const ratio = window.screen.availHeight / window.screen.availWidth;
    if (Math.round(ratio * 100) / 100 == 0.67){
        console.log("Detected 16:9 resolution");
        document.querySelector(".c-canvas").style.backgroundImage = "url('assets/images/gamescreenplatform16-9.svg')";
    } else if(Math.round(ratio * 100) / 100 == 0.75){
        console.log("Detected 4:3 resolution");
        canvasWidth = 1024;
        canvasHeight = 1024;
        document.querySelector(".c-canvas").style.backgroundImage = "url(assets/images/gamescreenplatform1-1.svg)";
    }
}