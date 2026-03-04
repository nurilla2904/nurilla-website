(function(){
  var hamburger = document.querySelector('.hamburger');
  if(!hamburger) return;

  var nav = document.querySelector('nav');
  var links = document.querySelectorAll('.nav-links li a');
  var ctaLink = document.querySelector('.nav-cta a');

  var mobile = document.createElement('div');
  mobile.className = 'mobile-menu';

  for(var i = 0; i < links.length; i++){
    var a = document.createElement('a');
    a.href = links[i].href;
    a.textContent = links[i].textContent;
    if(links[i].classList.contains('active')) a.classList.add('active');
    mobile.appendChild(a);
  }

  if(ctaLink){
    var c = document.createElement('a');
    c.href = ctaLink.href;
    c.textContent = ctaLink.textContent;
    c.style.color = 'var(--gold)';
    c.style.fontWeight = '600';
    mobile.appendChild(c);
  }

  nav.appendChild(mobile);

  hamburger.addEventListener('click', function(){
    mobile.classList.toggle('open');
    var icon = hamburger.querySelector('i');
    icon.className = mobile.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
  });
})();
