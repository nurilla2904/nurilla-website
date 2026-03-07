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
    var txt = links[i].textContent.trim();

    /* skip duplicate if CTA also has "Get in Touch" */
    if(ctaLink && txt === ctaLink.textContent.trim()) continue;

    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = links[i].href;
    a.textContent = txt;
    if(links[i].classList.contains('active')) a.classList.add('active');

    /* style "Get in Touch" red even if it only appears in nav-links */
    if(txt === 'Get in Touch'){
      a.style.color = '#c0392b';
      a.style.fontWeight = '700';
    }

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
