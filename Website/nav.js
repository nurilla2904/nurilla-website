(function(){
  /* ── hamburger toggle ── */
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  if(!hamburger || !mobileMenu) return;

  /* replace the inline onclick with a proper listener */
  hamburger.removeAttribute('onclick');
  hamburger.addEventListener('click', function(){
    mobileMenu.classList.toggle('open');
  });

  /* ── style "Get in Touch" red inside the mobile menu ── */
  var mobileLinks = mobileMenu.querySelectorAll('a');
  for(var i = 0; i < mobileLinks.length; i++){
    if(mobileLinks[i].textContent.trim() === 'Get in Touch'){
      mobileLinks[i].style.cssText = 'color:#c0392b !important;font-weight:700 !important;';
    }
  }

  /* ── also style it red in the desktop nav-cta if present ── */
  var ctaLink = document.querySelector('.nav-cta a');
  if(ctaLink){
    ctaLink.style.cssText = 'color:#c0392b !important;font-weight:700 !important;';
  }
})();
