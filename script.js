/* ============================
   CYBERSEC BOOTCAMP — SCRIPTS
   ============================ */

// ---- MATRIX RAIN ----
(function () {
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]|/\\';
  const fontSize = 13;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(5, 10, 14, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff88';
    ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillStyle = Math.random() > 0.95 ? '#ffffff' : '#00ff88';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 50);
})();


// ---- TERMINAL ANIMATION ----
(function () {
  const output = document.getElementById('terminal-output');
  if (!output) return;

  const lines = [
    { text: '# CyberSec Bootcamp v2025.1', cls: 'comment' },
    { text: 'nmap -sV --script vuln target.lab', cls: 'cmd' },
    { text: 'Starting Nmap 7.94 ...', cls: 'result' },
    { text: '80/tcp   open  http     Apache 2.4.49', cls: 'result' },
    { text: '443/tcp  open  https    OpenSSL 1.0.2', cls: 'result' },
    { text: '| CVE-2021-41773: Path Traversal!', cls: 'cmd' },
    { text: 'msfconsole -q -x "use exploit/..."', cls: 'cmd' },
    { text: '[*] Meterpreter session 1 opened', cls: 'result' },
    { text: 'whoami && id', cls: 'cmd' },
    { text: 'root  uid=0(root) gid=0(root)', cls: 'result' },
    { text: '# Lancement du module suivant...', cls: 'comment' },
  ];

  let lineIdx = 0;
  let charIdx = 0;
  let currentDiv = null;

  function typeLine() {
    if (lineIdx >= lines.length) {
      lineIdx = 0;
      output.innerHTML = '';
    }

    const line = lines[lineIdx];

    if (charIdx === 0) {
      currentDiv = document.createElement('div');
      currentDiv.className = `t-${line.cls}`;
      if (line.cls === 'cmd') {
        const prompt = document.createElement('span');
        prompt.className = 'prompt';
        prompt.textContent = 'root@lab:~$ ';
        currentDiv.appendChild(prompt);
      }
      output.appendChild(currentDiv);
    }

    const target = line.text;
    if (charIdx < target.length) {
      const span = currentDiv.querySelector('span.typed') || (() => {
        const s = document.createElement('span');
        s.className = 'typed';
        currentDiv.appendChild(s);
        return s;
      })();
      span.textContent += target[charIdx];
      charIdx++;
      setTimeout(typeLine, 30 + Math.random() * 20);
    } else {
      charIdx = 0;
      lineIdx++;
      setTimeout(typeLine, 350);
    }
  }

  setTimeout(typeLine, 800);
})();


// ---- COUNTER ANIMATION ----
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1500;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, step);
}

// Trigger counters when hero visible
const counters = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));


// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll(
  '.module-card, .about-card, .cert-card, .tool-category'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 60 * (Array.from(revealEls).indexOf(entry.target) % 6));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));


// ---- ENROLL FORM ----
function handleEnroll(e) {
  e.preventDefault();
  const success = document.getElementById('enroll-success');
  const btn = e.target.querySelector('button[type="submit"]');

  btn.textContent = '[ Envoi en cours... ]';
  btn.disabled = true;

  setTimeout(() => {
    e.target.style.display = 'none';
    success.classList.remove('hidden');
  }, 1200);
}


// ---- NAVBAR SCROLL EFFECT ----
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = 'rgba(0,255,136,0.15)';
  } else {
    nav.style.borderBottomColor = '';
  }
});


// ---- GLITCH EFFECT ----
(function () {
  const glitch = document.querySelector('.glitch');
  if (!glitch) return;

  setInterval(() => {
    if (Math.random() > 0.85) {
      glitch.style.textShadow = `
        ${(Math.random() - 0.5) * 6}px 0 #ff3c5a,
        ${(Math.random() - 0.5) * 6}px 0 #00b4ff
      `;
      setTimeout(() => { glitch.style.textShadow = ''; }, 80);
    }
  }, 2000);
})();
