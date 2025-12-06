// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
    navMenu.classList.toggle('flex-col');
    navMenu.classList.toggle('mt-4');
  });
}

// TOC active section highlighting
(function() {
  var tocLinks = document.querySelectorAll('.toc a');
  var headings = document.querySelectorAll('h2[id], h3[id], h4[id]');

  if (tocLinks.length && headings.length) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          tocLinks.forEach(function(link) {
            link.classList.remove('active');
          });
          var activeLink = document.querySelector('.toc a[href="#' + entry.target.id + '"]');
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, { rootMargin: '-20% 0% -80% 0%', threshold: 0 });

    headings.forEach(function(heading) {
      observer.observe(heading);
    });
  }
})();
