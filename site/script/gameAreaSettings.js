const getScreenResolution = function(){
    console.log(window.screen.availHeight);
    console.log(window.screen.availWidth);
    const ratio = window.screen.availHeight / window.screen.availWidth;
    console.log(Math.round(ratio * 100) / 100)
    if (Math.round(ratio * 100) / 100 == 0.67){
        console.log("Detected 16:9 resolution");
        document.querySelector(".c-game-area__background").style.backgroundImage = "url('../assets/images/gamescreenplatform16-9.svg')";
    } else if(Math.round(ratio * 100) / 100 == 0.75){
        console.log("Detected 4:3 resolution");
        canvasWidth = 1024;
        canvasHeight = 1024;
        document.querySelector(".c-game-area__background").style.backgroundImage = "url('../assets/images/gamescreenplatform1-1.svg')";
    }
}