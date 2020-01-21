const init = function(){
    handleData(socketIP+"api/v1/data/game", showData)
}

const showData = function(data){
    console.log(data)
}

document.addEventListener('DOMContentLoaded', function() {
    console.info('DOM geladen');
    init();
});