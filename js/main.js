// hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
