// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});

var typed = new Typed('#typing-text', {
    strings: ["I'm Pavan Saish..."],
    typeSpeed: 120,
    backSpeed: 50,
    startDelay: 500,
    showCursor: false,
    loop: true
  });
