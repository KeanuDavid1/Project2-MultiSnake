// dit houd de settings bij
let settings = {};

const settings = function(){

    bodyContent = document.querySelector("body");

    // dit start het spel en geeft de settings mee
    document.querySelector("#start").addEventListener('click', function(){
        bodyContent = gameContent;
        console.log(settings);
        startGame();
    })
}

document.addEventListener('DOMContentLoaded', function() {
    console.info('DOM geladen');
    settings();
});