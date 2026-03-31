  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.section').forEach(el => observer.observe(el));

  // Scroll to top button
  const scrollBtn = document.getElementById('scrollTop');
  const heroEl = document.querySelector('.hero');

  new IntersectionObserver(([entry]) => {
    scrollBtn.classList.toggle('visible', !entry.isIntersecting);
  }, { threshold: 0 }).observe(heroEl);

