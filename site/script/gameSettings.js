let settings = {};

const settings = function(){

    bodyContent = document.querySelector("body");

    // start the game with the given settings
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