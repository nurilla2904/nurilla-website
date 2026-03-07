(function(){
  var hamburger = document.querySelector('.hamburger');
  if(!hamburger) return;

  var nav = document.querySelector('nav');
  var links = document.querySelectorAll('.nav-links li a');
  var ctaLink = document.querySelector('.nav-cta a');

  /* remove any previously created mobile menu (prevents duplicates) */
  var old = nav.querySelector('.mobile-menu');
  if(old) old.remove();

  var mobile = document.createElement('div');
  mobile.className = 'mobile-menu';
  var ul = document.createElement('ul');

  var seen = {};
  var ctaText = ctaLink ? ctaLink.textContent.trim() : '';

  for(var i = 0; i < links.length; i++){
    var txt = links[i].textContent.trim();

    /* skip duplicates (some pages have two identical <ul> lists) */
    if(seen[txt]) continue;
    seen[txt] = true;

    /* skip if this is the CTA text — we will add it separately at the end */
    if(ctaLink && txt === ctaText) continue;

    /* skip "Get in Touch" here — always add it last as red CTA */
    if(txt === 'Get in Touch') continue;

    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = links[i].href;
    a.textContent = txt;
    if(links[i].classList.contains('active')) a.classList.add('active');
    li.appendChild(a);
    ul.appendChild(li);
  }

  /* always add "Get in Touch" as the last item, styled red */
  var ctaLi = document.createElement('li');
  var ctaA = document.createElement('a');
  ctaA.href = 'contact.html';
  ctaA.textContent = 'Get in Touch';
  ctaA.style.cssText = 'color:#c0392b !important;font-weight:700 !important;';
  ctaLi.appendChild(ctaA);
  ul.appendChild(ctaLi);

  mobile.appendChild(ul);
  nav.appendChild(mobile);

  hamburger.addEventListener('click', function(){
    mobile.classList.toggle('open');
    var icon = hamburger.querySelector('i');
    icon.className = mobile.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
  });
})();
