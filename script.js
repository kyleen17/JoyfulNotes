// Fade-in on scroll
const fadeInSections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.1
});

fadeInSections.forEach(section => {
  observer.observe(section);
});

function createSparkles(containerSelector, count = 15) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
  
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random() * 5}s`;
      sparkle.style.animationDuration = `${2 + Math.random() * 4}s`;
      container.appendChild(sparkle);
    }
  }
  
  // Creating for each section
  createSparkles('#mission .sparkles');
  createSparkles('#testimonials .sparkles');
  createSparkles('#why-choose .sparkles');
  createSparkles('#meet-kyleen .sparkles');

//   Interactive with the mouse
  
let lastSparkleTime = 0;

document.addEventListener('mousemove', function(e) {
  const now = Date.now();
  if (now - lastSparkleTime < 120) return; 

  lastSparkleTime = now;

  const notes = ['🎵', '🎶', '🎼'];
  const sparkle = document.createElement('div');
  sparkle.className = 'note-sparkle';
  sparkle.textContent = notes[Math.floor(Math.random() * notes.length)];

  document.body.appendChild(sparkle);

  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;

  setTimeout(() => sparkle.remove(), 1000);
});
