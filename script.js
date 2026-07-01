// ---------- Scroll progress rail ----------
function initProgressRail(){
  const fill = document.querySelector('.nav-rail__fill');
  if(!fill) return;
  const update = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? Math.min(100, (scrolled / max) * 100) : 0;
    fill.style.height = pct + '%';
  };
  document.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

// ---------- Reveal on scroll ----------
function initReveal(){
  const items = document.querySelectorAll('.reveal');
  if(!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach((el, i) => {
    el.style.setProperty('--i', i % 8);
    io.observe(el);
  });
}

// ---------- Hero word stagger ----------
function initHero(){
  const hero = document.querySelector('.hero__title');
  if(!hero) return;
  const text = hero.textContent;
  hero.textContent = '';
  text.split(' ').forEach((word, i) => {
    const span = document.createElement('span');
    span.className = 'hero__word';
    span.textContent = word + '\u00A0';
    span.style.animationDelay = (i * 0.09) + 's';
    hero.appendChild(span);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initProgressRail();
  initReveal();
  initHero();
});
