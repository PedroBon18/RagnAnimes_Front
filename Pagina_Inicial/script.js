// Menu hamburguer toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Scroll carrossel para esquerda ou direita
function scrollCarousel(button, direction) {
  const carousel = button.parentElement.querySelector('.carousel');
  const scrollAmount = 200;
  carousel.scrollLeft += direction * scrollAmount;
}