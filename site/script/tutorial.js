const islandAnimation = function() {
  const container = document.getElementById('js-instructions');
  container.style.display = "none";
  setTimeout(function(){
      container.style.display = "block"
  },1000)
};

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  islandAnimation();
});
