document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#gamestart').addEventListener('click', function() {
    window.location.href = 'game.html';
  });
  document.querySelector('#scoreboard').addEventListener('click', function() {
    window.location.href = 'ranglijst.html';
  });
});
