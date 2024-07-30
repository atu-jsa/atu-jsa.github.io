// hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// fetch currency data
fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
  .then(response => response.json())
  .then(data => {
    const currencyElement = document.getElementById('currency');
    currencyElement.textContent = `1 USD = ${data.usd.jpy} JPY (${data.date})`;
  })
  .catch(error => {
    console.error('Error fetching currency data:', error);
  });

// slideshow in home page
document.addEventListener('DOMContentLoaded', function () {
  const slideshow = document.getElementById('images');
  const slides = Array.from(slideshow.getElementsByClassName('slide'));
  const slideWidth = slides[0].offsetWidth;
  let currentPosition = 0;
  let animationFrameId;

  slides.forEach(slide => {
    slideshow.appendChild(slide.cloneNode(true));
  });

  function scroll() {
    currentPosition -= 0.5; // Adjust speed by changing the increment value
    if (currentPosition <= -slideshow.scrollWidth / 2) {
      currentPosition = 0;
    }
    slideshow.style.transform = `translateX(${currentPosition}px)`;
    animationFrameId = requestAnimationFrame(scroll);
  }

  scroll();
});