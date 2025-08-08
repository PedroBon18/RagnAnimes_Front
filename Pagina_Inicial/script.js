// Menu hamburguer toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

function scrollCarousel(button, direction) {
  const carousel = button.parentElement.querySelector('.carousel');
  const item = carousel.querySelector('img'); // Pega um item
  const itemStyle = getComputedStyle(item);
  const itemWidth = item.offsetWidth + parseInt(itemStyle.marginRight) + parseInt(itemStyle.marginLeft);
  
  const visibleItems = Math.floor(carousel.offsetWidth / itemWidth); // Quantos cabem na tela
  const scrollAmount = itemWidth * visibleItems;

  if (direction === 1) {
    // Indo pra direita
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 5) {
      // Se chegou no final, volta pro início
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  } else {
    // Indo pra esquerda
    if (carousel.scrollLeft <= 0) {
      // Se está no início, vai pro final
      carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }
}