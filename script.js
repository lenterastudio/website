document.addEventListener('DOMContentLoaded', function() {
  // Inisialisasi AOS
  AOS.init({ duration: 800, once: true });

  // Toggle menu mobile
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scrolling untuk navigasi
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Typewriter effect untuk hero
  const heroHeading = document.querySelector('.hero h1');
  if (heroHeading) {
    const text = heroHeading.textContent;
    heroHeading.textContent = '';
    let index = 0;
    function type() {
      if (index < text.length) {
        heroHeading.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50);
      }
    }
    type();
  }
});
