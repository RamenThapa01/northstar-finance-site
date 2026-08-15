const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  if (open) {
    nav.removeAttribute('style');
  } else {
    nav.style.cssText = 'display:flex;position:absolute;z-index:10;top:71px;left:0;right:0;margin:0;padding:20px;background:var(--cream);border-bottom:1px solid var(--line);flex-direction:column;gap:17px;';
  }
});

document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  nav.removeAttribute('style');
  toggle?.setAttribute('aria-expanded', 'false');
}));
