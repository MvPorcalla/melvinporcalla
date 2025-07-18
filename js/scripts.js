// ==============================
// THEME TOGGLE FUNCTIONALITY
// ==============================
const toggleButton = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
const prefersDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;

const applyTheme = (isDark) => {
  if (isDark) {
    document.documentElement.removeAttribute('data-theme'); // Default dark
    toggleButton.innerHTML = "<i class='bx bx-sun'></i>";
    toggleButton.setAttribute('aria-pressed', 'true');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleButton.innerHTML = "<i class='bx bx-moon'></i>";
    toggleButton.setAttribute('aria-pressed', 'false');
    localStorage.setItem('theme', 'light');
  }
};

applyTheme(prefersDark);

toggleButton.addEventListener('click', () => {
  const currentlyLight = document.documentElement.getAttribute('data-theme') === 'light';
  applyTheme(currentlyLight);
});


// ==============================
// PRELOADER FUNCTIONALITY
// ==============================
const loader = document.getElementById('preloader');
if (loader) loader.classList.add('hidden');

// ==============================
// NAV SECTION ACTIVE HIGHLIGHT
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove("active"));
          if (navLink) navLink.classList.add("active");
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach(section => observer.observe(section));
});
