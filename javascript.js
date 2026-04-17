const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');
let index = 0;
let autoPlay;

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlide();
  });
});

// Auto-play cada 4 segundos
function startAutoPlay() {
  autoPlay = setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlide();
  }, 4000);
}

function stopAutoPlay() {
  clearInterval(autoPlay);
}

track.addEventListener('mouseenter', stopAutoPlay);
track.addEventListener('mouseleave', startAutoPlay);

startAutoPlay();

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  // Ajustar altura al slide actual
  const currentSlide = slides[index];
  const newHeight = currentSlide.offsetHeight;
  track.parentElement.style.height = `${newHeight}px`;
}

// Ajustar altura inicial
window.addEventListener('load', () => {
  const initialHeight = slides[0].offsetHeight;
  track.parentElement.style.height = `${initialHeight}px`;
});
