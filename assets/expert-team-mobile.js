(function(){
  var root = document.getElementById('expert-team');
  if(!root) return;
  var container = root.querySelector('.js-experts-slider');
  if(!container) return;

  // Optional: Bewegung mit Pfeiltasten
  container.addEventListener('keydown', function(e){
    var isMobile = window.matchMedia('(max-width: 749px)').matches;
    if(!isMobile) return;
    var step = container.clientWidth * 0.82 + 16;
    if(e.key === 'ArrowRight'){ e.preventDefault(); container.scrollBy({left: step, behavior:'smooth'}); }
    if(e.key === 'ArrowLeft' ){ e.preventDefault(); container.scrollBy({left:-step, behavior:'smooth'}); }
  }, {passive:false});
})();
