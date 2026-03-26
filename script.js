// ── TYPING ANIMATION ──
const titles = ['Software Developer', 'Full Stack Developer', 'API Engineer', 'UI/UX Builder'];
let t = 0, char = 0, deleting = false;
const el = document.getElementById('typingText');

function type() {
  const current = titles[t % titles.length];
  if (!deleting) {
    el.textContent = current.slice(0, ++char);
    if (char === current.length) {
      deleting = true;
      setTimeout(type, 1600);
      return;
    }
  } else {
    el.textContent = current.slice(0, --char);
    if (char === 0) {
      deleting = false;
      t++;
    }
  }
  setTimeout(type, deleting ? 55 : 80);
}
setTimeout(type, 1200);

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── NAV HAMBURGER ──
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});
