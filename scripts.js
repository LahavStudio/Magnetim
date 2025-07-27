
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true });
});
function flashScreen() {
  const flash = document.createElement('div');
  flash.className = 'flash-overlay';
  document.body.appendChild(flash);
  setTimeout(() => {
    flash.style.opacity = 0;
    setTimeout(() => flash.remove(), 300);
  }, 100);
}
document.querySelectorAll('.cta, .flash-link').forEach(el => {
  el.addEventListener('click', flashScreen);
});
