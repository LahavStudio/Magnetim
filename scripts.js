// Initialize AOS
AOS.init({ once: true });

// Flash animation on click
document.querySelectorAll('.flash-button').forEach(btn => {
  btn.addEventListener('click', e => {
    const flash = document.createElement('div');
    flash.className = 'flash-overlay';
    document.body.appendChild(flash);
    gsap.to(flash, { opacity: 1, duration: 0.1, onComplete: () => {
      gsap.to(flash, { opacity: 0, duration: 0.3, onComplete: () => flash.remove() });
    }});
  });
});