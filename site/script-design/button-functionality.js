
const init = function(){
    document.querySelector("#gamestart").addEventListener("click", function(){
        window.location.href = "game.html";
    });

    document.querySelector("#scoreboard").addEventListener("click", function(){
        window.location.href = "#";
    });

    document.querySelector("#options").addEventListener("click", function(){
        window.location.href = "#";
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.info('DOM geladen');
    init();
});