// SECTION SWITCHING
    const menuLinks = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('.section');

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        const target = link.getAttribute('data-section');
        sections.forEach(section => {
          section.classList.remove('active');
          if (section.id === target) {
            section.classList.add('active');
          }
        });
      });
    });

    // THEME TOGGLE
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });