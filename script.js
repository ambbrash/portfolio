// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const slides = document.querySelectorAll('.service-slide');
const wrapper = document.querySelector('.services-wrapper');
let currentIndex = 0;
const totalSlides = slides.length;

function showNextSlide() {
  if (currentIndex < totalSlides - 1) { 
    currentIndex++;
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  } else {
    // Reset to first slide smoothly
    wrapper.style.transition = 'none'; // remove transition temporarily
    wrapper.style.transform = `translateX(0)`; 
    currentIndex = 0;
    // Force reflow to enable transition again
    void wrapper.offsetWidth;
    wrapper.style.transition = 'transform 0.8s ease-in-out';
  }
}

// Auto-rotate every 4 seconds
if (totalSlides > 0) {
  setInterval(showNextSlide, 4000);
}
