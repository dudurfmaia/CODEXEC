document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const links = menu.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
});


