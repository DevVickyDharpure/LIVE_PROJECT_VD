let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  if (index < 0) currentIndex = totalSlides - 1;

  slides.style.transform = `translateX(${-currentIndex * 800}px)`;
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);

}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}