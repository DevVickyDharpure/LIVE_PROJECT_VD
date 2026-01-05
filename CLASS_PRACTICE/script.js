const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let interval;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(i) {
  slides[index].classList.remove("active");
  dots[index].classList.remove("active");

  index = i;

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  let i = (index + 1) % slides.length;
  showSlide(i);
}

function prevSlide() {
  let i = (index - 1 + slides.length) % slides.length;
  showSlide(i);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Auto slide
function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

startAutoSlide();

// Pause on hover
document.querySelector(".slider").addEventListener("mouseenter", stopAutoSlide);
document.querySelector(".slider").addEventListener("mouseleave", startAutoSlide);