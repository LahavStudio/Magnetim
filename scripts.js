
// Flash effect
function flashScreen() {
  const flash = document.createElement('div');
  flash.className = 'flash-overlay';
  document.body.appendChild(flash);
  flash.style.opacity = 1;
  setTimeout(() => {
    flash.style.transition = 'opacity 0.3s';
    flash.style.opacity = 0;
    setTimeout(() => flash.remove(), 300);
  }, 100);
}

// Add to CTA buttons and nav links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cta, .flash-link').forEach(el => {
    el.addEventListener('click', flashScreen);
  });
});
