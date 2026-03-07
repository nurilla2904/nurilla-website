(function(){
  var hamburger = document.querySelector('.hamburger');
  if(!hamburger) return;

  var nav = document.querySelector('nav');
  var links = document.querySelectorAll('.nav-links li a');
  var ctaLink = document.querySelector('.nav-cta a');

  var mobile = document.createElement('div');
  mobile.className = 'mobile-menu';

  var ul = document.createElement('ul');

  for(var i = 0; i < links.length; i++){
    /* skip "Get in Touch" from nav-links if it also exists as the CTA */
    if(ctaLink && links[i].textContent.trim() === ctaLink.textContent.trim()) continue;

    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = links[i].href;
    a.textContent = links[i].textContent;
    if(links[i].classList.contains('active')) a.classList.add('active');
    li.appendChild(a);
    ul.appendChild(li);
  }

  if(ctaLink){
    var li = document.createElement('li');
    var c = document.createElement('a');
    c.href = ctaLink.href;
    c.textContent = ctaLink.textContent;
    c.style.color = '#c0392b';
    c.style.fontWeight = '700';
    li.appendChild(c);
    ul.appendChild(li);
  }

  mobile.appendChild(ul);
  nav.appendChild(mobile);

  hamburger.addEventListener('click', function(){
    mobile.classList.toggle('open');
    var icon = hamburger.querySelector('i');
    icon.className = mobile.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
  });
})();
