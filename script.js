document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS library for scroll animations
  AOS.init({
    duration: 600,
    once: true
  });

  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Change navbar style on scroll for a sleek effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Optional: Typewriter effect for the hero heading
  const heroHeading = document.querySelector('.hero h1');
  if (heroHeading) {
    const fullText = heroHeading.textContent;
    heroHeading.textContent = '';
    let index = 0;
    function typeWriter() {
      if (index < fullText.length) {
        heroHeading.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
      }
    }
    typeWriter();
  }
});
