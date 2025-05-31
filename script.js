// Mobile Menu Toggle (for responsive design)
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.createElement('button');
  navToggle.className = 'nav-toggle';
  navToggle.innerHTML = '☰';
  document.querySelector('header').appendChild(navToggle);
  
  const nav = document.querySelector('nav ul');
  navToggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
  
  // Form Submission (example)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Message sent! We will contact you soon.');
      contactForm.reset();
    });
  }
});
