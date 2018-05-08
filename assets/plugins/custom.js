$(document).ready(function() {

})

function fadeIn() {
  window.sr = new ScrollReveal();
    var nodeListOne = document.querySelectorAll('.fade-in');
    sr.reveal(nodeListOne,{
          duration: 1000, 
          origin: 'bottom',
          easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
          scale:1 });
}